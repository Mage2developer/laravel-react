"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "./Button";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export const Header = () => {
    const user = usePage().props.auth.user;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    let arrHeaderLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Profiles",
            url: "/profiles",
        },
        {
            title: "About Us",
            url: "/about-us",
        },
        {
            title: "Contact Us",
            url: "/contact-us",
        },
    ];
    const headerLinksContent = arrHeaderLinks.map((link, index) => (
        <a
            href={`${link.url}`}
            key={index}
            className="text-xl font-medium text-black hover:text-[#ff3131] transition-colors"
        >
            {link.title}
        </a>
    ));
    return (
        <header className="sticky top-0 px-5 py-0 w-full bg-white border-b border-solid border-b-zinc-800 z-[100] max-md:px-5 max-md:py-3">
            <div className="flex relative justify-between items-center mx-auto my-0 max-w-[1200px]">
                <Link href="/">
                    <div className="flex text-2xl font-serif">
                        <ApplicationLogo className="block fill-current text-gray-800" />
                    </div>
                </Link>
                <button
                    className="p-1.5 text-2xl cursor-pointer border-none text-gray-600 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <nav
                    className={`flex gap-8 lg:flex ${
                        isMenuOpen
                            ? "absolute top-full left-0 right-0 flex-col bg-black p-5 border-b border-zinc-800 animate-fadeIn"
                            : "hidden lg:flex"
                    }`}
                >
                    {headerLinksContent}
                </nav>
                <div
                    className={`flex gap-2 lg:flex ${
                        isMenuOpen
                            ? "absolute top-[calc(100%+200px)] left-0 right-0 flex-col lg:items-center p-5 bg-black border-b border-zinc-800 animate-fadeIn"
                            : "hidden lg:flex"
                    }`}
                >
                    {user ? (
                        <div className="lg:mx-auto lg:max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="hover:bg-[#ff3131] hover:text-white text-xl inline-flex items-center rounded-md border border-transparent px-3 py-2 font-medium leading-4  transition duration-150 ease-in-out focus:outline-none "
                                                    >
                                                        {
                                                            user.name.split(
                                                                " "
                                                            )[0]
                                                        }
                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                    className="text-xl hover:bg-[#ff3131] hover:text-white m-3 ms-0"
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                    className="text-xl hover:bg-[#ff3131] hover:text-white m-3 ms-0"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1 sm:hidden">
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <a href="/login">
                                <Button
                                    variant="red"
                                    className="w-full lg:w-auto"
                                >
                                    Login
                                </Button>
                            </a>
                            <a href="/register">
                                <Button
                                    variant="red"
                                    className="w-full lg:w-auto"
                                >
                                    Register
                                </Button>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
