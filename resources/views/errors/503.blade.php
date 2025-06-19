<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coming Soon - Vanand Vivah</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Font: Inter -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
        rel="stylesheet"
    />
    <link
        rel="shortcut icon"
        href="{{ asset('images/maintance/vv_logo-removebg-preview.png') }}"
        type="image/x-icon"
    />


    <style>
        body {
            font-family: "Inter", sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
        }

        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("./assets/images/Destination-Wedding.webp");
            background-size: cover;
            background-position: center;
            filter: blur(8px);
            -webkit-filter: blur(2px);
            z-index: -1;
            transform: scale(
                1.05
            );
        }

        @keyframes bounce-slow {
            0%,
            100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(
                    -10px
                );
            }
        }
        .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
        }

        .icons {
            width: 30px;
            height: 30px;
            border-radius: 10px;
        }
    </style>
</head>
<body class="selection:bg-red-200 selection:text-red-900">
<div
    class="relative w-full max-w-4xl bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl border border-pink-100 transform transition-all duration-300 hover:scale-[1.01]"
>
    <div class="text-center mb-8">
        <div
            class="flex justify-center text-4xl md:text-5xl font-extrabold text-pink-600 tracking-tight"
        >
            <img src="{{ asset('images/maintance/logo.png') }}" />
        </div>
    </div>

    <div class="text-center mb-10">
        <h2
            class="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-bounce-slow"
        >
            Coming Soon!
        </h2>
        <p
            class="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
            We are meticulously crafting a beautiful platform to help
            you find your perfect life partner. Get ready to embark on a
            delightful journey of connections.
        </p>
    </div>

    <div class="text-center">
        <p class="text-gray-600 text-lg mb-4">Connect with us:</p>
        <div class="flex justify-center space-x-6">
            <a
                href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/"
                class="text-[#ff3131] hover:text-pink-700 text-3xl transition-colors duration-200 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
            >
                <img
                    src="{{ asset('images/maintance/facebook.png') }}"
                    alt=""
                    class="icons"
                />
            </a>
            <a
                href="https://www.instagram.com/vanand.vivah/"
                class="text-[#ff3131] hover:text-pink-700 text-3xl transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
            >
                <img
                    src="{{ asset('images/maintance/instagram.png') }}"
                    alt=""
                    class="icons"
                />
            </a>
        </div>
    </div>
</div>
</body>
</html>
