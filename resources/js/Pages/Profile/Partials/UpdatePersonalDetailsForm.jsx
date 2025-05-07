import React, {useState} from 'react';
import {useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import YesNoSelect from "@/Components/YesNoSelect";
import GenderSelect from "@/Components/GenderSelect";
import MaritalStatusSelect from "@/Components/MaritalStatusSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";

export default function UpdatePersonalDetailsForm({ user, className = '' }) {
    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            dob: user.dob,
            marital_status: user.marital_status,
            gender: user.sex,
            height: user.height,
            weight: user.weight,
            manglik: user.manglik,
            have_specs: user.have_specs,
            hobby: user.hobby
        });
    const [startDate, setStartDate] = useState(null);

    const updatePersonalDetails = (e) => {
        e.preventDefault();

        console.log("update personal details");
    };

    return (
        <section className={className}>
            <form onSubmit={updatePersonalDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="dob" value="Date of Birth"/>

                    <DatePicker
                        id="dob"
                        name="dob"
                        value={data.dob}
                        required
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/YYYY"
                        isClearable showYearDropdown scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        placeholderText="Click to select a date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.dob} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="marital_status" value="Marital Status"/>

                    <MaritalStatusSelect
                        id="gender"
                        name="gender"
                        value={data.gender}
                        required
                        onChange={(e) => setData('gender', e.target.value)}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.marital_status} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="gender" value="Gender"/>

                    <GenderSelect
                        id="gender"
                        name="gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.gender} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="height" value="Height"/>

                    <TextInput
                        id="height"
                        value={data.height}
                        onChange={(e) => setData('height', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.height} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="weight" value="Weight"/>

                    <TextInput
                        id="weight"
                        value={data.weight}
                        onChange={(e) => setData('weight', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.weight} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="manglik" value="Are you manglik?"/>

                    <YesNoSelect
                        id="manglik"
                        name="manglik"
                        value={data.manglik}
                        onChange={(e) => setData('manglik', e.target.value)}
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.manglik} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="have_specs" value="Do you have specs?"/>

                    <YesNoSelect
                        id="have_specs"
                        name="have_specs"
                        value={data.have_specs}
                        onChange={(e) => setData('have_specs', e.target.value)}
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
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />

                    <InputError message={errors.hobby} className="mt-2"/>
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
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
