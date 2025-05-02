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
            className="text-lg font-medium text-black no-underline transition-colors duration-300 ease hover:text-[#ff3131]"
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
                        src="images/vv_header_logo.png"
                        className="object-cover overflow-hidden mx-auto my-0 h-[100px]"
                    />
                    <p className="mt-5 text-sm text-neutral-500">
                        © 2025 vanandvivah.com. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
