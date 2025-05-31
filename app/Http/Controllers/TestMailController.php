<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Mockery\Exception;

use Illuminate\Support\Facades\Log;

class TestMailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function sendEmail()
    {
        try {
            $email = "vanandvivah@gmail.com";
            Mail::to($email)->send(new TestMail());
            Log::info("Mail has been sent");
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

    }
}
