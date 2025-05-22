<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{
    /**
     * Sent Reset Password link
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function sendResetLinkEmail(Request $request): JsonResponse
    {
        $request->validate(['email' => 'required|email']);

        // Checking if user has been deleted of disable
        $user = User::where('email',  $request->only('email'))->first();

        if($user->is_deleted == Data::ENABLE) {
            throw ValidationException::withMessages([
                                                        'email' => trans('auth.failed'),
                                                    ]);
        }

        if ($user && $user->status != Data::ENABLE) {
            $userInfo = [
                'email' => $user->email,
                'name' => $user->name,
            ];
            return redirect()->intended(route('activate.profile', $userInfo,  absolute: false));
        }

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['success' => true, 'message' => __($status)], 200)
            : response()->json(['success' => false, 'message' => __($status)], 400);
    }
}
