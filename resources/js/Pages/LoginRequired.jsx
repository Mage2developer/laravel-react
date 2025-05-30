"use client";
import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/Button"; // Assuming you have a reusable Button component

function LoginRequired() {
    return (
        <GuestLayout>
            <Head title="Login Restriction page" />
            <div className="min-h-[450px] flex items-center justify-center my-12 mt-5">
                <div className="max-w-lg w-full mx-auto backdrop-blur-md rounded-xl p-8 shadow-md border border-black/10 ">
                    <section className="rounded-2xl p-10 max-w-2xl w-full text-center">
                        <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                            Login Required
                        </h1>
                        <p className="text-lg text-gray-700 mb-10">
                            You are not able to view profiles as guest, You need
                            to create an account.
                        </p>

                        <Link href="/register">
                            <Button variant="red">Create an account</Button>
                        </Link>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}

export default LoginRequired;
