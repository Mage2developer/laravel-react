<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

class TestMailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function sendEmail()
    {
        $email = "vanandvivah@gmail.com";
        Mail::to($email)->send(new TestMail());
        echo "Mail has been sent";
    }


}
