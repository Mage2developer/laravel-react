import React from "react";
import InfoCard from "@/Components/InfoCard";

const UserFamilyDetails = ({ item }) => {
    const family = item?.user_family_detail || {};

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard label="Father's Name:" value={family.father_name} />
                <InfoCard label="Mother's Name:" value={family.mother_name} />
                <InfoCard label="Brother's Name:" value={family.brother_name} />
                <InfoCard label="Brother-in-law's Name:" value={family.brother_in_laws} />
                <InfoCard label="Sister's Name:" value={family.sister_name} />
                <InfoCard label="Sister-in-law's Name:" value={family.sister_in_laws} />
            </div>
        </div>
    );
};

export default UserFamilyDetails;
