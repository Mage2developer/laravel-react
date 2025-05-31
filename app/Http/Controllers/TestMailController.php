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

            Mail::to("vanandvivah@gmail.com")->send(new TestMail());


            $to      = 'vanandvivah@gmail.com';
            $subject = 'the subject';
            $message = 'hello';
            $headers = 'From: shishangiya.yogesh@gmail.com'       . "\r\n" .
                'Reply-To: shishangiya.yogesh@gmail.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail($to, $subject, $message, $headers);

        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

    }
}
