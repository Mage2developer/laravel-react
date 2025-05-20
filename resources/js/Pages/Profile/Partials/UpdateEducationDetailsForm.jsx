import React, {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateEducationDetailsForm({ userId, className = '' }) {

    const {data, setData, errors, processing} =
        useForm({
            education: '',
            occupation: '',
            personal_income: '',
            family_income: ''
        });

    useEffect(() => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_education_detail);
                setData('user_id', userId);

            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    }, [userId]);

    const [successMessage, setSuccessMessage] = useState('');
    const [apiErrors, setApiErrors] = useState('');
    const [alert, setAlert] = useState(true);

    const updateEducationDetails = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setApiErrors('');

        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userEducationDetail", data);

            setSuccessMessage(response.data.message);
            setApiErrors('');

            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 5000);

        } catch (error) {
            if (error.response?.status === 422) {
                setApiErrors(error.response.data.message);
            } else {
                setApiErrors("An error occurred.");
            }
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
                    <InputLabel htmlFor="personal_income" value="Personal Income" required />

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
                        {apiErrors && <p className="text-sm text-red-600">{apiErrors}</p>}
                    </div>
                </div>
            </form>
        </section>
    );
}
