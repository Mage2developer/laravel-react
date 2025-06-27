import React, { useState, useRef } from "react";
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
import { getMaritalStatusOptions } from "@/Utils/profileUtils";
import Setting from "@/Utils/Setting";
import ClickableTooltip from "@/Components/ClickableTooltip";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        mobile_number: "",
        sex: "",
        marital_status: "",
        personal_income: "",
        dob: '',
        education: "",
        occupation: "",
        father_name: "",
        mother_name: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setcaptchaError] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        const token = recaptchaRef.current.getValue();

        if (!token) {
            e.preventDefault();
            setcaptchaError("Please fill the Captcha !");
            return;
        }

        post(route("register"), {
            onFinish: () => {
                reset("password", "password_confirmation");
                recaptchaRef.current.reset();
            }
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="min-h-[450px] flex items-center justify-center my-2 md:my-16 p-2 md:p-0">
                <div className="max-w-full w-full sm:max-w-xl mx-auto backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-8 border border-black/10 bg-white/5">
                    <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        Register
                    </h1>

                    <form onSubmit={submit} className="sm:space-y-4">
                        <div className="my-3 sm:my-0">
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
                        <div className="my-3 sm:my-0">
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
                        <div className="my-3 sm:my-0">
                            <div className='items-center flex'>
                                <InputLabel htmlFor="mobile_number" value="Mobile Number" className="flex"  required/>
                                <ClickableTooltip
                                    text="(Abroad Formate)"
                                    className="normal-case font-normal"
                                    style={{ fontSize: "14px" }}
                                    tooltipContent={
                                        <ul class="list-disc px-4 sm:px-5">
                                            <li>Add country code for abroad</li>
                                            <li>eg. For USA +1</li>
                                            <li>eg. For Australia +61</li>
                                        </ul>
                                    }
                                />
                            </div>
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
                        <div className="flex flex-col sm:flex-row sm:gap-3 items-center">
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
                            <div className="w-full my-3 sm:my-0">
                                <InputLabel htmlFor="marital_status" value="Marital Status" required/>
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
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-3 items-center">
                            <div className="w-full my-3 sm:my-0">
                                <InputLabel htmlFor="dob" value="Date of Birth" required/>
                                <DatePicker
                                    onChange={(date) => setData('dob', date)}
                                    value={data.dob}
                                    className="w-full required"
                                />

                                <InputError message={errors.dob} className="mt-2"/>
                            </div>
                            <div className="w-full my-3 sm:my-0">
                                <InputLabel htmlFor="personal_income" value="Personal Income (Monthly)" required/>
                                <TextInput
                                    id="personal_income"
                                    value={data.personal_income}
                                    required
                                    onChange={(e) => setData('personal_income', e.target.value)}
                                    type="number"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.personal_income} className="mt-2"/>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-3 items-center">
                            <div className="w-full mb-3 sm:mb-0">
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
                            <div className="w-full">
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
                        <div className="flex flex-col sm:flex-row sm:gap-3 items-center">
                            <div className="w-full mt-3 sm:mt-0">
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
                            <div className="w-full mt-3 sm:mt-0">
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
                        <div className="flex flex-col sm:flex-row sm:gap-3 items-center">
                            <div className="relative w-full mt-3 sm:mt-0">
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
                            <div className="relative w-full my-3 sm:my-0">
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
                        <div className="w-full my-3 sm:my-0">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                className="w-full"
                                sitekey={Setting.capatcha_v2_sitekey}
                                onChange={(token) => {
                                    setCaptchaToken(token);
                                    setCaptchaError(null);
                                }}
                                onExpired={() => {
                                    recaptchaRef.current.reset();
                                    setCaptchaToken(null);
                                }}
                            />
                            <InputError message={captchaError} className="mt-2"/>
                        </div>

                            <div className="block sm:flex items-center justify-between">
                                <div className='mt-4 sm:mt-0'>
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
