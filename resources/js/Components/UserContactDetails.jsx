import React, { useState } from "react";
import { FaCity, FaLocationCrosshairs, FaPhoneVolume } from "react-icons/fa6";
import InfoCard from "./InfoCard";

const UserContactDetails = ({ item }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold text-[#ff3131] mb-4">
                Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard
                    label="Phone Number:"
                    value={item.user_contact_detail.mobile_number}
                    icon={<FaPhoneVolume size={15} className="me-2" />}
                />
                <InfoCard
                    label="Father's Phone Number:"
                    value={item.user_contact_detail.father_mobile_number}
                    icon={<FaPhoneVolume size={15} className="me-2" />}
                />
                <InfoCard
                    label="Address:"
                    value={item.user_contact_detail.current_address}
                    icon={<FaLocationCrosshairs size={22} className="me-2" />}
                />
                {!item.user_contact_detail.native_city ? (
                    ""
                ) : (
                    <InfoCard
                        label="Native City:"
                        value={item.user_contact_detail.native_city}
                        icon={<FaCity size={22} className="me-2" />}
                    />
                )}
            </div>
        </div>
    );
};

export default UserContactDetails;
