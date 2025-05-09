import {useEffect, useState, useRef} from "react";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import axios from "axios";

export default function UpdateContactDetailsForm({ userId, className = '' }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {
                setUser(response.data.profile.user_contact_detail);
            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    }, [userId]);

    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            user_id: userId,
            mobile_number: ( user ? user.mobile_number : ''),
            father_mobile_number: ( user ? user.father_mobile_number : ''),
            native_city: ( user ? user.native_city : ''),
            current_address: ( user ? user.current_address : '')
        });

    const [message, setMessage] = useState("");
    const [apiErrors, setApiErrors] = useState({});

    const updateContactDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum
            console.log(data);
            const response = await axios.patch("/userContactDetail", data);

            console.log(response);

            setMessage(response.data.message);
            setApiErrors({});
        } catch (error) {
            if (error.response?.status === 422) {
                setApiErrors(error.response.data.errors);
            } else {
                setMessage("An error occurred.");
            }
        }
        console.log("update contact details");
    };

    return (
        <section className={className}>
            <form onSubmit={updateContactDetails} className="mt-6 space-y-6" method="post">
                <div>
                    <InputLabel htmlFor="mobile_number" value="Mobile Number"/>

                    <TextInput
                        id="mobile_number"
                        value={user.mobile_number}
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
                        value={user.father_mobile_number}
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
                        value={user.native_city}
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
                              value={user.current_address}
                              onChange={(e) => setData('current_address', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.current_address} className="mt-2"/>
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        {message && <p className="text-sm text-green-600">{message}</p>}
                        {apiErrors && <p className="text-sm text-red-600">{apiErrors}</p>}
                    </Transition>
                </div>
            </form>
        </section>
    );
}
