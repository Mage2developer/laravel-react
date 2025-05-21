import React, {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateFamilyDetailsForm({ userId, className = '' }) {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const {data, setData, errors, processing} =
        useForm({
            father_name: '',
            mother_name: '',
            brother_name: '',
            brother_in_laws: '',
            sister_name: '',
            sister_in_laws: ''
        });

    const fetchData = async (userId) => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_family_detail);
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

    const updateFamilyDetails = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userFamilyDetail", data);

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
            <form onSubmit={updateFamilyDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="father_name" value="Father's Name" required/>

                    <TextInput
                        id="father_name"
                        value={data.father_name}
                        required
                        onChange={(e) => setData('father_name', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.father_name} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="mother_name" value="Mother's Name" required/>

                    <TextInput
                        id="mother_name"
                        value={data.mother_name}
                        required
                        onChange={(e) => setData('mother_name', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.mother_name} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="brother_name" value="Brother's Name"/>

                    <TextInput
                        id="brother_name"
                        value={data.brother_name}
                        onChange={(e) => setData('brother_name', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.brother_name} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="brother_in_laws" value="Brother In-law's Name"/>

                    <TextInput
                        id="brother_in_laws"
                        value={data.brother_in_laws}
                        onChange={(e) => setData('brother_in_laws', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.brother_in_laws} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="sister_name" value="Sister's Name"/>

                    <TextInput
                        id="sister_name"
                        value={data.sister_name}
                        onChange={(e) => setData('sister_name', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.sister_name} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="sister_in_laws" value="Sister In-law's Name"/>

                    <TextInput
                        id="sister_in_laws"
                        value={data.sister_in_laws}
                        onChange={(e) => setData('sister_in_laws', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.sister_in_laws} className="mt-2"/>
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
