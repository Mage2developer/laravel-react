import React from "react";
import ProfileGridCard from "./ProfileGridCard";

function ProfileGrid({ profiles }) {
    return (
        <>
        {profiles.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-[repeat(3,1fr)] xs425:grid-cols-[repeat(2,1fr)] max-xs425:grid-cols-[1fr] mb-20">
                {profiles.map((profile) => (
                    <ProfileGridCard key={profile.id} profile={profile} />
                ))}
            </div>
            ) : (
                <div className="flex items-center justify-center text-md text-red-500">No Profiles Found</div>
            )}
        </>

    );
}

export default ProfileGrid;
