<?php

namespace App\Providers;

use app\Events\ContactEvent;
use App\Events\UserActivateEvent;
use App\Events\UserDeleteEvent;
use App\Listeners\SendContactEmail;
use App\Listeners\SendWelcomeEmail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Listeners\SendUserActivateEmail;

use App\Listeners\SendUserDeleteEmail;


class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendWelcomeEmail::class,
        ],
        ContactEvent::class => [
            SendContactEmail::class,
        ],
        UserDeleteEvent::class => [
            SendUserDeleteEmail::class
        ],
        UserActivateEvent::class => [
            SendUserActivateEmail::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot(): void
    {
        //
    }
}
