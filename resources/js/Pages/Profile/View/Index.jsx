"use client";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import UserPhotoGallery from "./UserPhotoGallery";
import UserFamilyDetails from "./UserFamilyDetails";
import UserContactDetails from "./UserContactDetails";
import UserPersonalDetails from "./UserPersonalDetails";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import AccordionItemProfile from "@/Components/AccordionItemProfile";

function Index({ profile }) {
    const [activeTab, setActiveTab] = useState("about");
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const [openAccordions, setOpenAccordions] = useState({});

    const item = profile;

    return (
        <AuthenticatedLayout>
            <Head title={item.name} />
            <div className=" bg-white sm:p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="w-full my-2">
                        <Link href={route("profile.list")} className="flex items-center justify-center md:justify-start
                        hover:text-[#ff3131]">
                            <IoMdArrowRoundBack className="flex mr-1"/> Go back to Profiles
                        </Link>
                    </div>
                    <div className="bg-white xs425:rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-[#ff3131] to-[#e1a730] text-white p-6">
                            <div className="flex flex-col md:flex-row items-center md:justify-between">
                                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                                    <div
                                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6">
                                        <img
                                            src={
                                                item.user_images.length > 0
                                                    ? `/${item.user_images[0].image_path}`
                                                    : "/images/profile-placeholder.webp"
                                            }
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h1 className="text-2xl font-bold">{item.name}</h1>

                                        {item.user_education_detail.occupation ? (
                                            <div className="flex items-center justify-center md:justify-start mt-1">
                                                <LuBriefcaseBusiness className="mr-1"/>
                                                <span className="text-lm">{item.user_education_detail.occupation}</span>
                                            </div>
                                        ) : ""}

                                        {item.user_education_detail.education ? (
                                            <div className="flex items-center justify-center md:justify-start mt-1">
                                                <FaGraduationCap className="mr-1"/>
                                                <span className="text-lm">{item.user_education_detail.education}</span>
                                            </div>
                                        ) : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b hidden sm:flex">
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab("about")}
                                    className={`px-4 py-3 font-medium text-md ${
                                        activeTab === "about"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Personal Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("photos")}
                                    className={`px-4 py-3 font-medium text-md ${
                                        activeTab === "photos"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Photos
                                </button>
                                <button
                                    onClick={() => setActiveTab("family")}
                                    className={`px-4 py-3 font-medium text-md ${
                                        activeTab === "family"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Family Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("preferences")}
                                    className={`px-4 py-3 font-medium text-md ${
                                        activeTab === "preferences"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Contact Details
                                </button>
                            </nav>
                        </div>
                        {/* Mobile View Start */}
                        <div className="block sm:hidden space-y-4 my-5 px-2 sm:px-0">
                            {[
                                {
                                    key: "about",
                                    title: "Personal Details",
                                    content: (
                                        <UserPersonalDetails item={item}/>
                                    ),
                                },
                                {
                                    key: "photos",
                                    title: "Photos",
                                    content: (
                                        <UserPhotoGallery
                                            userImages={item.user_images}
                                            toggler={toggler}
                                            slideIndex={slideIndex}
                                            setToggler={setToggler}
                                            setSlideIndex={setSlideIndex}
                                        />
                                    ),
                                },
                                {
                                    key: "family",
                                    title: "Family Details",
                                    content: <UserFamilyDetails item={item}/>,
                                },
                                {
                                    key: "preferences",
                                    title: "Contact Details",
                                    content: <UserContactDetails item={item}/>,
                                },
                            ].map(({key, title, content}) => (
                                <AccordionItemProfile
                                    key={key}
                                    title={title}
                                    isOpen={openAccordions[key]}
                                    onToggle={() =>
                                        setOpenAccordions((prev) => ({
                                            ...prev,
                                            [key]: !prev[key],
                                        }))
                                    }
                                >
                                    {content}
                                </AccordionItemProfile>
                            ))}
                        </div>
                        {/* Mobile View End  */}
                        <div className="p-6 hidden sm:block">
                            {activeTab === "about" && (
                                <UserPersonalDetails item={item}/>
                            )}

                            {activeTab === "photos" && (
                                <UserPhotoGallery
                                    userImages={item.user_images}
                                    toggler={toggler}
                                    slideIndex={slideIndex}
                                    setToggler={setToggler}
                                    setSlideIndex={setSlideIndex}
                                />
                            )}

                            {activeTab === "family" && (
                                <div>
                                    <UserFamilyDetails item={item}/>
                                </div>
                            )}

                            {activeTab === "preferences" && (
                                <UserContactDetails item={item}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
