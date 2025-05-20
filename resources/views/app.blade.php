<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Vanand Vivah') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="preconnect" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" as="stylesheet" />
        <link rel="icon" type="image/png" href="{{ asset('images/vv_header_logo.png') }}">

        <!-- preload image for banner -->
        <link rel="preload" href="/images/wedding-banner.webp" as="image" media="(min-width: 320px)">
        <link rel="preload" href="/images/header-logo.webp" as="image" media="(min-width: 320px)">

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
