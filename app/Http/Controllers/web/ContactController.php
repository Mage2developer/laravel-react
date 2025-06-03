<?php

namespace App\Http\Controllers\web;

use App\Events\ContactEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\web\Auth\ContactRequest;
use App\Mail\ContactForm;
use Inertia\Inertia;

use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('ContactUs');
    }

    public function createRequest(ContactRequest $request)
    {
        // Validate the form data
        try {
            $request->validated();
            $data = $request->all();
            event(new ContactEvent($data));
            //Mail::to(config('mail.from.address'))->send(new ContactForm($request->all()));
        } catch(Exception $exception) {
            Log::critical($exception->getMessage());
        }

        // Optionally, you can redirect the user with a success message
        return redirect()->back()->with('success', 'Your message has been received. A member of our team will get back to you shortly. We appreciate your interest and will do our best to assist you as quickly as possible.');
    }
}
