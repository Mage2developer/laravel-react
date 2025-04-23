<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\api\SignupRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\UserContactDetail;

class UserAuthController extends Controller
{
    /**
     * User Registration API
     *
     * @param SignupRequest $request
     * @return JsonResponse
     */
    public function signup(SignupRequest $request)
    {
        $request->validated();
        $user = User::create($request->all());
        $token = $user->createToken($request->name);

        return response()->json([
                                    'success' => true,
                                    'user' => $user,
                                    'token' => $token->plainTextToken
                                ]);
    }

    /**
     * User Login API
     *
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $request->validated();
        $user = User::where('email', $request->email)->first();


        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                                        'message' => 'The Provided credentials are incorrect.',
                                        'success' => false
                                    ]);
        }

        // Check if user is enable or not
        if ($user->status != 1) {
            return response()->json([
                                        'message' => 'You need to activate your account.',
                                        'success' => false
                                    ]);
        }

        $token = $user->createToken($user->name);

        return response()->json([
                                    'success' => true,
                                    'user' => $user,
                                    'token' => $token->plainTextToken
                                ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
                                    'message' => 'You are logged out.',
                                    'success' => true
                                ]);
    }
}
