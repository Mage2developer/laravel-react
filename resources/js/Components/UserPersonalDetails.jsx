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
import InfoCard from "./InfoCard";

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
                        <InfoCard
                            label="Gender:"
                            value={
                                <GetGenderText
                                    status={item.user_personal_detail.sex}
                                />
                            }
                            icon={<BiMaleFemale size={24} className="me-2" />}
                        />
                        <InfoCard
                            label="Age:"
                            value={
                                <>
                                    <AgeCalculator
                                        dob={item.user_personal_detail.dob}
                                    />{" "}
                                    (
                                    {
                                        item.user_personal_detail.dob.split(
                                            "T"
                                        )[0]
                                    }
                                    )
                                </>
                            }
                            icon={<FaCalendarDays size={22} className="me-2" />}
                        />
                        <InfoCard
                            label="Weight:"
                            value={item.user_personal_detail.weight}
                            icon={<LiaWeightSolid size={24} className="me-2" />}
                        />
                        <InfoCard
                            label="Height:"
                            value={item.user_personal_detail.height}
                            icon={
                                <BsPersonStanding size={24} className="me-2" />
                            }
                        />
                        <InfoCard
                            label="Marital Status:"
                            value={
                                <MaritalStatus
                                    status={
                                        item.user_personal_detail.marital_status
                                    }
                                />
                            }
                            icon={<GiLinkedRings size={24} className="me-2" />}
                        />
                        <InfoCard
                            label="Manglik:"
                            value={
                                <MangalikStatus
                                    status={item.user_personal_detail.manglik}
                                />
                            }
                            icon={<MdDiamond size={24} className="me-2" />}
                        />
                        <InfoCard
                            label="Have You Specs:"
                            value={
                                <HaveSpecsStatus
                                    status={
                                        item.user_personal_detail.have_specs
                                    }
                                />
                            }
                            icon={<GiSpectacles size={30} className="me-2" />}
                        />
                        <div></div>
                        <InfoCard
                            label="Personal Income:"
                            value={
                                <>
                                    <span className="ml-7 xs425:ml-2 flex items-center">
                                        <FaIndianRupeeSign />
                                        {
                                            item.user_education_detail
                                                .personal_income
                                        }
                                    </span>
                                </>
                            }
                            icon={<GiMoneyStack size={25} className="me-2" />}
                        />
                        <InfoCard
                            label="Family Income:"
                            value={
                                <>
                                    <span className="ml-7 xs425:ml-2 flex items-center">
                                        <FaIndianRupeeSign />
                                        {
                                            item.user_education_detail
                                                .family_income
                                        }
                                    </span>
                                </>
                            }
                            icon={<GiMoneyStack size={25} className="me-2" />}
                        />
                    </div>
                </div>

                <div>
                    <div className="bg-gray-50 rounded-lg">
                        <div className="grid ">
                            <InfoCard
                                label="Location:"
                                value={item.user_contact_detail.current_address}
                                icon={<FaLocationCrosshairs size={24} />}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-[#ff3131] mb-2">
                        Career
                    </h2>
                    <div className="p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoCard
                                label="Occupation:"
                                value={item.user_education_detail.occupation}
                                icon={
                                    <MdBusinessCenter
                                        size={22}
                                        className="me-2"
                                    />
                                }
                            />
                            <InfoCard
                                label="Education:"
                                value={item.user_education_detail.education}
                                icon={
                                    <FaGraduationCap
                                        size={22}
                                        className="me-2"
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>

                <div>
                    {!item.user_personal_detail.hobby ? (
                        ""
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserPersonalDetails;
