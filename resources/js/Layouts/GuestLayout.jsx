import * as React from "react";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center sm:pt-0">
            <Header />
            <div className="w-full overflow-hidden bg-white shadow-md sm:rounded-lg">
                {children}
            </div>
            <Footer />
        </div>
    );
}
