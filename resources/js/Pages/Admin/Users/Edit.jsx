import React, { useState, useEffect } from 'react';
import {Head, Link, usePage} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IoMdArrowRoundBack } from "react-icons/io";

import Accordion from "@/Components/Accordion";
import UpdatePersonalDetailsForm from "@/Pages/Profile/Partials/UpdatePersonalDetailsForm";
import UpdateEducationDetailsForm from "@/Pages/Profile/Partials/UpdateEducationDetailsForm";
import UpdateFamilyDetailsForm from "@/Pages/Profile/Partials//UpdateFamilyDetailsForm";
import UpdateContactDetailsForm from "@/Pages/Profile/Partials/UpdateContactDetailsForm";
import UploadProfileImagesForm from "./Partials/UploadProfileImagesForm";

import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.jsx";


export default function Edit({ profile }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const items = [
        { id: 1, title: 'Profile Information', content: <UpdateProfileInformationForm className="max-w-xl" userId={profile.id} /> },
        { id: 2, title: 'Personal Information', content: <UpdatePersonalDetailsForm className="max-w-xl" userId={profile.id} /> },
        { id: 3, title: 'Education Details', content: <UpdateEducationDetailsForm className="max-w-xl" userId={profile.id} /> },
        { id: 4, title: 'Family Details', content: <UpdateFamilyDetailsForm className="max-w-xl" userId={profile.id} /> },
        { id: 5, title: 'Contact Details', content: <UpdateContactDetailsForm className="max-w-xl" userId={profile.id} /> },
        { id: 6, title: 'Profile Images', content: <UploadProfileImagesForm className="w-full" userId={profile.id} /> }
    ];

    // Automatically clear messages after 5 seconds
    useEffect(() => {
        let timer;
        if (successMessage || errorMessage) {
            timer = setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [successMessage, errorMessage]);

    return (
        <AuthenticatedLayout>
            <Head title="Users" />

            <div className="py-12 pt-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden">
                        <div className="p-6 bg-white border-gray-200">
                            <Link
                                href={route("users.index")}
                                className="primary-button"
                            >
                                <IoMdArrowRoundBack className={"mr-1"}/> Back
                            </Link>

                            <form onSubmit={"#"} className="mt-6 space-y-6">

                                <div className="mb-4 flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        className="primary-button"
                                        value={""}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="primary-button"
                                        value={""}
                                    >
                                        Active
                                    </button>
                                </div>
                            </form>

                                <h1 className="text-2xl mt-5 font-semibold mb-6">{profile.name}</h1>

                                <Accordion items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
