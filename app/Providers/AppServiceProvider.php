<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

use OpenSoutheners\LaravelCompanionApps\CompanionApplication;

use OpenSoutheners\LaravelCompanionApps\Platform;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        \OpenSoutheners\LaravelCompanionApps\ServiceProvider::loadApplications([
           CompanionApplication::make('com.vanandvivah.vanandvivah', Platform::Android)
               ->linkScheme('exp+vanandvivah'),

           CompanionApplication::make('com.vanandvivah.vanandvivah', Platform::Android)
               ->linkScheme('exp+vanandvivah'),

           CompanionApplication::make('com.example', Platform::Apple)
               ->linkScheme('example')
               ->setStoreOptions(id: '123456789', slug: 'example_app')
       ]);
    }
}
