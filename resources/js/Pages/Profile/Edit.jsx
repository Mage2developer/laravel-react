import React, {useState, useEffect} from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdatePersonalDetailsForm from "./Partials/UpdatePersonalDetailsForm";
import UpdateEducationDetailsForm from "./Partials/UpdateEducationDetailsForm";
import UpdateFamilyDetailsForm from "./Partials/UpdateFamilyDetailsForm";
import UpdateContactDetailsForm from "./Partials/UpdateContactDetailsForm";

const AccordionItem = ({title, content, isOpen, toggleOpen}) => {
    return (
        <div>
            <button onClick={toggleOpen}>
                <h2 className="text-lg font-medium text-gray-900 flex items-center justify-between">
                    {title} {isOpen ? <FaMinus/> : <FaPlus/>}
                </h2>
            </button>
            {isOpen && <div>{content}</div>}
        </div>
    );
};

export default function Edit({mustVerifyEmail, status}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = id => () => setIsOpen(
        isOpen => isOpen === id ? null : id,
    );

    return (
        <AuthenticatedLayout>
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Profile Information"
                            content={
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            }
                            isOpen={isOpen === 0}
                            toggleOpen={toggleOpen(0)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Personal Information"
                            content={
                                <UpdatePersonalDetailsForm className="max-w-xl" />
                            }
                            isOpen={isOpen === 1}
                            toggleOpen={toggleOpen(1)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Education Details"
                            content={
                                <UpdateEducationDetailsForm className="max-w-xl" />
                            }
                            isOpen={isOpen === 2}
                            toggleOpen={toggleOpen(2)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Family Details"
                            content={
                                <UpdateFamilyDetailsForm className="max-w-xl" />
                            }
                            isOpen={isOpen === 3}
                            toggleOpen={toggleOpen(3)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Contact Details"
                            content={
                                <UpdateContactDetailsForm className="max-w-xl" />
                            }
                            isOpen={isOpen === 4}
                            toggleOpen={toggleOpen(4)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Update Password"
                            content={
                                <UpdatePasswordForm className="max-w-xl"/>
                            }
                            isOpen={isOpen === 5}
                            toggleOpen={toggleOpen(5)}
                        />
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <AccordionItem
                            title="Deactivate Account"
                            content={
                                <DeleteUserForm className="max-w-xl"/>
                            }
                            isOpen={isOpen === 6}
                            toggleOpen={toggleOpen(6)}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
