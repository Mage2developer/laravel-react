import React from "react";
import AgeCalculator from "@/Components/AgeCalculator";
import MaritalStatus from "@/Components/MaritalStatus";
import MangalikStatus from "@/Components/MangalikStatus";
import HaveSpecsStatus from "@/Components/HaveSpecsStatus";
import GetGenderText from "@/Components/GetGenderText";
import { BsPersonStanding } from "react-icons/bs";
import {
    FaCalendarDays,
    FaGraduationCap,
    FaIndianRupeeSign,
    FaLocationCrosshairs,
} from "react-icons/fa6";
import {
    GiBodyHeight,
    GiLinkedRings,
    GiMoneyStack,
    GiSpectacles,
} from "react-icons/gi";
import { LiaWeightSolid } from "react-icons/lia";
import { MdBusinessCenter, MdDiamond } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";

function UserPersonalDetails({ item }) {
    // const items = props.item;
    return (
        <div>
            <div className="space-y-6">
                {!item.about ? (
                    ""
                ) : (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            About Me
                        </h2>
                        <p className="text-gray-600">{item.about}</p>
                    </div>
                )}

                <div>
                    <h2 className="text-lg font-semibold text-[#ff3131] mb-2 ">
                        Basic Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <BsPersonStanding size={24} className="me-2" />
                                <span className="font-bold">Height:</span>
                                <span className="ml-2">
                                    {item.user_personal_detail.height}
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <LiaWeightSolid size={24} className="me-2" />

                                <span className="font-bold">Weight:</span>
                                <span className="ml-2">
                                    {item.user_personal_detail.weight}
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="block xs425:flex items-center text-gray-700">
                                <div className="flex items-center">
                                    <FaCalendarDays
                                        size={22}
                                        className="me-2"
                                    />
                                    <span className="font-bold">Age:</span>
                                </div>
                                <span className="ml-7 xs425:ml-2">
                                    <AgeCalculator
                                        dob={item.user_personal_detail.dob}
                                    />{" "}
                                    ({item.user_personal_detail.dob})
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="block xs425:flex items-center text-gray-700">
                                <div className="flex items-center">
                                    <GiLinkedRings size={24} className="me-2" />
                                    <span className="font-bold">
                                        Marital Status:
                                    </span>
                                </div>
                                <span className="ml-7 xs425:ml-2">
                                    <MaritalStatus
                                        status={
                                            item.user_personal_detail
                                                .marital_status
                                        }
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <MdDiamond size={24} className="me-2" />
                                <span className="font-bold">Manglik:</span>
                                <span className="ml-2">
                                    <MangalikStatus
                                        status={
                                            item.user_personal_detail.manglik
                                        }
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <GiSpectacles size={30} className="me-2" />
                                <span className="font-bold">
                                    Have You Specs:
                                </span>
                                <span className="ml-2">
                                    <HaveSpecsStatus
                                        status={
                                            item.user_personal_detail.have_specs
                                        }
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <BiMaleFemale size={24} className="me-2" />
                                <span className="font-bold">Gender:</span>
                                <span className="ml-2">
                                    <GetGenderText
                                        status={item.user_personal_detail.sex}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="block xs425:flex items-center text-gray-700">
                                <div className="flex">
                                    <GiMoneyStack size={25} className="me-2" />
                                    <span className="font-bold">
                                        Personal Income :
                                    </span>
                                </div>
                                <span className="ml-7 xs425:ml-2 flex items-center">
                                    <FaIndianRupeeSign />
                                    {item.user_education_detail.personal_income}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid ">
                            <div className="block xs425:flex items-center text-gray-700">
                                <div className="flex ">
                                    <FaLocationCrosshairs
                                        size={24}
                                        className="me-2"
                                    />
                                    <span className="font-bold">
                                        Location:
                                    </span>
                                </div>
                                <div className="ml-7 xs425:ml-2">
                                    {item.user_contact_detail.current_address}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-[#ff3131] mb-2">
                        Career
                    </h2>
                    <div className="p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg block xs425:flex items-center text-gray-700">
                                <div className="flex">
                                    <MdBusinessCenter
                                        size={22}
                                        className="me-2"
                                    />
                                    <span className="font-bold">
                                        Occupation :
                                    </span>
                                </div>

                                <div className="ml-7 xs425:ml-2">
                                    {item.user_education_detail.occupation}
                                </div>
                            </div>
                            <div className="block xs425:flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                                <div className="flex">
                                    <FaGraduationCap
                                        size={22}
                                        className="me-2"
                                    />
                                    <span className="font-bold">
                                        Education:
                                    </span>
                                </div>
                                <span className="ml-7 xs425:ml-2">
                                    {item.user_education_detail.education}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-[#ff3131] mb-2">
                        Hobby
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid ">
                            <div className="flex items-center text-gray-700">
                                {item.user_personal_detail.hobby}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPersonalDetails;
