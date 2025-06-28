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
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        console.log(url);

        window.open(url, "_blank");
    };

    return (
        <GuestLayout>
            <Head title="Profile  Activation Page" />
            <div className="min-h-[450px] w-ful flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-white shadow-md border border-black/10 rounded-xl p-4 sm:p-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-center text-[#ff3131] bg-clip-text">
                            Thank You !
                        </h1>
                        <p className="font-bold text-[#ff3131] text-xl mt-2">
                            Your profile registration process is complete.
                        </p>
                    </div>

                    <ul className="space-y-4 text-lg text-gray-800">
                        <li>
                            <div className="bg-white shadow-md border border-black/10 rounded-xl p-3 flex flex-col gap-2">
                                <div className="block sm:flex text-center gap-2">
                                    <div className="font-bold">Email :</div>{" "}
                                    <div> {userEmail || "-"}</div>
                                </div>
                                <div className="block sm:flex text-center gap-2">
                                    <div className="font-bold">Name :</div>{" "}
                                    <div>{fullName || "-"}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="text-2xl font-semibold text-center my-5 text-[#ff3131]">
                                Follow these steps to activate your profile
                            </div>
                        </li>
                        <li>
                            <div className="mb-6 bg-red-50 border-l-4 border-red-400 text-red-800 p-4 rounded-md">
                                <p className="font-semibold text-lg mb-2">
                                    Important Notes:
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>
                                    Your profile will not be approved without an Aadhaar Card Photo Copy and payment receipt.
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="bg-white shadow-md border border-black/10 rounded-xl p-3 my-6">
                                <div className="font-bold text-[#ff3131]">
                                    Share your details with the admin.
                                </div>
                                <ul className="list-disc px-4 sm:px-5 text-left">
                                    <li>Aadhaar Card Photo Copy</li>
                                    <li>
                                        Payment Screenshot (Or Transaction ID)
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col-reverse sm:flex-row justify-between items-center bg-white shadow-md border border-black/10 rounded-xl p-2 my-2">
                                <div className="mt-5 sm:mt-0">
                                    <div className="font-bold text-[#ff3131]">
                                        Fee Structure :-
                                    </div>
                                    <ul class="list-disc px-4 sm:px-5 text-left">
                                        <li>
                                            Free registration for orphan
                                            daughter.
                                        </li>
                                        <li>
                                            Free registration for family's
                                            financial condition is very poor
                                            (Only For Girls).
                                        </li>
                                        <li>
                                            Rs. 1000/- fees If the family's
                                            financial condition is average.
                                        </li>
                                        <li>
                                            Rs. 2500/- fees if the family member
                                            has a government/reputed job or
                                            business.
                                        </li>
                                        <li>All fees are non-refundable.</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="flex justify-center">
                                        <img
                                            src="images/payment_qr.png"
                                            alt=""
                                            className="w-[90%] h-[90%]"
                                        />
                                    </div>
                                    <div className="mt-[10px] text-center">
                                        <b>UPI ID for Payment</b> <br />
                                        mage2developer@axisbank
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>Admin WhatsApp Number: +91-8200426399</li>
                        <li>
                            It may take
                            <span className="font-bold text-red-700 mx-1">
                                3-5 working days
                            </span>
                            to activate your profile. Once profile has been
                            activated admin will notify you on your same
                            WhatsApp Number.
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
