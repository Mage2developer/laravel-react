<?php

namespace App\Http\Controllers\web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Http\Requests\web\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Customised code for checking user status before login
        $user = User::where('email', $request->email)->first();

        // If user account deleted user not able to login as well.
        if($user && $user->is_deleted == Data::ENABLE) {
            throw ValidationException::withMessages([
                                                        'email' => trans('auth.failed'),
                                                    ]);
        }

        if ($user && $user->status != Data::ENABLE ) {
            $userInfo = [
                'email' => $user->email,
                'name' => $user->name,
            ];
            return redirect()->intended(route('activate.profile', $userInfo,  absolute: false));
        }

        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('profile.edit', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
