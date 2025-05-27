<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\api\UserPasswordUpdateRequest;

class UserPasswordUpdate extends Controller
{
    public function update(UserPasswordUpdateRequest $request)
    {
        try {
            $request->validate();

            $user = $request->user();

            if (!Hash::check($request->current_password, $user->password)) {
                throw ValidationException::withMessages([
                                                            'current_password' => ['The provided password does not match your current password.'],
                                                        ]);
            }

            $user->forceFill([
                                 'password' => Hash::make($request->password),
                             ])->save();

            //$user->tokens()->delete();


            return response()->json([
                                        'message' => 'Password has been updated successfully',
                                        'success' =>
                                            true
                                    ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
