<?php

namespace App\Http\Controllers\web;

use App\Events\ContactEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\web\Auth\ContactRequest;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('ContactUs');
    }

    public function createRequest(ContactRequest $request)
    {
        // Validate the form data
        $request->validated();
        $data = $request->all();

        event(new ContactEvent($data));

        // Send the email
        /*Mail::to(config('mail.from.address')) // Configure your recipient email in config/mail.php
        ->send(new ContactFormSubmitted($request->all()));*/

        // Optionally, you can redirect the user with a success message
        return redirect()->back()->with('success', 'Your message has been sent successfully.');
    }
}
