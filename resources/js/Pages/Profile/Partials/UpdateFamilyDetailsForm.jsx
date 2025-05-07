import React from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";

export default function UpdateFamilyDetailsForm({ user, className = '' }) {
    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            father_name: user.father_name,
            mother_name: user.mother_name,
            brother_name: user.brother_name,
            brother_in_laws: user.brother_in_laws,
            sister_name: user.sister_name,
            sister_in_laws: user.sister_in_laws
        });

    const updateFamilyDetails = (e) => {
        e.preventDefault();

        console.log("update family details");
    };

    return (
        <section className={className}>
            <form onSubmit={updateFamilyDetails} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="father_name" value="Father's Name"/>

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
                    <InputLabel htmlFor="mother_name" value="Mother's Name"/>

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
