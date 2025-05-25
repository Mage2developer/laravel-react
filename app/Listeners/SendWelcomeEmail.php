<?php

namespace App\Listeners;

use App\Mail\WelcomeUser;
use Illuminate\Auth\Events\Registered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Bus\Queueable;

class SendWelcomeEmail
{
    use InteractsWithQueue, Queueable;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $user = $event->user;
        Mail::to($user->email)->send(new WelcomeUser($user));
    }
}
