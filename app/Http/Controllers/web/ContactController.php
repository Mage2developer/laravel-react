<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Http\Requests\Auth\ContactRequest;

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

        dd($request->all());die();

        // Send the email
        Mail::to(config('mail.from.address')) // Configure your recipient email in config/mail.php
        ->send(new ContactFormSubmitted($request->all()));

        // Optionally, you can redirect the user with a success message
        return redirect(route('ContactUs'))->withSuccess('Your message has been sent successfully.');
    }
}
