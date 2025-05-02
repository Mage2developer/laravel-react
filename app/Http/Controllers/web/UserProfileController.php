<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
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

        $profiles = $this->user->getUserProfileList($name);


        return Inertia::render('Profile/List/Index', [
            'profiles' => $profiles
        ]);
    }

    /**
     * Get Profile by ID
     *
     * @param Request $request
     * @param User $user
     * @return Response
     */
    public function view(Request $request, User $user): Response
    {
        $profileId = $request->route('profileId');
        $userProfile = $this->user->getUserProfileById($profileId);

        return Inertia::render('Profile/View/Index', [
            'profile' => $userProfile
        ]);
    }
}
