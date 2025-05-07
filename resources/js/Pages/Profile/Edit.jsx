import React, {useState} from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import UpdatePersonalDetailsForm from "./Partials/UpdatePersonalDetailsForm";
import UpdateEducationDetailsForm from "./Partials/UpdateEducationDetailsForm";
import UpdateFamilyDetailsForm from "./Partials/UpdateFamilyDetailsForm";
import UpdateContactDetailsForm from "./Partials/UpdateContactDetailsForm";

const AccordionItem = ({title, content, isOpen, toggleOpen}) => {
    return (
        <div>
            <button onClick={toggleOpen} className="w-full">
                <h2 className="text-lg font-medium text-gray-900 flex items-center justify-between">
                    {title} {isOpen ? <FaMinus/> : <FaPlus/>}
                </h2>
            </button>
            {isOpen && <div>{content}</div>}
        </div>
    );
};

export default function Edit({mustVerifyEmail, status}) {
    const user = usePage().props.auth.user;
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = id => () => setIsOpen(
        isOpen => isOpen === id ? null : id,
    );

    return (
        <AuthenticatedLayout>
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {/* Personal Information */}
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Personal Information"
                            content={
                                <UpdatePersonalDetailsForm className="max-w-xl" user={user} />
                            }
                            isOpen={isOpen === 1}
                            toggleOpen={toggleOpen(1)}
                        />
                    </div>
                    {/* Education Details */}
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Education Details"
                            content={
                                <UpdateEducationDetailsForm className="max-w-xl" user={user} />
                            }
                            isOpen={isOpen === 2}
                            toggleOpen={toggleOpen(2)}
                        />
                    </div>
                    {/* Family Details */}
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Family Details"
                            content={
                                <UpdateFamilyDetailsForm className="max-w-xl" user={user} />
                            }
                            isOpen={isOpen === 3}
                            toggleOpen={toggleOpen(3)}
                        />
                    </div>
                    {/* Contact Details */}
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Contact Details"
                            content={
                                <UpdateContactDetailsForm className="max-w-xl" user={user} />
                            }
                            isOpen={isOpen === 4}
                            toggleOpen={toggleOpen(4)}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
