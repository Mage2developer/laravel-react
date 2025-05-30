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


            Mail::to($email)->send(new TestMail());


            $subject = 'the subject';
            $message = 'hello';
            $headers = 'From: shishangiya.yogesh@gmail.com'       . "\r\n" .
                'Reply-To: shishangiya.yogesh@gmail.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail($email, $subject, $message, $headers);

            Log::info("Mail has been sent");

        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

    }
}
