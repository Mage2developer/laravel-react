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

        /*
         * $gender = $request->input('sex') ? $request->input('sex') : null;
         * $ageFrom = $request->input('ageFrom') ? $request->input('ageFrom') : null;
         * $ageTo = $request->input('ageTo') ? $request->input('ageTo') : null;
         * $income = $request->input('personal_income') ? $request->input('personal_income') : null;
        */

        /*$gender = 0;
        $ageFrom = 20;
        $ageTo = 60;
        $income = 20001;*/

        // This is filter demo
        /*$filters = [
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
                'type' => 'personal_income',
                'value' => $income
            ]
        ];*/

        $filters = [];

        $profiles = $this->user->getUserProfileList($filters);

        if (!$profiles) {
            return redirect(route('profile.list'))->withErrors(['Profile not found']);
        }

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

        // If profile not exit
        if (!$userProfile) {
            return redirect(route('profile.list'))->withErrors(['Profile not found']);
        }

        return Inertia::render('Profile/View/Index', [
            'profile' => $userProfile->toArray()
        ]);
    }
}
