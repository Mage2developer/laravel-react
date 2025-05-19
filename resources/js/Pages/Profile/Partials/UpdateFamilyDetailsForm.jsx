import React, {useEffect, useState} from "react";
import {useForm} from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateFamilyDetailsForm({ userId, className = '' }) {

    const {data, setData, errors, processing} =
        useForm({
            father_name: '',
            mother_name: '',
            brother_name: '',
            brother_in_laws: '',
            sister_name: '',
            sister_in_laws: ''
        });

    useEffect(() => {
        axios.get(`/currentProfile/${userId}`)
            .then(response => {

                setData(response.data.profile.user_family_detail);
                setData('user_id', userId);

            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    }, [userId]);

    const [successMessage, setSuccessMessage] = useState('');
    const [apiErrors, setApiErrors] = useState('');
    const [alert, setAlert] = useState(true);

    const updateFamilyDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userFamilyDetail", data);

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
                        {apiErrors && <p className="text-sm text-red-600">{apiErrors}</p>}
                    </div>
                </div>
            </form>
        </section>
    );
}
