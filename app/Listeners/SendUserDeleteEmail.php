<?php

namespace App\Listeners;

use App\Events\UserDeleteEvent;
use App\Http\Helper\Data;
use App\Mail\UserDelete;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendUserDeleteEmail
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
    public function handle(UserDeleteEvent $event): void
    {
        $email = $event->data;
        Mail::to($email)->bcc(Data::ADMIN_EMAIL)->send(new UserDelete($email));
    }
}
