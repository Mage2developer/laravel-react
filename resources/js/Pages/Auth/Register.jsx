import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/Button";
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import SelectBox from "@/Components/SelectBox";
import { getGenderOptions } from "@/Utils/profileUtils";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        sex: "",
        dob: "",
        education: "",
        occupation: "",
        mobile_number: "",
        father_name: "",
        mother_name: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setcaptchaError] = useState(null);

    const submit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            e.preventDefault();
            setcaptchaError("Invalid Captcha !");
            return;
        }

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="min-h-[450px] flex items-center justify-center my-16">
                <div className="max-w-xl w-full mx-auto backdrop-blur-md rounded-xl shadow-lg p-8 border border-black/10 bg-white/5">
                    <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        Register
                    </h1>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" required/>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData("name", e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="Email" required/>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData("email", e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel htmlFor="mobile_number" value="Mobile Number" required/>
                            <TextInput
                                id="mobile_number"
                                value={data.mobile_number}
                                required
                                onChange={(e) => setData('mobile_number', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.mobile_number} className="mt-2"/>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="w-full">
                                <InputLabel htmlFor="sex" value="Gender" required/>
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
                            <div className="w-full">
                                <InputLabel htmlFor="dob" value="Date of Birth" required/>
                                <DatePicker
                                    onChange={(date) => setData('dob', date)}
                                    value={data.dob}
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                                    focus:ring-indigo-500 text-sm font-medium text-gray-700"
                                />
                                <InputError message={errors.dob} className="mt-2"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <div>
                                <InputLabel htmlFor="education" value="Education" required/>
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
                                <InputLabel htmlFor="occupation" value="Occupation" required/>
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
                        </div>
                        <div className="flex flex-row gap-3 items-center">
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
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="relative">
                                <InputLabel htmlFor="password" value="Password" required/>
                                <TextInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full pr-10"
                                    autoComplete="new-password"
                                    onChange={(e) => setData("password", e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="hover:text-[#ff3131]"/>
                                    ) : (
                                        <FiEye className="hover:text-[#ff3131]"/>
                                    )}
                                </button>
                                <InputError message={errors.password} className="mt-2"/>
                            </div>
                            <div className="relative">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" required/>
                                <TextInput
                                    id="password_confirmation"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full pr-10"
                                    autoComplete="new-password"
                                    onChange={(e) => setData("password_confirmation", e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPassword}
                                    className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? (
                                        <FiEyeOff className="hover:text-[#ff3131]"/>
                                    ) : (
                                        <FiEye className="hover:text-[#ff3131]"/>
                                    )}
                                </button>
                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>
                        </div>

                        <ReCAPTCHA
                            sitekey="6LdBejMrAAAAACUAes7oSakKuH7s3M3amBvw8LiT"
                            onChange={(token) => setCaptchaToken(token)}
                            onExpired={() => setCaptchaToken(null)}
                        />
                        <InputError message={captchaError} className="mt-2"/>

                        <div className="block sm:flex items-center justify-between">
                            <div>
                                <Link
                                    href={route("login")}
                                    className="text-base text-gray-800 hover:text-red-500 transition"
                                >
                                    Already registered?
                                </Link>
                            </div>
                            <div className="">
                                <Button className="w-full sm:w-auto mt-5 sm:mt-0" disabled={processing}>
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
// import TextInput from "@/Components/TextInput";
// import GuestLayout from "@/Layouts/GuestLayout";
// import { Head, Link, useForm } from "@inertiajs/react";

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route("register"), {
//             onFinish: () => reset("password", "password_confirmation"),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />
//             <div className="flex items-center justify-center py-12">
//                 <form onSubmit={submit}>
//                     <div>
//                         <InputLabel htmlFor="name" value="Name" />

//                         <TextInput
//                             id="name"
//                             name="name"
//                             value={data.name}
//                             className="mt-1 block w-full"
//                             autoComplete="name"
//                             isFocused={true}
//                             onChange={(e) => setData("name", e.target.value)}
//                             required
//                         />

//                         <InputError message={errors.name} className="mt-2" />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel htmlFor="email" value="Email" />

//                         <TextInput
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             className="mt-1 block w-full"
//                             autoComplete="username"
//                             onChange={(e) => setData("email", e.target.value)}
//                             required
//                         />

//                         <InputError message={errors.email} className="mt-2" />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel htmlFor="password" value="Password" />

//                         <TextInput
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={data.password}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={(e) =>
//                                 setData("password", e.target.value)
//                             }
//                             required
//                         />

//                         <InputError
//                             message={errors.password}
//                             className="mt-2"
//                         />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel
//                             htmlFor="password_confirmation"
//                             value="Confirm Password"
//                         />

//                         <TextInput
//                             id="password_confirmation"
//                             type="password"
//                             name="password_confirmation"
//                             value={data.password_confirmation}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={(e) =>
//                                 setData("password_confirmation", e.target.value)
//                             }
//                             required
//                         />

//                         <InputError
//                             message={errors.password_confirmation}
//                             className="mt-2"
//                         />
//                     </div>

//                     <div className="mt-4 flex items-center justify-end">
//                         <Link
//                             href={route("login")}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Already registered?
//                         </Link>

//                         <PrimaryButton className="ms-4" disabled={processing}>
//                             Register
//                         </PrimaryButton>
//                     </div>
//                 </form>
//             </div>
//         </GuestLayout>
//     );
// }
