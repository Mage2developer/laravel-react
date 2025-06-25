<?php

namespace App\Http\Controllers\api;

use App\Events\UserDeleteEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\web\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class UserProfileController extends Controller
{
    public function __construct(
        protected User $user
    )
    {
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
        try {
            $profileId = $request->route('profileId');
            $profile = $this->user->getUserProfileById($profileId);

            return response()->json(['profile' => $profile]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    /**
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $profiles = $this->user->getUserProfileList();

            return response()->json(['profiles' => $profiles]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    /**
     * Delete User
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function destroy(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'password' => ['required', 'current_password'],
            ]);

            $user = $request->user();
            $user->status = 0;
            $user->is_deleted = 1;
            $user->save();

            event(new UserDeleteEvent($user->email));

            $user->tokens()->delete();

            return response()->json([
                'message' => 'Your profile has been successfully deleted.',
                'success' => true
            ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    /**
     * Reset User Password
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function resetPassword(Request $request): JsonResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return response()->json(['message' => __($status)], 200);
        }

        throw ValidationException::withMessages([
            'email' => [__($status)],
        ]);
    }
}
