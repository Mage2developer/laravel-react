import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import Accordion from "@/Components/Accordion";
import UpdatePersonalDetailsForm from "./Partials/UpdatePersonalDetailsForm";
import UpdateEducationDetailsForm from "./Partials/UpdateEducationDetailsForm";
import UpdateFamilyDetailsForm from "./Partials/UpdateFamilyDetailsForm";
import UpdateContactDetailsForm from "./Partials/UpdateContactDetailsForm";
import UploadProfileImagesForm from "./Partials/UploadProfileImagesForm";

export default function Edit() {
    const user = usePage().props.auth.user;

    const items = [
        { id: 1, title: 'Personal Information', content: <UpdatePersonalDetailsForm className="max-w-xl" userId={user.id} /> },
        { id: 2, title: 'Education Details', content: <UpdateEducationDetailsForm className="max-w-xl" userId={user.id} /> },
        { id: 3, title: 'Family Details', content: <UpdateFamilyDetailsForm className="max-w-xl" userId={user.id} /> },
        { id: 4, title: 'Contact Details', content: <UpdateContactDetailsForm className="max-w-xl" userId={user.id} /> },
        { id: 5, title: 'Profile Images', content: <UploadProfileImagesForm className="w-full" userId={user.id} /> }
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <Accordion items={items} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
