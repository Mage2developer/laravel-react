import React from "react";
import LatestProfileCard from "../LatestProfileCard";

function RecentlyCreatedProfiles({ latestProfile }) {
    return (
        <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
            <h2 className="mb-10 text-5xl font-semibold text-center max-sm:text-3xl text-black">
                Recently Created Profiles
            </h2>

            <div className="overflow-x-auto">
                <div className="flex gap-5 px-0 py-5 min-w-min">
                    {latestProfile.map((profile, index) => (
                        <LatestProfileCard key={index} profile={profile} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentlyCreatedProfiles;
