<?php

namespace App\Listeners;

use App\Events\ContactEvent;
use App\Mail\ContactForm;
use Illuminate\Auth\Events\Registered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Bus\Queueable;
use App\Http\Helper\Data;

class SendContactEmail
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
    public function handle(ContactEvent $event): void
    {
        // TODO : Please checck bcc functionality

        $data = $event->data;
        Mail::to($data['email'])->send(new ContactForm($data));
        Mail::to(Data::ADMIN_EMAIL)->send(new ContactForm($data));
    }
}
