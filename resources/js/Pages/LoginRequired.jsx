"use client";
import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/Button"; // Assuming you have a reusable Button component

function LoginRequired() {
    return (
        <GuestLayout>
            <Head title="Login Required | Vanand Vivah" />
            <div className="min-h-[450px] flex items-center justify-center my-12 mt-5">
                <div className="max-w-lg w-full mx-auto backdrop-blur-md rounded-xl p-8 shadow-md border border-black/10 ">
                    <section className="rounded-2xl p-10 max-w-2xl w-full text-center">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-[#ff3131] mb-6 text-center">
                            Login Required
                        </h1>
                        <p className="text-lg text-gray-700 mb-3">
                            You are not able to access profiles until your
                            account is activated.
                        </p>
                        <p className="text-md text-gray-600 mb-6">
                            Please send your Aadhaar card to the admin via
                            WhatsApp for verification.
                        </p>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/0918200426399?text=Hi%2C%20please%20activate%20my%20account."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-center"
                        >
                            <Button variant="red" className="text-lg px-6 py-2">
                                Contact Admin on WhatsApp
                            </Button>
                        </a>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}

export default LoginRequired;
