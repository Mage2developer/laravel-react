<?php

namespace App\Http\Controllers\web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
                               'email' => 'required|email',
                           ]);

        // Checking if user has been deleted of disable
        $user = User::where('email', $request->only('email'))->first();

        if ($user && $user->is_deleted == Data::ENABLE) {
            throw ValidationException::withMessages([
                                                        'email' => trans('auth.failed'),
                                                    ]);
        }

        if ($user && $user->status != Data::ENABLE) {
            $userInfo = [
                'email' => $user->email,
                'name' => $user->name,
            ];
            return redirect()->intended(route('activate.profile', $userInfo, absolute: false));
        }

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return back()->with('status', __($status));
        }

        throw ValidationException::withMessages([
                                                    'email' => [trans($status)],
                                                ]);
    }
}
