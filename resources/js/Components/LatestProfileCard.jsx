import React, {use} from "react";
import { Link, usePage } from "@inertiajs/react";
import AgeCalculator from "./AgeCalculator";
import MaritalStatus from "./MaritalStatus";
import { getFormattedName } from "@/Utils/profileUtils";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const LatestProfileCard = ({ profile }) => {
    return (
        <div className="flex flex-col items-center p-3 rounded-xl transition-transform border shadow-lg bg-[#fff7f7] bg-opacity-10  duration-300 ease hover:transform hover:scale-105 flex-[0_0_200px]">
            <Link
                href={`/profile/${btoa(profile.id)}`}
                className="text-center flex-col items-center justify-center"
            >
                <div className="text-center flex items-center justify-center cursor-pointer">
                    <LazyLoadImage
                        alt={profile.name}
                        src={
                            profile.user_images.length > 0
                                ? profile.user_images[0].image_path
                                : "/images/recent-slider/profile-placeholder.webp"
                        }
                        effect="blur"
                        className="object-cover overflow-hidden mb-3 rounded-full aspect-square h-[120px] w-[120px]"
                        height="120"
                        width="200"
                    />
                </div>

                <h3 className="mb-1 text-base font-semibold text-center text-black">
                    {getFormattedName(profile.name)}
                </h3>
                <div>
                    <div className="flex flex-col justify-center text-center items-center font-medium text-[#ff3131]">
                        <div className="mb-1 flex items-center gap-1">
                            {profile.user_personal_detail.dob ? (
                                <>
                                    <FaCalendarAlt /><AgeCalculator dob={profile.user_personal_detail.dob} />
                                </>
                            ) : ""}
                        </div>

                        <div className="mb-1 flex items-center gap-1">
                            <FaUser /><MaritalStatus status={profile.user_personal_detail.marital_status} />
                        </div>

                        <div className="text-black flex items-center justify-center">
                            {profile.user_education_detail.occupation ? (
                                <>
                                    <LuBriefcaseBusiness className="mr-1"/> {profile.user_education_detail.occupation}
                                </>
                            ) : ""}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LatestProfileCard;
