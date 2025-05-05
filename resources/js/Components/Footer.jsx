import React from "react";

export const Footer = () => {
    const arrFooterLinks = [
        { title: "Home", url: "/" },
        { title: "Members", url: "/members" },
        { title: "About Us", url: "/about-us" },
        { title: "Privacy Policy", url: "/privacy-policy" },
        { title: "Contact Us", url: "/contact-us" },
        { title: "Terms and Conditions", url: "/terms-conditions" },
    ];

    return (
        <footer className="w-full bg-white bg-opacity-90 border-t border-zinc-800 px-4 sm:px-6 lg:px-10 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
                    {arrFooterLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="text-base sm:text-lg font-medium text-black transition-colors duration-300 hover:text-[#ff3131]"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>

                {/* Logo + Copyright */}
                <div className="text-center">
                    <img
                        src="/images/vv_header_logo.png"
                        alt="Logo"
                        className="mx-auto h-20 w-auto object-contain"
                    />
                    <p className="mt-4 text-sm text-neutral-500">
                        © 2025 vanandvivah.com. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
