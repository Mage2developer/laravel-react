import React, { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import ClickableTooltip from "@/Components/ClickableTooltip";

const ProfileActivation = () => {
    const [userEmail, setUserEmail] = useState("");
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const emailFromURL = decodeURIComponent(
            searchParams.get("email") || ""
        );
        const nameFromURL = decodeURIComponent(searchParams.get("name") || "");

        setUserEmail(emailFromURL);
        setFullName(nameFromURL);
    }, []);

    const openWhatsApp = () => {
        if (!userEmail || !fullName) {
            alert("Email and Name are required to contact admin.");
            return;
        }

        const phoneNumber = "918200426399";
        const message = `Hello Admin, I want to activate my profile.\n\n*Email:* ${userEmail}\n*Name:* ${fullName}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        console.log(url);

        window.open(url, "_blank");
    };

    return (
        <GuestLayout>
            <Head title="Profile  Activation Page" />
            <div className="min-h-[450px] w-ful flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-white shadow-md border border-black/10 rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-center text-[#ff3131] mb-6 bg-clip-text">
                        Activate Your Profile
                    </h1>

                    <p className="text-xl font-semibold text-center mb-6">
                        Follow these steps to activate your profile:
                    </p>

                    <ul className="space-y-4 text-lg text-gray-800">
                        <li>
                            <span className="font-bold">1. User Email:</span>{" "}
                            {userEmail || "-"}
                        </li>
                        <li>
                            <span className="font-bold">2. Full Name:</span>{" "}
                            {fullName || "-"}
                        </li>
                        <li>
                            <span className="font-bold">3. Contact Admin:</span>{" "}
                            Please send your User ID & Full Name via Admin WhatsApp Number.
                        </li>
                        <li>
                            <span className="font-bold">4. </span>Share your
                            payment screenshot & Aadhaar card photo with the admin on WhatsApp.
                            <ClickableTooltip
                                text="Profile Fees"
                                tooltipContent={
                                    <ul class="list-disc px-4 sm:px-5">
                                        <li>Free registration for orphan daughter.</li>
                                        <li>Free registration for family's financial condition is very poor (Only For
                                            Girls).
                                        </li>
                                        <li>Rs. 1000/- fees If the family's financial condition is average.</li>
                                        <li>
                                            Rs. 2500/- fees if the family member has a government/reputed job or
                                            business.
                                        </li>
                                        <li>All fees are non-refundable.</li>
                                    </ul>
                                }
                            />
                            <br/>
                            <div className="mt-[10px]">
                                <b>UPI ID for payment</b>: mage2developer@axisbank
                            </div>
                        </li>
                        <li>
                            <span className="font-bold">5. </span>You cannot log in until your profile is activated.
                        </li>
                        <li>
                            <span className="font-bold">6. </span> Admin WhatsApp Number: +91-8200426399
                        </li>
                        <li>
                            <span className="font-bold">7. </span> It may take
                            <span className="font-bold text-red-700 mx-1">
                                3-5 working days
                            </span>
                            to activate your profile. Once profile has been activated admin
                            will notify you on your same WhatsApp Number.
                        </li>
                    </ul>

                    {!userEmail & !fullName ? null : (
                        <div className="mt-10 text-center">
                            <button
                                onClick={openWhatsApp}
                                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all"
                            >
                                Click to share details with admin on WhatsApp
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
};

export default ProfileActivation;
