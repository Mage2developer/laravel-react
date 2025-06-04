<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;

class MobileResetPasswordNotification extends ResetPasswordNotification
{
    use Queueable;

    protected $isMobileApp;

    public function __construct($token, $isMobileApp = false)
    {
        $this->token = $token;
        $this->isMobileApp = $isMobileApp;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        if ($this->isMobileApp) {
            return $this->buildMobileMailMessage($notifiable);
        }

        return $this->buildMailMessage($this->resetUrl($notifiable));
    }


    protected function buildMobileMailMessage($notifiable)
    {
        $email = $notifiable->getEmailForPasswordReset();

        return (new MailMessage)
            ->subject(Lang::get('Reset Password Notification'))
            ->line(
                Lang::get('You are receiving this email because we received a password reset request for your account.')
            )
            ->action(Lang::get('Reset Password'), $this->getMobileResetUrl($email))
            ->line(
                Lang::get(
                    'This password reset link will expire in :count minutes.',
                    ['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]
                )
            )
            ->line(Lang::get('If you did not request a password reset, no further action is required.'));
    }

    /**
     * @param $notifiable
     * @return string
     */
    protected function resetUrl($notifiable)
    {
        $email = $notifiable->getEmailForPasswordReset();

        if ($this->isMobileApp) {
            return $this->getMobileResetUrl($email);
        }

        return parent::resetUrl($notifiable);
    }

    /**
     * Get mobile reset password Url
     *
     * @param $webUrl
     * @param $email
     * @return string
     */
    protected function getMobileResetUrl($email)
    {
        $scheme = config('app.mobile_app.deep_link_scheme');
        $path = config('app.mobile_app.reset_password_path');
        $token = $this->token;
        $email = urlencode($email);

        return "{$scheme}://{$path}/{$token}?email={$email}";
    }
}


