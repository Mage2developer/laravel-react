<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Find your perfect Valand life partner on Vanand Vivah. Dedicated matrimonial service for the Valand community & thousands of verified profiles in Gujarat, India & Worldwide. Register Now!">
    <meta name="keywords" content="Valand matrimony, Valand marriage, Valand brides, Valand grooms, Valand Shaadi, Valand Wedding, Gujarat Valand, NRI Valand, matchmaking, Vanand Vivah, Hindu Valand Matrimony, Best Valand Matrimonial Site, Best Valand Matrimony in Gujarat, Best Valand Matrimony in India, Valand Matrimony in World">

    {{-- Open Graph Meta Tags (for social media sharing) --}}
    <meta property="og:title" content="Valand, Vanand, Nai, Nayi, Sen Samaj Matrimony: Find Your Perfect Match">
    <meta property="og:description" content="Find your perfect Valand life partner on Vanand Vivah. Dedicated matrimonial service for the Valand community & thousands of verified profiles in Gujarat, India & Worldwide. Register Now!">
    <meta property="og:image" content="{{ asset('/images/header-logo.webp') }}">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:type" content="website">

    <title inertia>{{ config('app.name', 'Vanand-Vivah') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" as="stylesheet"/>
    <link rel="icon" type="image/png" href="{{ asset('images/vv_header_logo.png') }}">

    <link rel="preload" fetchpriority=high as="image" href="{{ asset('images/home/slider/wedding-banner.webp') }}"
          imagesrcset="{{ asset('images/home/slider/mobile/wedding-banner.webp') }} 480w, {{ asset('images/home/slider/wedding-banner.webp') }} 1900w"
          imagesizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1900px">
    <link rel="preload" fetchpriority=high as="image" href="{{ asset('images/header-logo.webp') }}">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0W86S3WGC6"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0W86S3WGC6');
    </script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
