<?php

use App\Http\Controllers\Admin\api\UserProfileUpdate;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\api\UserContactDetailController;
use App\Http\Controllers\api\UserEducationDetailController;
use App\Http\Controllers\api\UserFamilyDetailController;
use App\Http\Controllers\api\UserImageController;
use App\Http\Controllers\api\UserPersonalDetailController;
use App\Http\Controllers\api\UserProfileController as ApiUserProfileController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\web\ContactController;
use App\Http\Controllers\web\UserProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $userModel = new User();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'latestProfile' => $userModel->getLatestUserProfile(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/my-account', [ProfileController::class, 'edit'])->name('account.edit');
    Route::patch('/my-account', [ProfileController::class, 'update'])->name('account.update');
    Route::delete('/my-account', [ProfileController::class, 'destroy'])->name('account.destroy');
    Route::get('/profile', function () {
        return Inertia::render('Profile/Edit');
    })->name('profile.edit');
    Route::get('/currentProfile/{profileId}', [ApiUserProfileController::class, 'getProfileById']);
    Route::patch('/userContactDetail', [UserContactDetailController::class, 'update']);
    Route::patch('/userEducationDetail', [UserEducationDetailController::class, 'update']);
    Route::patch('/userPersonalDetail', [UserPersonalDetailController::class, 'update']);
    Route::patch('/userFamilyDetail', [UserFamilyDetailController::class, 'update']);

    Route::post('/profileImages', [UserImageController::class, 'store']);
    Route::delete('/profileImages/{id}', [UserImageController::class, 'destroy']);
    Route::get('/profileImages', [UserImageController::class, 'index']);
    // Admin pages

});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('users.index');
    Route::post('/admin/users/mass-delete', [UserController::class, 'massDestroy'])->name('users.massDestroy');
    Route::post('/admin/users/mass-active', [UserController::class, 'massActive'])->name('users.massActive');
    Route::get('/admin/users/edit/{profileId}', [UserController::class, 'edit'])->name('users.edit');
    Route::patch('/admin/users/profileUpdate/{profileId}', [UserProfileUpdate::class, 'update'])->name(
        'users.admin.profileUpdate'
    );
});

Route::get('/profiles', [UserProfileController::class, 'list'])->name('profile.list');
Route::get('/profile/{profileId}', [UserProfileController::class, 'view'])->name('profile.view');

// Activate Profile section after signUp
Route::get('/activateProfile', function () {
    return Inertia::render('ProfileActivation');
})->name('activate.profile');

// Disable access profile with-out login
Route::get('/loginRequired', function () {
    return Inertia::render('LoginRequired');
})->name('login.required');

// How to create profile page
Route::get('/how-to-create-profile', function () {
    return Inertia::render('HowToCreateProfile');
})->name('how.to.create.profile');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about.us');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy.policy');


Route::get('/contact-us', [ContactController::class, 'index'])->name('contact.show');
Route::post('/contact-us', [ContactController::class, 'createRequest'])->name('contact.submit');

Route::get('/terms-conditions', function () {
    return Inertia::render('TermsandCondition');
})->name('terms.conditions');

require __DIR__ . '/auth.php';
