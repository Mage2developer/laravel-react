import React, {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateEducationDetailsForm({ userId, className = '' }) {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const {data, setData, errors, processing} =
        useForm({
            education: '',
            occupation: '',
            personal_income: '',
            family_income: ''
        });

    const fetchData = async (userId) => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_education_detail);
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

    const updateEducationDetails = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userEducationDetail", data);

            if (!response.data.error) {
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
            <form onSubmit={updateEducationDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="education" value="Education" required />

                    <TextInput
                        id="education"
                        value={data.education}
                        required
                        onChange={(e) => setData('education', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.education} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="occupation" value="Occupation" required />

                    <TextInput
                        id="occupation"
                        value={data.occupation}
                        required
                        onChange={(e) => setData('occupation', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.occupation} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="personal_income" value="Personal Income (Monthly)" required />

                    <TextInput
                        id="personal_income"
                        value={data.personal_income}
                        required
                        onChange={(e) => setData('personal_income', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.personal_income} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="family_income" value="Family Income"/>

                    <TextInput
                        id="family_income"
                        value={data.family_income}
                        onChange={(e) => setData('family_income', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.family_income} className="mt-2"/>
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
