import { Link } from "@inertiajs/react";
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Footer = () => {
    const arrFooterLinks = [
        { title: "Home", url: "/" },
        { title: "Profiles", url: "/profiles/" },
        { title: "About Us", url: "/about-us/" },
        { title: "Contact Us", url: "/contact-us/" },
        { title: "Terms and Conditions", url: "/terms-conditions/" },
        { title: "How to Create Profile", url: "/how-to-create-profile/" },
    ];

    return (
        <footer className="w-full bg-white bg-opacity-90 border-t border-zinc-800 px-4 sm:px-6 lg:px-10 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
                    {arrFooterLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className="text-base sm:text-lg font-medium text-black transition-colors duration-300 hover:text-[#ff3131]"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                {/* Logo + Copyright */}
                <div className="text-center">
                    <LazyLoadImage
                        alt="Vanand Vivah Logo"
                        src="/images/header-logo.webp"
                        effect="blur"
                        className="mx-auto h-20 w-auto object-contain"
                        height={"80px"}
                        width={"267px"}
                    />
                    <p className="mt-4 text-sm text-black">
                        © {(new Date().getFullYear())} vanandvivah.com. All rights reserved.
                    </p>
                    <p className="mt-4 text-sm text-black">
                        Powered By
                        <a href="https://www.mage2developer.com/" target="_blank"
                              className="text-sm font-medium text-black transition-colors duration-300 hover:text-[#ff3131]">
                            &nbsp; mage2developer.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
