import React from "react";
import { Link } from "@inertiajs/react";
import AgeCalculator from "./AgeCalculator";
import MaritalStatus from "./MaritalStatus";

export const LatestProfileCard = ({ profile }) => {
    console.log(profile);
    return (
        <div className="flex flex-col items-center p-5 rounded-xl transition-transform cursor-pointer border shadow-lg bg-[#fff7f7] bg-opacity-10  duration-300 ease hover:transform hover:scale-105 flex-[0_0_200px]">
            <Link
                href={`/profile/${profile.id}`}
                className="text-center flex-col items-center justify-center"
            >
                <div className="text-center flex items-center justify-center">
                    <img
                        className="object-cover overflow-hidden mb-3 rounded-full aspect-square h-[120px] w-[120px]"
                        src={
                            profile.user_images.length > 0
                                ? profile.user_images[0].image_path
                                : "/images/profile-placeholder.png"
                        }
                        alt={profile.name}
                    />
                </div>
                <h3 className="mb-1 text-base font-semibold text-center text-black line-clamp-1">
                    {profile.name}
                </h3>
                <div>
                    <div className="flex-col gap-5 justify-center items-center font-medium text-[#ff3131] mb-2.5">
                        <div className="mb-1">
                            <AgeCalculator
                                dob={profile.user_personal_detail.dob}
                            />
                        </div>

                        <div className="mb-1">
                            <MaritalStatus
                                status={
                                    profile.user_personal_detail.marital_status
                                }
                            />
                        </div>
                    </div>
                    <div className="mb-1 text-black  line-clamp-1">
                        {profile.user_education_detail.occupation}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LatestProfileCard;
