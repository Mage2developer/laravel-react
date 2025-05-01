"use client"
import * as React from "react"
import {useState} from "react"
import {Button} from "./Button"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let arrHeaderLinks = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About Us",
            url: "/about-us"
        },
        {
            title: "Members",
            url: "/members"
        },
        {
            title: "Success Stories",
            url: "#success-stories"
        },
        {
            title: "Contact Us",
            url: "/contact-us"
        }
    ]
    const headerLinksContent = arrHeaderLinks.map((link, index) => (
        <a
            href={`${link.url}`} key={index}
            className="text-sm font-medium text-neutral-500 hover:text-violet-400 transition-colors"
        >
            {link.title}
        </a>
    ))
    return (
        <header
            className="fixed top-0 px-5 py-3 w-full bg-white border-b border-solid border-b-zinc-800 z-[100] max-md:px-5 max-md:py-3">
            <div className="flex relative justify-between items-center mx-auto my-0 max-w-[1200px]">
                <a href="/" className="flex gap-2.5 items-center">
                    <img
                        alt="Logo"
                        src="https://images.pexels.com/photos/31763558/pexels-photo-31763558.jpeg"
                        className="object-cover overflow-hidden aspect-square w-[25px]"
                    />
                    <span className="text-lg font-medium text-neutral-500">builder.io</span>
                </a>
                <button
                    className="p-1.5 text-2xl cursor-pointer border-none text-white lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <nav
                    className={`flex gap-8 lg:flex ${isMenuOpen
                        ? "absolute top-full left-0 right-0 flex-col bg-black p-5 border-b border-zinc-800 animate-fadeIn"
                        : "hidden lg:flex"
                    }`}
                >
                    {headerLinksContent}
                </nav>
                <div
                    className={`flex gap-2 lg:flex ${isMenuOpen
                        ? "absolute top-[calc(100%+200px)] left-0 right-0 flex-col items-center p-5 bg-black border-b border-zinc-800 animate-fadeIn"
                        : "hidden lg:flex"
                    }`}
                >
                    <Button variant="outline" className="w-full lg:w-auto text-neutral-500">
                        Contact Sales
                    </Button>
                    <Button variant="solid" className="w-full lg:w-auto">
                        Sign up
                    </Button>
                </div>
            </div>
        </header>
    )
}
