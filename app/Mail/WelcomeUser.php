<?php

namespace App\Mail;

use App\Models\User; // Assuming you pass the User model
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Http\Helper\Data;

class WelcomeUser extends Mailable
{
    use Queueable, SerializesModels;

    public $user; // Public property to make the user available in the view

    /**
     * Create a new message instance.
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Welcome to '. config('app.name'),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.welcome-user', // This will be your Blade view
            with: [
                          'user' => $this->user,
                          'appName' => config('app.name'),
                          'appUrl' => config('app.url'),
                          'logo' => asset(Data::EMAIL_LOGO),
                      ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
