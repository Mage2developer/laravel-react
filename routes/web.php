<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\web\UserProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

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
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
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

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact.us');

Route::get('/terms-conditions', function () {
    return Inertia::render('TermsandCondition');
})->name('terms.conditions');

require __DIR__ . '/auth.php';
