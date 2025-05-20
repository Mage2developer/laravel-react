<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function __construct(
        protected User $user
    ) {
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * @param ProfileUpdateRequest $request
     * @return JsonResponse
     */
    public function update(ProfileUpdateRequest $request)
    {
        try {
            $request->validated();
            $request->user()->update($request->only(['name', 'email']));
            return response()->json(
                ['message' => 'Profile updated successfully', 'user' => $request->user(), 'success' => true]
            );
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getProfileById(Request $request, User $user): JsonResponse
    {
        // TODO:: Check user logged in then able to view user profile
        /*
        if (!Auth::id()) {
            return response()->json(['success' => 'false', 'message' => 'You need to login for view profile.']);
        }*/


        $profileId = $request->route('profileId');
        $profile = $this->user->getUserProfileById($profileId);

        return response()->json(['profile' => $profile]);
    }

    /**
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        // TODO:: Check user logged in then able to search user profile
        try {
            $request->validate([
                                   'name' => 'string|max:50',
                               ]);

            $name =
                $request->input('name') ? trim(str_replace(['%', '_'], ['\%', '\_'], $request->input('name'))) : null;

            // TODO:: Check user logged in then able to view user profile
            /*if ($name && !Auth::id()) {
                return response()->json(['success' => 'false', 'message' => 'You need to login for search profile.']);
            }*/

            $profiles = $this->user->getUserProfileList($name);

            return response()->json(['profiles' => $profiles]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
