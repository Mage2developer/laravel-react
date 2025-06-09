import React from "react";
import { FaCity, FaLocationCrosshairs, FaPhoneVolume } from "react-icons/fa6";
import InfoCard from "@/Components/InfoCard";

const UserContactDetails = ({ item }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard
                    label="Phone Number:"
                    value={item.user_contact_detail.mobile_number}
                    icon={<FaPhoneVolume size={15} className="me-2" />}
                    contactDetails={true}
                />
                <InfoCard
                    label="Father's Phone Number:"
                    value={item.user_contact_detail.father_mobile_number}
                    icon={<FaPhoneVolume size={15} className="me-2" />}
                    contactDetails={true}
                />
                <InfoCard
                    label="Address:"
                    value={
                        <div className="ml-8 xs425:ml-2 flex items-center">
                            {item.user_contact_detail.current_address}
                        </div>
                    }
                    icon={<FaLocationCrosshairs size={24} />}
                    marginCustom={true}
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
