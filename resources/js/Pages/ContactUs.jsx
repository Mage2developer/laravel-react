"use client";
import React, { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/Button";
import { FaWhatsapp } from "react-icons/fa";
import {
    FiClock,
    FiFacebook,
    FiInstagram,
    FiMail,
    FiMapPin,
} from "react-icons/fi";

export default function ContactUs({ status }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState(null);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { post, processing, reset } = useForm({
        name: "",
        email: "",
        message: "",
        "g-recaptcha-response": "",
    });

    useEffect(() => {
        validateForm();
    }, [name, email, message]);

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required.";
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!message.trim()) newErrors.message = "Message is required.";
        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Mark as submitted
        validateForm();

        if (!isFormValid) return;

        if (!captchaToken) {
            setCaptchaError("Invalid Captcha!");
            return;
        }

        post(route("contactus"), {
            data: {
                name,
                email,
                message,
                "g-recaptcha-response": captchaToken,
            },
            onSuccess: () => {
                setName("");
                setEmail("");
                setMessage("");
                setCaptchaToken(null);
                setSubmitted(false); // Reset submission flag
                reset();
            },
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <GuestLayout>
            <Head title="Contact Us" />
            <div className="flex items-center justify-center py-12 px-3 sm:px-0">
                <div className="max-w-6xl w-full mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10 text-[#ff3131] bg-clip-text">
                        Contact Us
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white/5 shadow-lg backdrop-blur-md rounded-xl p-8 space-y-6 border border-black/10">
                            <h2 className="text-2xl font-semibold text-[#ff3131]">
                                Send us a message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-700 rounded placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                    {submitted && errors.name && (
                                        <InputError message={errors.name} />
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Your Email"
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-700 rounded placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                    {submitted && errors.email && (
                                        <InputError message={errors.email} />
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-700 rounded placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                                    ></textarea>
                                    {submitted && errors.message && (
                                        <InputError message={errors.message} />
                                    )}
                                </div>

                                <ReCAPTCHA
                                    sitekey="6LdBejMrAAAAACUAes7oSakKuH7s3M3amBvw8LiT"
                                    onChange={(token) => {
                                        setCaptchaToken(token);
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

                                <Button
                                    type="submit"
                                    className="text-xl w-full py-3 rounded-md"
                                >
                                    Get in touch
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white/5 shadow-lg backdrop-blur-md rounded-xl p-8 space-y-6 border border-black/10">
                            <h2 className="text-2xl font-semibold text-[#ff3131]">
                                Get in touch
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaWhatsapp className="w-5 h-7 text-blue-400" />
                                    <span>+91 8200426399</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiMail className="w-5 h-5 text-purple-400" />
                                    <span>vanandvivah@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiClock className="w-5 h-5 text-purple-400" />
                                    <span>
                                        11:00 AM to 5:00 PM (Monday - Friday)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FiMapPin className="w-10 sm:w-8 h-10 sm:h-8 mt-0.5 text-green-400" />
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
                                        <FiFacebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        aria-label="Instagram"
                                        className="hover:text-[#ff3131] transition-colors"
                                    >
                                        <FiInstagram className="w-6 h-6" />
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
