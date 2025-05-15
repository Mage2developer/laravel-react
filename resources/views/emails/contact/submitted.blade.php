<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
<p>You have received a new message from your website contact form:</p>

<p><strong>Name:</strong> {{ $name }}</p>
<p><strong>Email:</strong> {{ $email }}</p>
<p><strong>Subject:</strong> {{ $subject }}</p>
<p><strong>Message:</strong></p>
<p>{{ $message }}</p>
</body>
</html>
