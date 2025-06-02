<?php

namespace App\Http\Controllers\web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\web\Auth\RegisterRequest;
use App\Mail\WelcomeUser;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

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

        try {
            Mail::to(config('mail.from.address'))->send(new WelcomeUser($user));  
        } catch(Exception $exception) {
            Log::critical($exception->getMessage());
        }

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
