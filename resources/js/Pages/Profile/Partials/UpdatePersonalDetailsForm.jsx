import React, {useEffect, useState} from 'react';
import {useForm} from '@inertiajs/react';
import axios from "axios";
import { getYesNoOptions, getMaritalStatusOptions, getGenderOptions } from "@/Utils/profileUtils";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectBox from "@/Components/SelectBox";
import PrimaryButton from "@/Components/PrimaryButton";
import DatePicker from 'react-date-picker';
import { format } from 'date-fns';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function UpdatePersonalDetailsForm({userId, className = ''}) {

    const {data, setData, errors, processing} =
        useForm({
            dob: '',
            marital_status: '',
            sex: '',
            height: '',
            weight: '',
            manglik: '',
            have_specs: '',
            hobby: ''
        });

    const fetchData = async (userId) => {
        try {
            const response = await axios.get(`/currentProfile/${userId}`);

            setData(response.data.profile.user_personal_detail);
            setData('user_id', userId);

        } catch (error) {
            console.log('AJAX call error: ', error);
        }
    };

    useEffect(() => {

        fetchData(userId);

    }, [userId]);

    const [successMessage, setSuccessMessage] = useState('');
    const [apiErrors, setApiErrors] = useState('');
    const [alert, setAlert] = useState(true);

    const updatePersonalDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie"); // For Laravel Sanctum

            const response = await axios.patch("/userPersonalDetail", data);

            await fetchData(userId);
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
            <form onSubmit={updatePersonalDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="dob" value="Date of Birth" required />

                    <DatePicker
                        onChange={(date) => setData('dob', date)}
                        value={data.dob}
                        className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                        focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.dob} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="marital_status" value="Marital Status" required />

                    <SelectBox
                        id="marital_status"
                        name="marital_status"
                        value={data.marital_status}
                        required
                        onChange={setData}
                        options={getMaritalStatusOptions()}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.marital_status} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="sex" value="Gender" required />

                    <SelectBox
                        id="sex"
                        name="sex"
                        value={data.sex}
                        required
                        onChange={setData}
                        options={getGenderOptions()}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.sex} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="height" value="Height (For ex. 5ft 11in)" required />

                    <TextInput
                        id="height"
                        value={data.height}
                        required
                        onChange={(e) => setData('height', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder="5ft 11in"
                    />

                    <InputError message={errors.height} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="weight" value="Weight (For ex. 65kg)" required />

                    <TextInput
                        id="weight"
                        value={data.weight}
                        required
                        onChange={(e) => setData('weight', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder="65kg"
                    />

                    <InputError message={errors.weight} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="manglik" value="Are you manglik?"/>

                    <SelectBox
                        id="manglik"
                        name="manglik"
                        value={data.manglik}
                        onChange={setData}
                        options={getYesNoOptions()}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.manglik} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="have_specs" value="Do you have specs?"/>

                    <SelectBox
                        id="have_specs"
                        name="have_specs"
                        value={data.have_specs}
                        onChange={setData}
                        options={getYesNoOptions()}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.have_specs} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="hobby" value="Hobby"/>

                    <textarea id="hobby"
                              name="hobby"
                              value={data.hobby}
                              onChange={(e) => setData('hobby', e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                              focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.hobby} className="mt-2"/>
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
