import { Link } from "@inertiajs/react";
import React from "react";
import AgeCalculator from "./AgeCalculator";
import MaritalStatus from "./MaritalStatus";
import { getFormattedName } from "@/Utils/profileUtils";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProfileGridCard({ profile }) {
    return (
        <Link href={`/profile/${btoa(profile.id)}`} className="block p-5 rounded-xl transition-all cursor-pointer bg-[#fff7f7] border shadow-lg bg-opacity-10 duration-[0.3s] ease-[cubic-bezier(0.37,0.01,0,0.98)] hover:transform hover:scale-[1.02]">
            <article className="text-center">
                <div>
                    <LazyLoadImage
                        alt={profile.name}
                        src={
                            profile.user_images.length > 0
                                ? profile.user_images[0].image_path
                                : "/images/profile-placeholder.webp"
                        }
                        effect="blur"
                        className="rounded-full aspect-square size-full"
                    />
                </div>
                <h2 className="my-2.5 text-2xl font-medium leading-tight line-clamp-1">
                    {getFormattedName(profile.name)}
                </h2>
                <div className="flex gap-5 justify-center items-center text-xl font-medium text-[#ff3131] mb-2.5">
                    <div className="flex items-center gap-1">
                        {profile.user_personal_detail.dob ? (
                            <>
                                <FaCalendarAlt /><AgeCalculator dob={profile.user_personal_detail.dob} />
                            </>
                        ) : ""}
                    </div>

                    <div className="flex items-center gap-1">
                        <FaUser /><MaritalStatus status={profile.user_personal_detail.marital_status} />
                    </div>
                </div>
                <div className="mb-2.5 flex items-center justify-center">
                    {profile.user_education_detail.occupation ? (
                        <>
                            <LuBriefcaseBusiness className="mr-1"/> {profile.user_education_detail.occupation}
                        </>
                    ) : ""}
                </div>
            </article>
        </Link>
    );
}

export default ProfileGridCard;
