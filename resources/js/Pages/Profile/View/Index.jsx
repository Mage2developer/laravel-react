"use client";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AgeCalculator from "@/Components/AgeCalculator";
import MaritalStatus from "@/Components/MaritalStatus";
import MangalikStatus from "@/Components/MangalikStatus";
import HaveSpecsStatus from "@/Components/HaveSpecsStatus";
import GetGenderText from "@/Components/GetGenderText";
import { IoTextSharp } from "react-icons/io5";
import FsLightbox from "fslightbox-react";
import UserPhotoGallery from "@/Components/UserPhotoGallery";
import UserFamilyDetails from "@/Components/UserFamilyDetails";
import UserContactDetails from "@/Components/UserContactDetails";
import UserPersonalDetails from "@/Components/UserPersonalDetails";
import {
    IoIosArrowDropdown,
    IoIosArrowDropdownCircle,
    IoIosArrowDropup,
} from "react-icons/io";

function Index({ profile }) {
    const [activeTab, setActiveTab] = useState("about");
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const [openAccordions, setOpenAccordions] = useState({});

    const toggleAccordion = (section) => {
        setOpenAccordions((prev) => ({
            [section]: !prev[section],
        }));
    };

    const item = profile[0];

    const photoUrls = item.user_images.map((img) => `/${img.image_path}`);
    // item.about = "Hello"
    return (
        <AuthenticatedLayout>
            <Head title={item.name} />
            <div className="min-h-screen bg-gray-100 p-[15px] sm:p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-[#ff3131] to-[#e1a730] text-white p-6">
                            <div className="flex flex-col md:flex-row items-center md:justify-between">
                                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6">
                                        <img
                                            src={
                                                item.user_images.length > 0
                                                    ? `/${item.user_images[0].image_path}`
                                                    : "/images/profile-placeholder.png"
                                            }
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h1 className="text-2xl font-bold">
                                            {item.name}
                                            {/* ,
                                            {item.user_personal_detail.dob} */}
                                        </h1>
                                        <div className="flex items-center justify-center md:justify-start mt-1">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                            <span className="text-sm">
                                                {
                                                    item.user_education_detail
                                                        .occupation
                                                }
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start mt-1">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                ></path>
                                            </svg>
                                            <span className="text-sm">
                                                {
                                                    item.user_education_detail
                                                        .education
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b hidden sm:flex">
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab("about")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "about"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Personal Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("photos")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "photos"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Photos
                                </button>
                                <button
                                    onClick={() => setActiveTab("family")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "family"
                                            ? "border-b-2 border-[#ff3131] text-[#ff3131]"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Family Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("preferences")}
                                    className={`px-4 py-3 font-medium text-sm ${
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
                        <div className="block sm:hidden space-y-4 mb-8 mt-4">
                            {["about", "photos", "family", "preferences"].map(
                                (section) => {
                                    const isOpen = openAccordions[section];

                                    return (
                                        <div
                                            key={section}
                                            className="border-[1px] rounded-lg m-2"
                                        >
                                            <button
                                                onClick={() => {
                                                    setActiveTab(section);
                                                    setOpenAccordions(
                                                        (prev) => ({
                                                            [section]:
                                                                !prev[section],
                                                        })
                                                    );
                                                }}
                                                className={`w-full text-left px-4 py-3 font-medium text-xl bg-white flex justify-between items-center${
                                                    isOpen
                                                        ? "bg-[#ff3131] text-[#ff3131]"
                                                        : "bg-gray-100 text-gray-700 "
                                                }`}
                                            >
                                                {section === "about" &&
                                                    "Personal Details"}
                                                {section === "photos" &&
                                                    "Photos"}
                                                {section === "family" &&
                                                    "Family Details"}
                                                {section === "preferences" &&
                                                    "Contact Details"}
                                                <div className="m-1">
                                                    {isOpen ? (
                                                        <IoIosArrowDropup />
                                                    ) : (
                                                        <IoIosArrowDropdown />
                                                    )}
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="px-5 py-3 border-t">
                                                    {section === "about" && (
                                                        <UserPersonalDetails
                                                            item={item}
                                                        />
                                                    )}

                                                    {section === "photos" && (
                                                        <UserPhotoGallery
                                                            userImages={
                                                                item.user_images
                                                            }
                                                            toggler={toggler}
                                                            slideIndex={
                                                                slideIndex
                                                            }
                                                            setToggler={
                                                                setToggler
                                                            }
                                                            setSlideIndex={
                                                                setSlideIndex
                                                            }
                                                        />
                                                    )}

                                                    {section === "family" && (
                                                        <UserFamilyDetails
                                                            item={item}
                                                        />
                                                    )}

                                                    {section ===
                                                        "preferences" && (
                                                        <UserContactDetails
                                                            item={item}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        {/* Mobile View End  */}
                        <div className="p-6 hidden sm:block">
                            {activeTab === "about" && (
                                <UserPersonalDetails item={item} />
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
                                    <UserFamilyDetails item={item} />
                                </div>
                            )}

                            {activeTab === "preferences" && (
                                <UserContactDetails item={item} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
