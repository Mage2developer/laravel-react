"use client";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserPhotoGallery from "@/Components/UserPhotoGallery";
import UserFamilyDetails from "@/Components/UserFamilyDetails";
import UserContactDetails from "@/Components/UserContactDetails";
import UserPersonalDetails from "@/Components/UserPersonalDetails";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import AccordionItemProfile from "@/Components/AccordionItemProfile";

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

    const item = profile;

    const photoUrls = item.user_images.map((img) => `/${img.image_path}`);
    return (
        <AuthenticatedLayout>
            <Head title={item.name} />
            <div className=" bg-white sm:p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white xs425:rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-[#ff3131] to-[#e1a730] text-white p-6">
                            <div className="flex flex-col md:flex-row items-center md:justify-between">
                                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6">
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
                                        <h1 className="text-2xl font-bold">
                                            {item.name}
                                            {/* ,
                                            {item.user_personal_detail.dob} */}
                                        </h1>
                                        <div className="flex items-center justify-center md:justify-start mt-1">
                                            <LuBriefcaseBusiness
                                                className={"mr-1"}
                                            />
                                            <span className="text-lm">
                                                {
                                                    item.user_education_detail
                                                        .occupation
                                                }
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start mt-1">
                                            <FaGraduationCap
                                                className={"mr-1"}
                                            />
                                            <span className="text-lm">
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
                        <div className="block sm:hidden space-y-4 my-5">
                            {[
                                {
                                    key: "about",
                                    title: "Personal Details",
                                    content: (
                                        <UserPersonalDetails item={item} />
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
                                    content: <UserFamilyDetails item={item} />,
                                },
                                {
                                    key: "preferences",
                                    title: "Contact Details",
                                    content: <UserContactDetails item={item} />,
                                },
                            ].map(({ key, title, content }) => (
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
                        {/* <div className="block sm:hidden space-y-4 mb-8 mt-4">
                            {["about", "photos", "family", "preferences"].map(
                                (section) => {
                                    const isOpen = openAccordions[section];

                                    return (
                                        <div
                                            key={section}
                                            className="border-[1px] md:rounded-lg m-2"
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
                                                        <IoIosArrowDropup/>
                                                    ) : (
                                                        <IoIosArrowDropdown/>
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
                        </div> */}
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
