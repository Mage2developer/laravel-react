import React from "react";

export const Footer = () => {
    return (
        <footer className="w-full px-10 py-16 border-t border-solid bg-white bg-opacity-90 border-t-zinc-800">
            <div className="flex flex-col gap-10 items-center mx-auto my-0 max-w-[1200px]">
                <nav className="flex flex-wrap gap-10 justify-center">
                    <a
                        href="#home"
                        className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
                    >
                        Home
                    </a>
                    <a
                        href="#about-us"
                        className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
                    >
                        About Us
                    </a>
                    <a
                        href="#privacy"
                        className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#success-stories"
                        className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
                    >
                        Success Stories
                    </a>
                    <a
                        href="#contact-us"
                        className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
                    >
                        Contact Us
                    </a>
                </nav>
                <div className="mt-5 text-center">
                    <img
                        alt="Logo"
                        src="https://images.pexels.com/photos/31763558/pexels-photo-31763558.jpeg"
                        className="object-cover overflow-hidden mx-auto my-0 w-10 aspect-square"
                    />
                    <p className="mt-5 text-sm text-neutral-400">
                        © 2024 builder.io. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
