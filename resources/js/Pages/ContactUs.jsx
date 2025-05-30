"use client";
import React, {useState} from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Head, useForm} from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";
import InputError from "@/Components/InputError";
import {FaWhatsapp} from "react-icons/fa";
import {FiClock, FiFacebook, FiInstagram, FiMail, FiMapPin,} from "react-icons/fi";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Textarea} from "@headlessui/react";
import TextInput from "@/Components/TextInput.jsx";
import Setting from "@/Utils/Setting.jsx";

export default function ContactUs() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            setCaptchaError("Invalid Captcha!");
            return;
        }

        post(route('contact.submit'), {
            onFinish: () => {
                setCaptchaToken(null)
            },
            onSuccess: () => {
                reset(); // Clear the form on successful submission
                setCaptchaToken(null);
            }
        });

        return (
            setSuccess(success)
        );
    };

    return (
        <GuestLayout>
            <Head title="Contact Us"/>
            <div className="flex items-center justify-center py-12 px-3 sm:px-0">
                <div className="max-w-6xl w-full mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10 text-[#ff3131] bg-clip-text">
                        Contact Us
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div
                            className="bg-white/5 shadow-lg backdrop-blur-md rounded-xl p-8 space-y-6 border border-black/10">
                            <h2 className="text-2xl font-semibold text-[#ff3131]">
                                Send us a message
                            </h2>

                            {success && (
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                                    role="alert">
                                    <strong className="font-bold">Success!</strong>
                                    <span className="block sm:inline"> {success}</span>
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                        Name:
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <TextInput
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email"
                                           className="block text-gray-700 text-sm font-bold mb-2">
                                        Email:
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <TextInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs  mt-2">{errors.email}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                        Subject:
                                    </label>
                                    <TextInput
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        className="w-full"
                                    />
                                    {errors.subject &&
                                        <p className="text-red-500 text-xs  mt-2">{errors.subject}</p>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message"
                                           className="required block text-gray-700 text-sm font-bold mb-2">
                                        Message:
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        rows="5"
                                        className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    ></Textarea>
                                    {errors.message &&
                                        <p className="text-red-500 text-xs  mt-2">{errors.message}</p>}
                                </div>

                                <div className="mb-6">
                                    <ReCAPTCHA
                                        sitekey={Setting.capatcha_v2_sitekey}
                                        onChange={(captchaToken) => {
                                            setCaptchaToken(captchaToken);
                                            setCaptchaError(null);
                                        }}
                                        onExpired={() => setCaptchaToken(null)}
                                    />
                                    {captchaError && (
                                        <InputError
                                            message={captchaError}
                                            className="mt-2"
                                        />
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                        className="primary-button"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div
                            className="bg-white/5 shadow-lg backdrop-blur-md rounded-xl p-8 space-y-6 border border-black/10">
                            <h2 className="text-2xl font-semibold text-[#ff3131]">
                                Get in touch
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaWhatsapp className="w-5 h-7 text-blue-400"/>
                                    <span>+91 8200426399</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiMail className="w-5 h-5 text-purple-400"/>
                                    <span>vanandvivah@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiClock className="w-5 h-5 text-purple-400"/>
                                    <span>
                                        11:00 AM to 5:00 PM (Monday - Friday)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FiMapPin className="w-10 sm:w-8 h-10 sm:h-8 mt-0.5 text-green-400"/>
                                    <span>
                                        Block Number 2, Bluebell Bunglows,
                                        Silver Park, Junagadh, India, 362001
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4 text-[#ff3131]">
                                    Connect with us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/"
                                        aria-label="Facebook"
                                        className="hover:text-[#ff3131] transition-colors"
                                    >
                                        <FiFacebook className="w-6 h-6"/>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        aria-label="Instagram"
                                        className="hover:text-[#ff3131] transition-colors"
                                    >
                                        <FiInstagram className="w-6 h-6"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
