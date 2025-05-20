import React, { useState, useEffect } from 'react';
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ profile }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 border shadow-lg rounded-xl">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold mb-6">Edit: {profile.name}</h1>

                            {successMessage && (
                                <div className="mb-4 p-3 rounded bg-green-100 text-green-800 border border-green-300">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="mb-4 p-3 rounded bg-red-100 text-red-800 border border-red-300">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
