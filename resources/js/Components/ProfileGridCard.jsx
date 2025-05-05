import { Link } from "@inertiajs/react";
import React from "react";

function ProfileGridCard({ profile }) {
    console.log(profile);
    return (
        <Link href={`/profile/${profile.id}`} className="block">
            <article className="text-center p-5 rounded-xl transition-all cursor-pointer bg-[#aeaeae] bg-opacity-10 duration-[0.3s] ease-[cubic-bezier(0.37,0.01,0,0.98)] hover:transform hover:scale-[1.02]">
                {/* <figure className="overflow-hidden relative pt-52 md:pt-80 mb-5 rounded-lg"> */}
                <div>
                    <img
                        className="rounded-full aspect-square size-full"
                        src={
                            profile.user_images.length > 0
                                ? profile.user_images[0].image_path
                                : ""
                        }
                        alt={profile.name}
                    />
                </div>
                {/* </figure> */}
                <h2 className="mb-2.5 text-2xl font-medium leading-tight">
                    {profile.name}
                </h2>
                {profile.description && (
                    <p className="mb-4 text-base leading-snug text-white text-opacity-60">
                        {profile.description}
                    </p>
                )}
                <div className="flex gap-5 justify-center items-center text-xl font-medium text-[#ff3131]">
                    <div>{profile.user_personal_detail.dob}</div>
                    <div>{profile.user_personal_detail.marital_status}</div>
                    <div>{profile.user_education_detail.occupation}</div>
                </div>
            </article>
        </Link>
    );
}

export default ProfileGridCard;
