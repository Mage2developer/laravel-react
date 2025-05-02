"use client";
import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";


function Index() {    return (
    <GuestLayout>
        <Head title="Profile View" />
        <div className="w-full min-h-screen text-white bg-white">
            <main className="min-h-screen text-white">
                <section className="px-10 py-0 mx-auto my-0 max-w-[1200px]">
                    <h1 className="mb-8 text-5xl font-medium tracking-tighter text-center">
                        Individual Profile View page
                    </h1>
                </section>
            </main>
        </div>
    </GuestLayout>
);
}
export default Index;

