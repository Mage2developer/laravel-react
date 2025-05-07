import React from "react";
import { FaUserCircle } from "react-icons/fa";

const InfoCard = ({ label, value }) => {
    if (!value) return null;

    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <div className="block xs425:flex items-center text-gray-700">
                <div className="flex gap-2">
                    <FaUserCircle size={25} className="me-2 sm:me-auto" />
                    <span className="font-medium">{label}</span>
                </div>
                <span className="ml-10 xs425:ml-2">{value}</span>
            </div>
        </div>
    );
};

const UserFamilyDetails = ({ item }) => {
    const family = item?.user_family_detail || {};
    const income =
        item?.user_education_detail?.family_income || "Not Available";

    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Family Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard label="Father's Name:" value={family.father_name} />
                <InfoCard label="Father's Income:" value={income} />
                <InfoCard label="Mother's Name:" value={family.mother_name} />
                <div></div>
                <InfoCard label="Brother's Name:" value={family.brother_name} />
                <InfoCard
                    label="Brother-in-law's Name:"
                    value={family.brother_in_laws}
                />
                <InfoCard label="Sister's Name:" value={family.sister_name} />
                <InfoCard
                    label="Sister-in-law's Name:"
                    value={family.sister_in_laws}
                />
            </div>
        </div>
    );
};

export default UserFamilyDetails;
