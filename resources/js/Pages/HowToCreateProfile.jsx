"use client";
import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

function HowToCreateProfile() {
    return (
        <GuestLayout>
            <Head title="How To Create Profile" />
            <div className="min-h-[450px] flex items-center justify-center my-12 mt-5">
                <div className="max-w-4xl w-full mx-auto backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-md border border-black/10">
                    <section className="rounded-2xl sm:p-10 w-full text-center">
                        <h1 className="text-4xl font-bold text-center text-[#ff3131] mb-6 sm:text-5xl">
                            How To Create Profile?
                        </h1>
                        <p className="text-lg text-gray-700 mb-10">
                            Follow all the steps below to create your profile.
                        </p>

                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4">
                            <div className="font-bold">👉 Step 1:</div>
                            <p className="text-xl">
                                Click on Register Button, Fillup all Register
                                Details, Verify Account from admin
                            </p>
                            <video
                                src="/images/how-to-create-profile/gif/register-process.mp4"
                                autoPlay
                                loop
                                muted
                                controls
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 2:</div>
                            (Once your profile has been verified by the
                            admin,then after you will be able to login)
                            <p className="text-xl">
                                Click on Login Button, Fillup all Profile
                                Details
                            </p>
                            <video
                                src="/images/how-to-create-profile/gif/login-process.mp4"
                                autoPlay
                                loop
                                muted
                                controls
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 3:</div>
                            <p className="text-xl">
                                Search Profile, Click on Profile to View Details
                            </p>
                            <video
                                src="/images/how-to-create-profile/gif/profile-search-process.mp4"
                                autoPlay
                                loop
                                muted
                                controls
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}

export default HowToCreateProfile;
