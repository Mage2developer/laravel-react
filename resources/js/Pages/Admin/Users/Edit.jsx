import React, { useState, useEffect } from 'react';
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IoMdArrowRoundBack } from "react-icons/io";
import { router } from '@inertiajs/react';

import Accordion from "@/Components/Accordion";
import UpdatePersonalDetailsForm from "@/Pages/Profile/Partials/UpdatePersonalDetailsForm";
import UpdateEducationDetailsForm from "@/Pages/Profile/Partials/UpdateEducationDetailsForm";
import UpdateFamilyDetailsForm from "@/Pages/Profile/Partials//UpdateFamilyDetailsForm";
import UpdateContactDetailsForm from "@/Pages/Profile/Partials/UpdateContactDetailsForm";
import UploadProfileImagesForm from "./Partials/UploadProfileImagesForm";

import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.jsx";
import axios from "axios";


export default function Edit({ profile }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [profileStatus, setProfileStatus] = useState(profile.status);
    const [isDeleted, setIsDeleted] = useState(profile.is_deleted);

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
    }, [successMessage]);

    const handlePermanentDelete = async () => {
        if (window.confirm(`Are you sure you want to delete this user permanently?`)) {
            try {
                await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum
                const response = await axios.post("/admin/users/mass-delete", {
                    ids: [profile.id]
                });

                if (response.data.success) {
                    router.visit('/admin/users', {
                        data: {},
                        preserveState: false,
                        preserveScroll: false,
                        props: {
                            success: response.data.message
                        }
                    });
                }
                else {
                    setErrorMessage(response.data.message);
                }
            } catch (error) {
                if (error.response?.status === 422) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An error occurred.");
                }
            }
        }
    };

    const handleInternalDelete = async () => {
        if (window.confirm(`Are you sure you want to delete this user internally?`)) {
            try {
                await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum
                const response = await axios.post("/admin/users/mass-internal-delete", {
                    ids: [profile.id]
                });

                if (response.data.success) {
                    setSuccessMessage(response.data.message);
                }
                else {
                    setErrorMessage(response.data.message);
                }
                setProfileStatus(response.data.profile_status.status);
                setIsDeleted(response.data.profile_status.is_deleted);
            } catch (error) {
                if (error.response?.status === 422) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An error occurred.");
                }
            }
        }
    };

    const handleActivateProfile = async () => {

    };

    const handleInctivateProfile = async () => {

    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit User" />

            <div className="py-4 px-2 sm:py-12 sm:px-0 pt-0">
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
                                {profileStatus ? (
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

                            <div className="flex items-center mb-6">
                                <h1 className="text-2xl mt-8 font-semibold">
                                    {profile.name}
                                    <span className="text-lg ml-2 text-green-600">
                                        ( { profileStatus ? "Active" : "Inactive" } )
                                        { isDeleted ? " ( Deleted )" : "" }
                                    </span>
                                </h1>
                                <div className="mt-8 ml-auto">
                                    {successMessage && (
                                        <div className="text-green-600 px-2 py-1">
                                            {successMessage}
                                        </div>
                                    )}
                                    {errorMessage && (
                                        <div className="text-red-700 px-2 py-1">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Accordion items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
