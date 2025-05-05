"use client";
import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";


function ProfileActivation() {    return (
    <GuestLayout>
        <Head title="Notice: You need to activate your profile." />
        <div className="w-full min-h-screen text-black bg-white">
            <main className="min-h-screen text-black">
                <section className="px-10 py-0 mx-auto my-0 max-w-[1200px]">
                    <h1 className="mb-8 text-5xl font-medium tracking-tighter text-center">
                        You need to activate your profile.
                    </h1>
                </section>
            </main>
        </div>
    </GuestLayout>
);
}
export default ProfileActivation;

