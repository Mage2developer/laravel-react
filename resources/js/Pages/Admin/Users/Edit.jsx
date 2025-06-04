import React, { useState, useEffect } from 'react';
import {Head, Link} from "@inertiajs/react";
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

    const handlePermanentDelete = async () => {

    };

    const handleInternalDelete = async () => {

    };

    const handleActivateProfile = async () => {

    };

    const handleInctivateProfile = async () => {

    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit User" />

            <div className="py-12 pt-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden">
                        <div className="p-6 bg-white border-gray-200">

                            <div className="my-4 flex gap-2 justify-end">
                                <Link href={route("users.index")} className="primary-button mr-auto">
                                    <IoMdArrowRoundBack className="mr-1"/> Back
                                </Link>
                                <button type="button" className="primary-button" onClick={handlePermanentDelete}>
                                    Permanent Delete
                                </button>
                                <button type="button" className="primary-button" onClick={handleInternalDelete}>
                                    Internal Delete
                                </button>
                                {profile.status ? (
                                    <button
                                        type="button"
                                        className="primary-button"
                                        onClick={handleInctivateProfile}
                                    >
                                        Inactivate
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="primary-button"
                                        onClick={handleActivateProfile}
                                    >
                                        Activate
                                    </button>
                                )}
                            </div>

                            <h1 className="text-2xl mt-8 font-semibold mb-6">
                                    {profile.name}
                                    <span className="text-lg ml-2 text-green-600">
                                        ( {profile.status ? "Active" : "Inactive"} )
                                    </span>
                                </h1>

                                <Accordion items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
