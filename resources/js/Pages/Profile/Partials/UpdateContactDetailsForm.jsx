import React from "react";
import {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateContactDetailsForm({ userId, className = '' }) {

    const {data, setData, errors, processing} =
        useForm({
            user_id: '',
            mobile_number: '',
            father_mobile_number: '',
            native_city: '',
            current_address: ''
        });

    useEffect(() => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_contact_detail);
                setData('user_id', userId);

            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    }, [userId]);

    const [successMessage, setSuccessMessage] = useState('');
    const [apiErrors, setApiErrors] = useState('');
    const [alert, setAlert] = useState(true);

    const updateContactDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userContactDetail", data);

            setSuccessMessage(response.data.message);
            setApiErrors('');

            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 5000);

        } catch (error) {
            if (error.response?.status === 422) {
                setApiErrors(error.response.data.errors);
            } else {
                setApiErrors("An error occurred.");
            }
        }
    };

    return (
        <section className={className}>
            <form onSubmit={updateContactDetails} className="mt-6 space-y-6" method="post">
                <div>
                    <InputLabel htmlFor="mobile_number" value="Mobile Number"/>

                    <TextInput
                        id="mobile_number"
                        value={data.mobile_number}
                        required
                        onChange={(e) => setData('mobile_number', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.mobile_number} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="father_mobile_number" value="Father's Mobile Number"/>

                    <TextInput
                        id="father_mobile_number"
                        value={data.father_mobile_number}
                        required
                        onChange={(e) => setData('father_mobile_number', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.father_mobile_number} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="native_city" value="Native City"/>

                    <TextInput
                        id="native_city"
                        value={data.native_city}
                        required
                        onChange={(e) => setData('native_city', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.native_city} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="current_address" value="Current Address"/>

                    <textarea id="current_address"
                              name="current_address"
                              value={data.current_address}
                              onChange={(e) => setData('current_address', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                              focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.current_address} className="mt-2"/>
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <div className={`${alert ? 'visible' : 'hidden'}`}>
                        {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
                        {apiErrors && <p className="text-sm text-red-600">{apiErrors}</p>}
                    </div>
                </div>
            </form>
        </section>
    );
}
