<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UserProfileController extends Controller
{
    public function __construct(
        protected User $user
    ) {
    }

    /**
     * Get List of all profile
     *
     * @param Request $request
     * @return Response
     */
    public function list(Request $request): Response
    {
        $request->validate([
                               'name' => 'string|max:50',
                           ]);

        $name =
            $request->input('name') ? trim(str_replace(['%', '_'], ['\%', '\_'], $request->input('name'))) : null;

        /*$gender =
            $request->input('sex') ? $request->input('sex') : null;*/

        $gender = 0;
        $ageFrom = 20;
        $ageTo = 25;


        $filters = [
            // Todo Age betweem Search
            [
                'type' => 'age_between',
                'value' => [
                    'ageFrom' => $ageFrom,
                    'ageTo' => $ageTo
                ]
            ],
            [
                'type' => 'sex',
                'value' => $gender,
            ],
            [
                'type' => 'name',
                'value' => $name
            ]
        ];


        $profiles = $this->user->getUserProfileList($filters);

        return Inertia::render('Profile/List/Index', [
            'profiles' => $profiles->toArray()
        ]);
    }

    /**
     * Get Profile by ID
     *
     * @param Request $request
     * @param User $user
     * @return Response
     */
    public function view(Request $request): RedirectResponse | Response
    {
        // If user not logged in redirect on Notice page
        if (!Auth::id()) {
            return redirect(route('login.required', absolute: false));
        }

        $profileId = $request->route('profileId');
        $userProfile = $this->user->getUserProfileById($profileId);

        return Inertia::render('Profile/View/Index', [
            'profile' => $userProfile->toArray()
        ]);
    }
}
