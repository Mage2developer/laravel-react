import React from "react";
import {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateContactDetailsForm({ userId, className = '' }) {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const {data, setData, errors, processing} =
        useForm({
            user_id: '',
            mobile_number: '',
            father_mobile_number: '',
            native_address: '',
            address_line_1: '',
            address_line_2: '',
            city_id: '',
            state_id: '',
            country_id: '',
        });

    const fetchData = async (userId) => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_contact_detail);
                setData('user_id', userId);

            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    };

    useEffect(() => {
        fetchData(userId);
    }, [userId]);

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false);
                setSuccessMessage('');
                setErrorMessage('');
            }, 5000);
        }
    }, [alert, successMessage, errorMessage]);

    const updateContactDetails = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userContactDetail", data);

            if (response.data.success) {
                setSuccessMessage(response.data.message);
                await fetchData(userId);
            } else {
                setErrorMessage(response.data.message);
            }
            setAlert(true);

        } catch (error) {
            if (error.response?.status === 422) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred.");
            }
            setAlert(true);
        }
    };

    return (
        <section className={className}>
            <form onSubmit={updateContactDetails} className="mt-6 space-y-6" method="post">
                <div>
                    <InputLabel htmlFor="mobile_number" value="Mobile Number" required />

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
                        onChange={(e) => setData('father_mobile_number', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.father_mobile_number} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="native_address" value="Native City"/>

                    <TextInput
                        id="native_address"
                        value={data.native_address}
                        onChange={(e) => setData('native_address', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.native_address} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="address_line_1" value="Current Address" required />

                    <textarea id="address_line_1"
                              name="address_line_1"
                              value={data.address_line_1}
                              required
                              onChange={(e) => setData('address_line_1', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                              focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.address_line_1} className="mt-2"/>
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <div className={`${alert ? 'visible' : 'hidden'}`}>
                        {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
                        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
                    </div>
                </div>
            </form>
        </section>
    );
}
