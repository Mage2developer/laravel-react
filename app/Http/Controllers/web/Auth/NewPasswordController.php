<?php

namespace App\Http\Controllers\web\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Jenssegers\Agent\Facades\Agent;
use OpenSoutheners\LaravelCompanionApps\Support\Facades\Companion;


class NewPasswordController extends Controller
{

    public function __construct(
        private User $userModel,
    ) {
        $this->userModel = $userModel;
    }

    /**
     * Display the password reset view.
     */
    public function create(Request $request)
    {
        if (Agent::isMobile()) {
            $resetUrl =
                route('password.reset', ['token' => $request->token, 'email' => urlencode($request->email)]);

            $email = urlencode($request->email);

            return redirect()->toApp(
                Companion::android('com.vanandvivah.vanandvivah'),
                $request->token."?email={$email}",
                $resetUrl
            );
        } else {
            return Inertia::render('Auth/ResetPassword', [
                'email' => $request->email,
                'token' => $request->route('token'),
            ]);
        }
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
                               'token' => 'required',
                               'email' => 'required|email',
                               'password' => ['required', 'confirmed', Rules\Password::defaults()],
                           ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                                     'password' => Hash::make($request->password),
                                     'remember_token' => Str::random(60),
                                 ])->save();

                event(new PasswordReset($user));
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        if ($status == Password::PASSWORD_RESET) {
            return redirect()->route('login')->with('status', __($status));
        }

        throw ValidationException::withMessages([
                                                    'email' => [trans($status)],
                                                ]);
    }

    /**
     * @param $notifiable
     * @return string
     */
    protected function getMobileResetUrl($email, $token): string
    {
        $scheme = config('app.mobile_app.deep_link_scheme');
        $path = config('app.mobile_app.reset_password_path');
        $token = $token;
        $email = urlencode($email);

        return "{$scheme}://{$path}/{$token}?email={$email}";
    }
}
