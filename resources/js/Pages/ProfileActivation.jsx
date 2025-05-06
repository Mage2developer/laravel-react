import React, {useEffect, useState} from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Head} from "@inertiajs/react";

const ProfileActivation = () => {
    const [userEmail, setUserEmail] = useState("");
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        const storedData = localStorage.getItem("InstructionUserData");
        if (storedData) {
            const parsed = JSON.parse(storedData);
            setUserEmail(parsed.email || "");
            setFullName(parsed.name || "");
        }
    }, []);

    const openWhatsApp = () => {
        const phoneNumber = "+91-8200426399";
        const message = `Hello Admin, I want to activate my profile.\n\n*Email:* ${userEmail}\n*Name:* ${fullName}`;
        const url = `https://wa.me/${phoneNumber.replace(
            "+",
            ""
        )}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    return (
        <GuestLayout>
            <Head title="Profile Activation Required"/>
            <div className="min-h-[450px] w-ful flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-white shadow-md border border-black/10 rounded-xl p-8">
                    <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
                        Activate Your Profile
                    </h1>

                    <p className="text-xl font-semibold text-center mb-6">
                        Follow these steps to activate your profile:
                    </p>

                    <ul className="space-y-4 text-lg text-gray-800">
                        <li>
                            <span className="font-bold">1. User Email:</span>{" "}
                            {userEmail || "Loading..."}
                        </li>
                        <li>
                            <span className="font-bold">2. Full Name:</span>{" "}
                            {fullName || "Loading..."}
                        </li>
                        <li>
                            <span className="font-bold">3. Contact Admin:</span>{" "}
                            Please send your User ID & Full Name via WhatsApp.
                        </li>
                        <li>
                            <span className="font-bold">4. </span>Share your payment screenshot & Aadhaar card with the admin on
                            WhatsApp. <br/>
                            <b>UPI ID for payment </b>: mage2developer@axisbank
                        </li>
                        <li>
                            <span className="font-bold">5. </span>You cannot log
                            in until your profile is activated.
                        </li>
                        <li>
                            <span className="font-bold">6. </span> Admin WhatsApp: +91-8200426399
                        </li>
                        <li>
                            <span className="font-bold">7. </span> Created Profile take <span className="font-bold text-red-700"> 3-5 working days </span> to
                            activate, Once profile has been activated admin will notified on same WhatsApp Number.
                        </li>
                    </ul>

                    <div className="mt-10 text-center">
                        <button
                            onClick={openWhatsApp}
                            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all"
                        >
                            Click to share details with admin on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default ProfileActivation;
