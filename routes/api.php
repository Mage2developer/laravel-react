<?php

use App\Http\Controllers\api\GetUserProfileController;
use App\Http\Controllers\api\UserAuthController;
use App\Http\Controllers\api\UserContactDetailController;
use App\Http\Controllers\api\UserEducationDetailController;
use App\Http\Controllers\api\UserFamilyDetailController;
use App\Http\Controllers\api\UserPersonalDetailController;
use App\Http\Controllers\api\UserProfileController;
use App\Http\Controllers\MemberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserImageController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post("/login", [UserAuthController::class, 'login']);
Route::post("/signup", [UserAuthController::class, 'signup']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [UserProfileController::class, 'show']);
    Route::put('/profile', [UserProfileController::class, 'update']);
    Route::put('/userContactDetail', [UserContactDetailController::class, 'update']);
    Route::put('/userEducationDetail', [UserEducationDetailController::class, 'update']);
    Route::put('/userPersonalDetail', [UserPersonalDetailController::class, 'update']);
    Route::put('/userFamilyDetail', [UserFamilyDetailController::class, 'update']);
    Route::post('/logout', [UserAuthController::class, 'logout']);

    Route::post('/profileImages', [UserImageController::class, 'store']);
    Route::post('/profileImages/{id}/replace', [UserImageController::class, 'replace']);
    Route::delete('/profileImages/{id}', [UserImageController::class, 'destroy']);
    Route::get('/profileImages', [UserImageController::class, 'index']);
});

Route::get("/profileList/", [UserProfileController::class, 'index']);
Route::get("/profileList/{name}", [UserProfileController::class, 'index']);
Route::get('/profile/{profileId}', [UserProfileController::class, 'getProfileById']);




Route::get("/memberList", [MemberController::class, "index"]);

Route::get("/memberView/{memberId}", [MemberController::class, "show"]);

Route::get("/hello/{name}", function ($name) {
    return "Hello " . $name . "!";
});



