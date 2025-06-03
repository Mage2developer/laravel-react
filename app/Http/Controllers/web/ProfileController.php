<?php

namespace App\Http\Controllers\web;

use App\Events\UserDeleteEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\web\ProfileUpdateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Account');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('account.edit');
    }

    /**
     * Deactivate the user's account.
     */
    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function destroy(Request $request): RedirectResponse|JsonResponse
    {

        try {

            $request->validate([
                                   'password' => ['required', 'current_password'],
                               ]);

            $user = $request->user();
            $user->status = 0;
            $user->is_deleted = 1;
            $user->save();

            // Sending email via event to customer and admin to notify
            event(new UserDeleteEvent($user->email));

            Auth::logout();

            //$user->delete();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return Redirect::to('/');

        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
