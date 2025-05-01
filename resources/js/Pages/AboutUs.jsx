import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import {
    FiTwitter,
    FiLinkedin,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiFacebook,
} from "react-icons/fi";

const AboutUs = () => {
    return (
        <GuestLayout>
            <div className="flex items-center justify-center py-12 ">
                <div className="max-w-6xl w-full mx-auto mt-10">
                    <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        About Us
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image Column */}
                        <div className="h-full rounded-xl overflow-hidden shadow-lg border border-white/10 flex justify-center">
                            <img
                                src="images/about-us.png"
                                alt="Our Team"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Content Column */}
                        <div className="h-full bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-white/10 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-[#ff3131]">
                                Our Story
                            </h2>
                            <p className="">
                                We are a passionate team dedicated to creating
                                innovative solutions. Our journey began with a
                                vision to build impactful technology. Over the
                                years, we have evolved, always striving to
                                deliver excellence and make a positive
                                difference.
                            </p>
                            <p className="">
                                Our mission is to empower users through
                                user-friendly digital products and exceptional
                                service.
                            </p>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-[#ff3131]">
                                    Contact
                                </h3>
                                <div className="flex items-center gap-3">
                                    <FiPhone className="w-5 h-5 text-blue-400" />
                                    <span className="">+123 456 7890</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FiMapPin className="w-5 h-5 mt-0.5 text-green-400" />
                                    <span className="">
                                        123 Main Street, Anytown, USA
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4 text-[#ff3131]">
                                    Follow us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className=" hover:text-blue-400"
                                    >
                                        <FiTwitter className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className=" hover:text-blue-600"
                                    >
                                        <FiFacebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className=" hover:text-purple-500"
                                    >
                                        <FiLinkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className=" hover:text-white">
                                        <FiGithub className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default AboutUs;
