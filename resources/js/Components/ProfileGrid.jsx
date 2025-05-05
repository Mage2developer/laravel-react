import React from "react";
import ProfileGridCard from "./ProfileGridCard";

function ProfileGrid({ profiles }) {
    return (
        <div className="grid gap-8 lg:grid-cols-[repeat(3,1fr)] xs425:grid-cols-[repeat(2,1fr)] max-xs425:grid-cols-[1fr] mb-20">
            {profiles.map((profile) => (
                <ProfileGridCard key={profile.id} profile={profile} />
            ))}
        </div>
    );
}

export default ProfileGrid;
