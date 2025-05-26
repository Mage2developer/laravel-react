<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Http\Requests\api\SignupRequest;
use App\Http\Requests\web\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        try {
            $request->validated();
            $user = User::create($request->all());

            event(new Registered($user));

            $token = $user->createToken($request->name);

            return response()->json([
                                        'success' => true,
                                        'user' => $user,
                                        'token' => $token->plainTextToken
                                ]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
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
        if ($user && $user->status != Data::ENABLE) {
            return response()->json([
                                        'message' => 'You need to activate your account.',
                                        'success' => false
                                    ]);
        }

        // Check if user is deleted or not
        if ($user && $user->is_deleted == Data::ENABLE) {
            return response()->json([
                                        'message' => 'Your account has been deleted. Please contact admin if you want to create account with same email.',
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
