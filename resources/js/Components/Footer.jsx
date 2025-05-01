import React from "react";

export const Footer = () => {
    let arrFooterLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Members",
            url: "/members",
        },
        {
            title: "About Us",
            url: "/about-us",
        },
        {
            title: "Privacy Policy",
            url: "/privacy-policy",
        },
        {
            title: "Contact Us",
            url: "/contact-us",
        },
        {
            title: "Terms and Conditions",
            url: "/terms-conditions",
        }
    ];
    const footerLinksContent = arrFooterLinks.map((link, index) => (
        <a
            href={`${link.url}`}
            key={index}
            className="text-base font-medium text-neutral-500 no-underline transition-colors duration-300 ease hover:text-violet-400"
        >
            {link.title}
        </a>
    ));
    return (
        <footer className="w-full px-10 py-16 border-t border-solid bg-white bg-opacity-90 border-t-zinc-800">
            <div className="flex flex-col gap-10 items-center mx-auto my-0 max-w-[1200px]">
                <nav className="flex flex-wrap gap-10 justify-center">
                    {footerLinksContent}
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
