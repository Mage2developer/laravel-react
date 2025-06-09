<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to {{ $appName }}</title>
        <style>
            body {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto !important;
                padding: 20px;
                background-color: #f4f4f4;
            }
            ul {
                margin: 0px auto;
            }
            .email-container {
                background-color: #ffffff;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding: 0 !important;
            }
            .logo {
                width: 300px !important;
                margin: 0 auto;
            }
            .welcome-title {
                font-size: 28px;
                color: #1f2937;
                margin-bottom: 20px;
                text-align: center;
            }
            .user-name {
                color: #ff3131;
                font-weight: 600;
            }
            .content {
                margin-bottom: 30px;
                text-align: center;
            }
            .content p {
                margin-bottom: 15px;
                font-size: 16px;
                line-height: 1.8;
                text-align: left;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                color: white;
                padding: 15px 30px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 16px;
                margin: 20px 0;
                transition: transform 0.2s ease;
            }
            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 15px rgba(79, 70, 229, 0.3);
            }
            .features {
                margin: 30px 0;
                text-align: left;
            }
            .main-title {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 20px;
            }
            .feature-item {
                align-items: center;
                margin-bottom: 15px;
                padding: 15px;
                /* background-color: #f8fafc; */
                border-radius: 8px;
            }
            .feature-icon {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }
            .feature-icon img {
                width: 30px;
                height: 30px;
                object-fit: contain;
                border-radius: 5px;
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 30px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
            }
            .social-links {
                margin: 20px 0;
            }
            .social-links a {
                display: inline-block;
                margin: 0 0px;
                color: #ff3131;
                text-decoration: none;
            }
            .icon-size {
                font-size: 30px;
            }
            @media (max-width: 600px) {
                body {
                    padding: 10px;
                }
                .email-container {
                    padding: 20px;
                }
                .welcome-title {
                    font-size: 24px;
                }
                .cta-button {
                    padding: 12px 24px;
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div class="logo">
                    <img src="{{ $logo }}" alt="{{ $appName }}" />
                </div>
            </div>

            <h1 class="welcome-title">
                Welcome, <span class="user-name">{{ $user->name }}</span>! 🎉
            </h1>

            <div class="content">
                <p>
                    We're thrilled to have you join {{ $appName }}! Your account
                    has been successfully created and you're all set to get
                    started.
                </p>

                <p>Here's what you can do next:</p>
            </div>

            <div class="features">
                <div class="feature-item">
                    <div class="main-title">
                        <div class="feature-icon">
                        <img src="{{ asset('images/icons/user-check.svg') }}" alt="">
                        </div>
                        <strong>Activate your profile</strong><br />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div><b>User Name :</b> {{ $user->name }}</div>
                            </li>
                            <li>
                                <div><b>Email :</b> {{ $user->email }}</div>
                            </li>
                            <li>
                                <b>Contact Admin: </b> Please send your User ID
                                & Full Name via Admin WhatsApp Number.
                            </li>
                            <li>
                                Share your payment screenshot & Aadhaar card
                                photo with the admin on WhatsApp. <br />
                                UPI ID for payment :
                                <b>mage2developer@axisbank</b>
                            </li>
                            <li>
                                You cannot log in until your profile is
                                activated.
                            </li>
                            <li>
                                <b>Admin WhatsApp Number :</b> +91-8200426399
                            </li>
                            <li>
                                It may take <b> 3-5 working days </b> to
                                activate your profile. Once profile has been
                                activated admin will notify you on your same
                                WhatsApp Number.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="feature-item">
                    <div class="main-title">
                        <div class="feature-icon">
                        <img src="{{ asset('images/icons/complete.svg') }}" alt="" style="width: 40px; height: 40px">
                        </div>
                        <strong>Complete your profile</strong><br />
                    </div>
                    <ul>
                        Add your personal information and preferences
                    </ul>
                </div>
                <div class="feature-item">
                    <div class="main-title">
                        <div class="feature-icon">
                            <img src="{{ asset('images/icons/search.svg') }}" alt="">
                        </div>
                        <strong>Explore All Profiles</strong><br />
                    </div>
                    <ul>
                        Discover all profile view available to you
                    </ul>
                </div>
            </div>

            <div class="content">
                <p>
                    If you have any questions or need assistance, don't hesitate
                    to reach out to our support team. We're here to help!
                </p>
            </div>

            <div class="footer">
                <div class="social-links">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/"
                        >
                        <div class="feature-icon">
                        <img src="{{ asset('images/icons/facebook.png') }}" alt="">
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/vanand.vivah/"
                        >
                        <div class="feature-icon">
                        <img src="{{ asset('images/icons/instagram.png') }}" alt="">
                        </div>
                    </a>
                </div>

                <p>
                    Thanks for joining {{ $appName }}!<br />
                    This email was sent to {{ $user->email }}
                </p>

                <p>
                    <a href="{{ $appUrl }}" style="color: #4f46e5"
                        >www.vanandvivah.com</a
                    >
                    |
                    <a href="{{ $appUrl }}/contact-us" style="color: #4f46e5"
                        >Contact Support</a
                    >
                </p>

                <p style="margin-top: 20px; font-size: 12px">
                    © {{ date('Y') }} {{ $appName }}. All rights reserved.<br />
                </p>
            </div>
        </div>
    </body>
</html>
