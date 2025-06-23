import React from "react";
import { FaCity, FaLocationCrosshairs, FaPhoneVolume } from "react-icons/fa6";
import InfoCard from "@/Components/InfoCard";
import AddressConcat from "@/Components/Common/AddressConcat";

const UserContactDetails = ({ item }) => {
    return (
        <div className="flex flex-col gap-4">
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
            </div>
            {!item.user_contact_detail.native_address ? (
                ""
            ) : (
                <div>
                    <InfoCard
                        label="Native Address:"
                        value={item.user_contact_detail.native_address}
                        icon={<FaCity size={22} className="me-2" />}
                    />
                </div>
            )}

            {!item.user_contact_detail.foreign_address ? (
                ""
            ) : (
                <div>
                    <InfoCard
                        label="Foreign Address:"
                        value={
                            <div className="ml-8 xs425:ml-2 flex items-center">
                                {item.user_contact_detail.foreign_address}
                            </div>
                        }
                        icon={<FaLocationCrosshairs size={24} />}
                        marginCustom={true}
                    />
                </div>
            )}

            {!item.user_contact_detail.address_line_1 ? (
                ""
            ) : (
                <div>
                    <>
                        <InfoCard
                            label="India Address:"
                            value={
                                <div className="ml-8 xs425:ml-2 flex items-center">
                                    <AddressConcat
                                        contact={item.user_contact_detail}
                                    />
                                </div>
                            }
                            icon={<FaLocationCrosshairs size={24} />}
                            marginCustom={true}
                        />
                    </>
                </div>
            )}
        </div>
    );
};

export default UserContactDetails;
