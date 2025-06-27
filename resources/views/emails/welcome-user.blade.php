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
        color: #000000;
        max-width: 800px;
        margin: 0 auto !important;
        padding: 20px;
        background-color: #f4f4f4;
    }

    ul {
        margin: 0px auto;
    }

    .red {
        color: #ff3131;
    }

    .email-container {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        margin: 0 auto !important;
        color: #000000;
        line-height: 1.6;
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
        color: #ff3131;
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
        width: auto !important;
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
            padding: 10px;
        }

        .welcome-title {
            font-size: 24px;
        }

        .cta-button {
            padding: 12px 24px;
            font-size: 14px;
        }
        .activation-container {
        max-width: 700px;
        margin: 10px auto;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    }

    /* Activation Style */
    .activation-container {
        max-width: 700px;
        margin: 10px auto;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    h1 {
        text-align: center;
        font-size: 2em;
        color: #ff3131;
    }

    .activation-subtitle {
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 10px;
        color: #ff3131;
    }

    .activation-info-box {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 15px;
        margin-top: 20px;
    }

    .activation-info-row {
        display: flex;
        gap: 5px;
        margin-bottom: 10px;
        font-size: 1em;
    }

    .activation-important-box {
        background-color: #ffe5e5;
        border-left: 5px solid #ff3131;
        padding: 15px;
        margin-top: 20px;
        border-radius: 6px;
        color: #c00;
    }

    .activation-important-box ul {
        padding-left: 20px;
        font-size: 0.95em;
    }

    .activation-fee-box,
    .payment-box {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
    }

    .activation-fee-box ul {
        padding-left: 20px;
        font-size: 0.95em;
    }

    .activation-payment-img {
        text-align: center;
    }

    .activation-payment-img img {
        max-width: 200px;
        height: auto;
    }

    .activation-payment-note {
        margin-top: 8px;
        text-align: center;
        font-size: 0.9em;
    }

    .activation-button-container {
        text-align: center;
        margin-top: 30px;
    }

    .activation-whatsapp-btn {
        background-color: #25d366;
        color: #fff;
        font-weight: bold;
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
    }

    .activation-whatsapp-btn:hover {
        background-color: #1ebe5d;
    }

    .activation-admin-info,
    .activation-notice {
        margin-top: 20px;
        font-size: 0.95em;
    }

    .activation-highlight {
        color: red;
        font-weight: bold;
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
                        <img src="{{ asset('images/icons/user-check.png') }}" alt="" />
                    </div>
                    <strong>Activate your profile</strong><br />
                </div>
                <div>
                    <div class="activation-container">
                        <h1>Thank You !</h1>
                        <div class="activation-subtitle">
                            Your profile registration process is complete.
                        </div>

                        <div class="activation-info-box">
                            <div class="activation-info-row">
                                <div><strong>Email :</strong></div>
                                <div id="userEmail">{{ $user->name }}</div>
                            </div>
                            <div class="activation-info-row">
                                <div><strong>Name :</strong></div>
                                <div id="fullName">{{ $user->email }}</div>
                            </div>
                        </div>

                        <div class="activation-subtitle" style="margin-top: 30px">
                            Follow these steps to activate your profile
                        </div>

                        <div class="activation-important-box">
                            <p><strong>Important Notes:</strong></p>
                            <ul>
                                <li>
                                    Your profile will not be approved
                                    without an Aadhaar Card Photo Copy and
                                    payment receipt.
                                </li>
                            </ul>
                        </div>

                        <div class="activation-fee-box">
                            <p class="red">
                                <strong>Share your details with the admin:</strong>
                            </p>
                            <ul>
                                <li>Aadhaar Card Photo Copy</li>
                                <li>
                                    Payment Screenshot (Or Transaction ID)
                                </li>
                            </ul>
                        </div>

                        <div class="activation-fee-box" style="
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: space-between;
                                    gap: 20px;
                                ">
                            <div style="flex: 1 1 300px">
                                <strong class="red">Fee Structure:</strong>
                                <ul>
                                    <li>
                                        Free registration for orphan
                                        daughter.
                                    </li>
                                    <li>
                                        Free registration for family's poor
                                        condition (Girls only).
                                    </li>
                                    <li>
                                        Rs. 1000/- fees for average
                                        financial condition.
                                    </li>
                                    <li>
                                        Rs. 2500/- for families with
                                        government/reputed jobs/business.
                                    </li>
                                    <li>All fees are non-refundable.</li>
                                </ul>
                            </div>
                            <div class="activation-payment-img">
                                <img src="{{ asset('images/payment_qr.png') }}" alt="Payment QR" />
                                <div class="activation-payment-note">
                                    <strong>UPI ID for Payment</strong><br />
                                    mage2developer@axisbank
                                </div>
                            </div>
                        </div>

                        <div class="activation-admin-info">
                            <strong>Admin WhatsApp Number:</strong>
                            +91-8200426399
                        </div>
                        <div class="activation-notice">
                            It may take
                            <span class="activation-highlight">3-5 working days</span>
                            to activate your profile. Admin will notify you
                            via WhatsApp.
                        </div>
                    </div>
                </div>
            </div>
            <div class="feature-item">
                <div class="main-title">
                    <div class="feature-icon">
                        <img src="{{ asset('images/icons/complete.png') }}" alt="" style="width: 40px; height: 40px" />
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
                        <img src="{{ asset('images/icons/search.png') }}" alt="" />
                    </div>
                    <strong>Explore All Profiles</strong><br />
                </div>
                <ul>
                    Discover all profile view available to you
                </ul>
            </div>
        </div>

        <div class="content" style="text-align: center; margin-top: 20px">
            <p>
                Please send your User ID & Full Name via Admin WhatsApp
                Number to activate your profile.
            </p>
            <p style="text-align: center">
                <a href="https://wa.me/918200426399?text={{ urlencode('Hello Admin, I want to activate my profile.\n\nEmail: {$user->email}\nName: {$user->name}') }}"
                    target="_blank" style="
                            background: #ff1313;
                            color: white;
                            padding: 15px 30px;
                            text-decoration: none;
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 16px;
                            display: inline-block;
                            transition: background-color 0.3s ease;
                        ">
                    Click to share details with admin on WhatsApp
                </a>
            </p>
        </div>

        <div class="content">
            <p>
                If you have any questions or need assistance, don't hesitate
                to reach out to our support team. We're here to help!
            </p>
        </div>

        <div class="footer">
            <div class="social-links">
                <a target="_blank" href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/">
                    <div class="feature-icon">
                        <img src="{{ asset('images/icons/facebook.png') }}" alt="" />
                    </div>
                </a>
                <a target="_blank" href="https://www.instagram.com/vanand.vivah/">
                    <div class="feature-icon">
                        <img src="{{ asset('images/icons/instagram.png') }}" alt="" />
                    </div>
                </a>
            </div>

            <p>
                Thanks for joining {{ $appName }}!<br />
                This email was sent to {{ $user->email }}
            </p>

            <p>
                <a href="{{ $appUrl }}" style="color: #4f46e5">www.vanandvivah.com</a>
                |
                <a href="{{ $appUrl }}contact-us" style="color: #4f46e5">Contact Support</a>
            </p>

            <p style="margin-top: 20px; font-size: 12px">
                © {{ date('Y') }} {{ $appName }}. All rights reserved.<br />
            </p>
        </div>
    </div>
</body>

</html>