<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\Auth\RegisterRequest;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $request->validated();

        $user = User::create([
                                 'name' => $request->name,
                                 'email' => $request->email,
                                 'password' => Hash::make($request->password),
                             ]);

        event(new Registered($user));

        // Customised code for to redirect on profile activation page with pass Name, Email
        $userInfo = [
            'email' => $request->name,
            'name' => $request->email,
        ];

        return redirect()->intended(route('activate.profile', $userInfo, absolute: false));

        /*Auth::login($user);
        return redirect(route('dashboard', absolute: false));*/
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }
}
