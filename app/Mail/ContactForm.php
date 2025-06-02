<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Http\Helper\Data;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    public $formData;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $formData)
    {
        $this->formData = $formData;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        // TODO : Please checck bcc functionality

        return new Envelope(
            subject: 'Contact Request Created'
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact.submitted', // We'll create this email template
            with: [
                      'name' => $this->formData['name'],
                      'email' => $this->formData['email'],
                      'subject' => $this->formData['subject'] ?? 'No Subject',
                      'contactMessage' => $this->formData['message'],
                      'appName' => config('app.name'),
                      'appUrl' => config('app.url'),
                      'logo' => asset(Data::EMAIL_LOGO),
                  ],
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
