<?php

namespace App\Listeners;

use App\Events\UserActivateEvent;
use App\Http\Helper\Data;
use App\Mail\UserActivate;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendUserActivateEmail
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
    public function handle(UserActivateEvent $event): void
    {
        $user = $event->data;
        Mail::to($user['email'])->bcc(Data::ADMIN_EMAIL)->send(new UserActivate($user));
    }
}
