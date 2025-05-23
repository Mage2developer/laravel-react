<?php

namespace App\Http\Controllers\Admin\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\api\Admin\UserProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserProfileUpdate extends Controller
{
    public function update(UserProfileUpdateRequest $request, $userId): JsonResponse
    {
        try {
            $request->validated();

            $user = User::findOrFail($userId);

            $user->update($request->all());

            return response()->json([
                                        'message' => 'User Profile details have been updated successfully',
                                        'success' => true
                                    ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
