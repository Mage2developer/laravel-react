<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

use App\Notifications\MobileResetPasswordNotification;


class ForgotPasswordController extends Controller
{
    /**
     * Sent Reset Password link
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unable to send reset link'
            ], 400);
        }


        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json([
                'success' => true,
                'message' => 'Password reset link sent to your email'
            ], 200);
        }
    }

    /**
     * Reset password using token
     */
    public function resetPassword(Request $request)
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
                    'password' => bcrypt($password)
                ])->save();
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return response()->json([
                'success' => true,
                'message' => 'Password has been reset successfully'
            ], 200);
        }

        return response()->json([
            'success' => false,
            'message' => 'Failed to reset password'
        ], 400);
    }

    /**
     * Verify reset token (for mobile app)
     */
    public function verifyToken(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email|exists:users,email'
        ]);

        $email = $request->email;
        $plainToken = $request->token;

        // Get the hashed token from the database
        $user = DB::table('password_reset_tokens')
            ->where('email', $email)
            ->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or token.'
            ], 400);
        }

        // Compare the plain token with the hashed one
        if (!Hash::check($plainToken, $user->token)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid token.'
            ], 400);
        }

        // Check if token is expired (optional: usually tokens expire in 60 minutes)
        $expires = 60; // minutes
        $tokenCreatedAt = \Carbon\Carbon::parse($user->created_at);

        if ($tokenCreatedAt->addMinutes($expires)->isPast()) {
            return response()->json([
                'success' => false,
                'message' => 'Token has expired.'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'message' => 'Token is valid.'
        ], 200);
    }

}
