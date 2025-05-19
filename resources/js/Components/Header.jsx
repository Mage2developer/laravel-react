"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

import { FaChevronDown , FaUser, FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { ImProfile } from "react-icons/im";


export const Header = () => {
    const user = usePage().props.auth.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: "Home", url: "/" },
        { title: "Profiles", url: "/profiles" },
        { title: "About Us", url: "/about-us" },
        { title: "Contact Us", url: "/contact-us" },
    ];
    const menuRef = useRef();

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-800 px-4 py-3 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <ApplicationLogo className="h-8 w-auto text-gray-800" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-2xl text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            className="text-xl font-medium text-black hover:text-[#ff3131] transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Auth Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    {user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex items-center space-x-2 text-xl font-medium cursor-pointer">
                                    <FaUser />
                                    <span>{user.name.split(" ")[0]}</span>
                                    <FaChevronDown size={15}/>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("account.edit")} className="flex align-center text-xl">
                                    <MdAccountBox size={24} className={"mr-2"} />
                                    My Account
                                </Dropdown.Link>
                                {user.role != "admin" ? (
                                    <Dropdown.Link href={route("profile.edit")} className="flex align-center text-xl">
                                        <ImProfile  className={"mr-2"}  />
                                        Profile
                                    </Dropdown.Link>
                                ) : (
                                    <Dropdown.Link href={route("users.index")} className="flex align-center text-xl">
                                        <FaUsers className={"mr-2"}/>
                                        Users
                                    </Dropdown.Link>
                                )}

                                <Dropdown.Link href={route("logout")} method="post" as="button" className="flex align-center text-xl">
                                    <IoLogOut className={"mr-2"} />
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="red">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="red">Register</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-zinc-200 z-40 flex flex-col gap-4 py-4 px-4"
                >
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            className="text-xl font-medium text-black hover:text-[#ff3131] transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-3">
                        {user ? (
                            <>
                                <ResponsiveNavLink href={route("account.edit")}>
                                    My Account
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="red" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button variant="red" className="w-full">
                                        Register
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
