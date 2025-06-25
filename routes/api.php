<?php

use App\Http\Controllers\api\ContactController;
use App\Http\Controllers\api\ForgotPasswordController;
use App\Http\Controllers\api\GetCityController;
use App\Http\Controllers\api\GetCountryController;
use App\Http\Controllers\api\GetStateController;
use App\Http\Controllers\api\GetUserProfileController;
use App\Http\Controllers\api\UserAuthController;
use App\Http\Controllers\api\UserContactDetailController;
use App\Http\Controllers\api\UserEducationDetailController;
use App\Http\Controllers\api\UserFamilyDetailController;
use App\Http\Controllers\api\UserImageController;
use App\Http\Controllers\api\UserPasswordUpdate;
use App\Http\Controllers\api\UserPersonalDetailController;
use App\Http\Controllers\api\UserProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post("/login", [UserAuthController::class, 'login']);
Route::post("/signup", [UserAuthController::class, 'signup']);

Route::post('/contact-us', [ContactController::class, 'createRequest'])->name('contact.submit');

Route::get('/getCountry', [GetCountryController::class, 'show'])->name('country.index');
Route::get('/getCountryById/{id}', [GetCountryController::class, 'getCountryById'])->name('get.country.byid');

Route::get('/getState/{id}', [GetStateController::class, 'show'])->name('state.index');
Route::get('/getStateById/{id}', [GetStateController::class, 'getStateById'])->name('get.state.byid');

Route::get('/getCity/{id}', [GetCityController::class, 'show'])->name('city.index');
Route::get('/getCityById/{id}', [GetCityController::class, 'getCityById'])->name('get.city.byid');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [UserProfileController::class, 'show']);
    Route::put('/profile', [UserProfileController::class, 'update']);
    Route::put('/userContactDetail', [UserContactDetailController::class, 'update']);
    Route::put('/userEducationDetail', [UserEducationDetailController::class, 'update']);
    Route::put('/userPersonalDetail', [UserPersonalDetailController::class, 'update']);
    Route::put('/userFamilyDetail', [UserFamilyDetailController::class, 'update']);
    Route::put('/userPasswordUpdate', [UserPasswordUpdate::class, 'update']);
    Route::post('/logout', [UserAuthController::class, 'logout']);
    Route::post('/deleteProfile', [UserProfileController::class, 'destroy']);

    Route::post('/profileImages', [UserImageController::class, 'store']);
    Route::post('/profileImages/{id}/replace', [UserImageController::class, 'replace']);
    Route::delete('/profileImages/{id}', [UserImageController::class, 'destroy']);
    Route::get('/profileImages', [UserImageController::class, 'index']);
});

Route::get("/profileList/", [UserProfileController::class, 'index']);
Route::get("/profileList/{name}", [UserProfileController::class, 'index']);
Route::get('/profile/{profileId}', [UserProfileController::class, 'getProfileById']);

Route::prefix('password')->group(function () {
    Route::post('/email', [ForgotPasswordController::class, 'sendResetLink']);
//    Route::post('/reset', [ForgotPasswordController::class, 'resetPassword']);
});

Route::post('/reset-password', [UserProfileController::class, 'resetPassword'])->name('api.password.reset');
Route::post('/verify-token', [ForgotPasswordController::class, 'verifyToken']);

Route::get("/hello/{name}", function ($name) {
    return "Hello " . $name . "!";
});



