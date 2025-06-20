<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Vanand-Vivah') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" as="stylesheet"/>
    <link rel="icon" type="image/png" href="{{ asset('images/vv_header_logo.png') }}">

    <link rel="preload" fetchpriority=high as="image" href="{{ asset('images/home/slider/wedding-banner.webp') }}"
          imagesrcset="{{ asset('images/home/slider/mobile/wedding-banner.webp') }} 480w, {{ asset('images/home/slider/wedding-banner.webp') }} 1900w"
          imagesizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1900px">
    <link rel="preload" fetchpriority=high as="image" href="{{ asset('images/header-logo.webp') }}">

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
