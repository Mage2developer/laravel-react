<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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

        // Generate token and send email
        $token = Password::createToken($user);

        // Send mobile-specific notification
        //$user->notify(new MobileResetPasswordNotification($token, true));

        return response()->json([
                                    'message' => 'We have emailed your password reset link.'
                                ], 200);
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
                               'email' => 'required|email'
                           ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                                        'success' => false,
                                        'message' => 'User not found'
                                    ], 404);
        }

        // Check if token is valid
        $tokenExists = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->where('created_at', '>', now()->subHours(1)) // Token expires in 1 hour
            ->exists();

        return response()->json([
                                    'success' => $tokenExists,
                                    'message' => $tokenExists ? 'Token is valid' : 'Invalid or expired token'
                                ]);
    }

}
