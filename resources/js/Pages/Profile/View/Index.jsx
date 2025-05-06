"use client";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AgeCalculator from "@/Components/AgeCalculator";
import MaritalStatus from "@/Components/MaritalStatus";
import MangalikStatus from "@/Components/MangalikStatus";
import HaveSpecsStatus from "@/Components/HaveSpecsStatus";
import GetGenderText from "@/Components/GetGenderText";

function Index({ profile }) {
    const [activeTab, setActiveTab] = useState("about");
    console.log(profile[0]);
    const item = profile[0];
    // item.about = "Hello"
    return (
        <AuthenticatedLayout>
            <Head title={item.name} />
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                            <div className="flex flex-col md:flex-row items-center md:justify-between">
                                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6">
                                        <img
                                            src={
                                                item.user_images.length > 0
                                                    ? item.user_images[0]
                                                          .image_path
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

                        <div className="border-b">
                            <nav className="flex">
                                <button
                                    onClick={() => setActiveTab("about")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "about"
                                            ? "border-b-2 border-purple-600 text-purple-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Personal Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("photos")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "photos"
                                            ? "border-b-2 border-purple-600 text-purple-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Photos
                                </button>
                                <button
                                    onClick={() => setActiveTab("family")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "family"
                                            ? "border-b-2 border-purple-600 text-purple-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Family Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("preferences")}
                                    className={`px-4 py-3 font-medium text-sm ${
                                        activeTab === "preferences"
                                            ? "border-b-2 border-purple-600 text-purple-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Contact Details
                                </button>
                            </nav>
                        </div>
                        <div className="p-6">
                            {activeTab === "about" && (
                                <div className="space-y-6">
                                    {!item.about ? (
                                        ""
                                    ) : (
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                                About Me
                                            </h2>
                                            <p className="text-gray-600">
                                                {item.about}
                                            </p>
                                        </div>
                                    )}

                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                            Basic Details
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Height:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_personal_detail
                                                                .height
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Weight:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_personal_detail
                                                                .weight
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Age:
                                                    </span>
                                                    <span className="ml-2">
                                                        <AgeCalculator
                                                            dob={
                                                                item
                                                                    .user_personal_detail
                                                                    .dob
                                                            }
                                                        />{" "}
                                                        (
                                                        {
                                                            item
                                                                .user_personal_detail
                                                                .dob
                                                        }
                                                        )
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Marital Status:
                                                    </span>
                                                    <span className="ml-2">
                                                        <MaritalStatus
                                                            status={
                                                                item
                                                                    .user_personal_detail
                                                                    .marital_status
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Manglik:
                                                    </span>
                                                    <span className="ml-2">
                                                        <MangalikStatus
                                                            status={
                                                                item
                                                                    .user_personal_detail
                                                                    .manglik
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Have You Specs:
                                                    </span>
                                                    <span className="ml-2">
                                                        <HaveSpecsStatus
                                                            status={
                                                                item
                                                                    .user_personal_detail
                                                                    .have_specs
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Gender:
                                                    </span>
                                                    <span className="ml-2">
                                                        <GetGenderText
                                                            status={
                                                                item
                                                                    .user_personal_detail
                                                                    .sex
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Personal Income :
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_education_detail
                                                                .personal_income
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="grid ">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Location:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_contact_detail
                                                                .current_address
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                            Career
                                        </h2>
                                        <div className="p-4 rounded-lg">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-gray-50 p-4 rounded-lg flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Occupation :
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_education_detail
                                                                .occupation
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
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
                                                    <span className="font-medium">
                                                        Education:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_education_detail
                                                                .education
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                            Hobby
                                        </h2>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="grid ">
                                                <div className="flex items-center text-gray-700">
                                                    {
                                                        item
                                                            .user_personal_detail
                                                            .hobby
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "photos" && (
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                        Photo Gallery
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {item.user_images.map(
                                            (photo, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                                                >
                                                    <img
                                                        src={photo.image_path}
                                                        alt={`Photo ${
                                                            index + 1
                                                        }`}
                                                        className="w-full h-64 object-cover"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === "family" && (
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                        Family Details
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Father's Name:
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item.user_family_detail
                                                            .father_name
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Father's Income :
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item
                                                            .user_education_detail
                                                            .family_income
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Mother's Name:
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item.user_family_detail
                                                            .mother_name
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className=""></div>

                                        {!item.user_family_detail
                                            .brother_name ? (
                                            ""
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Brother's Name:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_family_detail
                                                                .brother_name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!item.user_family_detail
                                            .brother_in_laws ? (
                                            ""
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Brother in laws's Name:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_family_detail
                                                                .brother_in_laws
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!item.user_family_detail
                                            .sister_name ? (
                                            ""
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Sister's Name:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_family_detail
                                                                .sister_name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!item.user_family_detail
                                            .sister_in_laws ? (
                                            ""
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Sister in laws's Name:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_family_detail
                                                                .sister_in_laws
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === "preferences" && (
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                        Contact Details
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Phone Number:
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item.user_contact_detail
                                                            .mobile_number
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Father's Phone Number:
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item.user_contact_detail
                                                            .father_mobile_number
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    ></path>
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    ></path>
                                                </svg>
                                                <span className="font-medium">
                                                    Address:
                                                </span>
                                                <span className="ml-2">
                                                    {
                                                        item.user_contact_detail
                                                            .current_address
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        {!item.user_contact_detail
                                            .native_city ? (
                                            ""
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center text-gray-700">
                                                    <svg
                                                        className="w-5 h-5 mr-2 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="font-medium">
                                                        Native City:
                                                    </span>
                                                    <span className="ml-2">
                                                        {
                                                            item
                                                                .user_contact_detail
                                                                .native_city
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
