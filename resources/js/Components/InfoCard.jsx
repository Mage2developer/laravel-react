import React from "react";
import { FaUserCircle } from "react-icons/fa";

function InfoCard({ label, value, icon, contactDetails = false }) {
    if (!value) return null;

    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <div className="block xs425:flex items-center text-gray-700">
                <div className="flex gap-2">
                    {!icon ? (
                        <FaUserCircle size={25} className="me-2 sm:me-auto" />
                    ) : (
                        icon
                    )}
                    <span className="font-bold">{label}</span>
                </div>
                <span
                    className={
                        contactDetails ? "ml-8 xs425:ml-2" : "ml-10 xs425:ml-2"
                    }
                >
                    {value}
                </span>
            </div>
        </div>
    );
}

export default InfoCard;
