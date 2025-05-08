import React, { useState } from "react";
import { FaCity, FaLocationCrosshairs, FaPhoneVolume } from "react-icons/fa6";

const UserContactDetails = ({ item }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="block xs425:flex items-center text-gray-700">
                        <div className="flex  items-center">
                            <FaPhoneVolume size={15} className="me-2" />
                            <span className="font-medium">Phone Number:</span>
                        </div>
                        <span className="ml-7 xs425:ml-2">
                            {item.user_contact_detail.mobile_number}
                        </span>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="block xs425:flex items-center text-gray-700">
                        <div className="flex  items-center">
                            <FaPhoneVolume size={15} className="me-2" />
                            <span className="font-medium">
                                Father's Phone Number:
                            </span>
                        </div>
                        <span className="ml-7 xs425:ml-2">
                            {item.user_contact_detail.father_mobile_number}
                        </span>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="block xs425:flex items-center text-gray-700">
                        <div className="flex items-center">
                            <FaLocationCrosshairs size={22} className="me-2" />
                            <span className="font-medium">Address:</span>
                        </div>
                        <div className="ml-7 xs425:ml-2">
                            {item.user_contact_detail.current_address}
                        </div>
                    </div>
                </div>
                {!item.user_contact_detail.native_city ? (
                    ""
                ) : (
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="block xs425:flex items-center text-gray-700">
                            <div className="flex items-center">
                                <FaCity size={22} className="me-2" />
                                <span className="font-medium">
                                    Native City:
                                </span>
                            </div>
                            <span className="ml-7 xs425:ml-2">
                                {item.user_contact_detail.native_city}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserContactDetails;
