import React, {useEffect, useState} from 'react';
import {Link, useForm} from '@inertiajs/react';
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";


export default function UpdateProfileInformationForm({userId, className = ''}) {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const {data, setData, errors, processing} =
        useForm({
            name: '',
            email: ''
        });

    const fetchData = async (userId) => {
        try {
            const response = await axios.get(`/currentProfile/${userId}`);
            setData('name', response.data.profile.name);
            setData('email', response.data.profile.email);
            setData('user_id', userId);
        } catch (error) {
            console.log('AJAX call error: ', error);
        }
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

    const updateProfileInformationForm = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum
            const response = await axios.patch(`/admin/users/profileUpdate/${userId}`, data);

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
            <form onSubmit={updateProfileInformationForm} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name"/>

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name}/>
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email"/>

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email}/>
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
