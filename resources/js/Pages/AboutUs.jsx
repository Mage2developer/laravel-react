import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FiMapPin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FollowUs from "@/Components/Common/FollowUs";

const AboutUs = () => {
    return (
        <GuestLayout>
            <Head title="About Us" />
            <div className="flex items-center justify-center py-6 sm:py-12 px-3 sm:px-0">
                <div className="max-w-6xl w-full mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6 sm:mb-10 text-[#ff3131] bg-clip-text">
                        About Us
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image Column */}
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10  flex justify-center">
                            <LazyLoadImage
                                src="images/about-us.webp"
                                alt="Our Team"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Content Column */}
                        <div className="h-full bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-8 space-y-6 border border-black/10 shadow-lg flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-[#ff3131] text-center sm:text-left">
                                Our Story
                            </h2>
                            <p className="">
                                At vanandvivah.com, we believe that everyone
                                deserves to find their soulmate. Founded on the
                                principles of trust and community, we provide a
                                platform where genuine connections can blossom.
                            </p>
                            <p className="">
                                Unlike generic dating sites, we understand the
                                importance of cultural compatibility in finding
                                a life partner. Our tailored approach ensures
                                you connect with individuals who share your
                                values and aspirations.
                            </p>
                            <p className="">
                                Our dedicated team is passionate about creating
                                successful matches. We continuously strive to
                                enhance our platform with innovative features
                                and ensure a safe and respectful environment for
                                all our members.
                            </p>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-[#ff3131] text-center sm:text-left">
                                    Contact
                                </h3>
                                <div className="flex items-center gap-3">
                                    <FaWhatsapp className="w-7 h-7 text-blue-400" />
                                    <span className="">+91 8200426399</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FiMapPin className="w-10 sm:w-8 h-10 sm:h-8 mt-0.5 text-green-400" />
                                    <span className="">
                                        Block Number 2, Bluebell Bungalows,
                                        Silver park, Junagadh, India, 362001
                                    </span>
                                </div>
                            </div>

                            {/* Follow us Section Start */}
                            <FollowUs label="Follow Us"/>
                            {/* Follow us Section End */}

                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default AboutUs;
