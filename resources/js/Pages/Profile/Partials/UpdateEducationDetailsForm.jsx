import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";

export default function UpdateEducationDetailsForm({ className = '' }) {
    const user = usePage().props.auth.user;

    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            education: user.education,
            occupation: user.occupation,
            personal_income: user.personal_income,
            family_income: user.family_income
        });

    const updateEducationDetails = (e) => {
        e.preventDefault();

        console.log("update education details");
    };

    return (
        <section className={className}>
            <form onSubmit={updateEducationDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="education" value="Education"/>

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
                    <InputLabel htmlFor="occupation" value="Occupation"/>

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
                    <InputLabel htmlFor="personal_income" value="Personal Income"/>

                    <TextInput
                        id="personal_income"
                        value={data.personal_income}
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
