import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import * as React from "react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <Header />
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:rounded-lg">
                {children}
            </div>
            <Footer />
        </div>
    );
}
