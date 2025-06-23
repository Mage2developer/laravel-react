import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectDropdown from "@/Components/SelectDropdown";
import SecondaryButton from "@/Components/SecondaryButton";

export default function UpdateContactDetailsForm({ userId, className = "" }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("india"); // 'india' | 'foreign' | null

    const { data, setData, errors, processing } = useForm({
        user_id: "",
        mobile_number: "",
        father_mobile_number: "",
        native_address: "",
        foreign_address: "",
        address_line_1: "",
        address_line_2: "",
        city_id: "",
        state_id: "",
        country_id: "",
    });

    useEffect(() => {
        axios
            .get(`/currentProfile/${userId}`)
            .then((res) => {
                const contact = res.data.profile.user_contact_detail;
                setData(contact);
                setData("user_id", userId);

                // if (!contact.country_id || contact.country_id !== 76) {
                //     setSelectedRegion("foreign");
                // } else {
                //     setSelectedRegion("india");
                // }
            })
            .catch((err) => console.error("Error fetching user data", err));
    }, [userId]);

    useEffect(() => {
        if (selectedRegion === "india") {
            setData("country_id", 76);
        } else if (selectedRegion === "foreign") {
            setData((prev) => ({
                ...prev,
                address_line_1: "",
                address_line_2: "",
                state_id: "",
                city_id: "",
                country_id: "",
            }));
        }
    }, [selectedRegion]);

    useEffect(() => {
        if (alert) {
            const timeout = setTimeout(() => {
                setAlert(false);
                setSuccessMessage("");
                setErrorMessage("");
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [alert]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie");
            const res = await axios.patch("/userContactDetail", data);
            if (res.data.success) {
                setSuccessMessage(res.data.message);
                await axios
                    .get(`/currentProfile/${userId}`)
                    .then((res) =>
                        setData(res.data.profile.user_contact_detail)
                    );
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (err) {
            setErrorMessage(
                err.response?.data?.message || "An error occurred."
            );
        } finally {
            setAlert(true);
        }
    };

    return (
        <section className={className}>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="mobile_number"
                        value="Mobile Number"
                        required
                    />
                    <TextInput
                        id="mobile_number"
                        value={data.mobile_number}
                        required
                        onChange={(e) =>
                            setData("mobile_number", e.target.value)
                        }
                        className="mt-1 block w-full"
                    />
                    <InputError
                        message={errors.mobile_number}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="father_mobile_number"
                        value="Father's Mobile Number"
                    />
                    <TextInput
                        id="father_mobile_number"
                        value={data.father_mobile_number}
                        onChange={(e) =>
                            setData("father_mobile_number", e.target.value)
                        }
                        className="mt-1 block w-full"
                    />
                    <InputError
                        message={errors.father_mobile_number}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="native_address"
                        value="Native Address"
                    />
                    <textarea
                        id="native_address"
                        value={data.native_address}
                        onChange={(e) =>
                            setData("native_address", e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />
                    <InputError
                        message={errors.native_address}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <div className="mb-1">
                        <InputLabel value="Current Address" />
                    </div>
                    <div className="flex gap-3 rounded-t-md overflow-hidden w-max">
                        <SecondaryButton
                            type="button"
                            onClick={() => setSelectedRegion("india")}
                            className={`px-4 py-2 text-sm font-medium border-r border-gray-300 ${
                                selectedRegion === "india"
                                    ? "bg-red-600 text-white border-b-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                    : "bg-gray-100 text-gray-600 hover:bg-red-400 hover:text-white"
                            }`}
                            style={{ fontSize: "12px" }}
                        >
                            INDIA
                        </SecondaryButton>
                        <SecondaryButton
                            type="button"
                            onClick={() => setSelectedRegion("foreign")}
                            className={`px-4 py-2 text-sm font-medium ${
                                selectedRegion === "foreign"
                                    ? "bg-red-600 text-white border-b-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                    : "bg-gray-100 text-gray-600 hover:bg-red-400 hover:text-white"
                            }`}
                            style={{ fontSize: "12px" }}
                        >
                            FOREIGN
                        </SecondaryButton>
                    </div>
                </div>

                {selectedRegion && (
                    <div
                        className="border border-gray-300 rounded-lg p-4 bg-white m-0"
                        style={{ margin: 0 }}
                    >
                        {selectedRegion === "foreign" && (
                            <>
                                <InputLabel
                                    htmlFor="foreign_address"
                                    value="Foreign Address"
                                />
                                <textarea
                                    id="foreign_address"
                                    value={data.foreign_address}
                                    onChange={(e) =>
                                        setData(
                                            "foreign_address",
                                            e.target.value
                                        )
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                />
                                <InputError
                                    message={errors.foreign_address}
                                    className="mt-2"
                                />
                            </>
                        )}

                        {selectedRegion === "india" && (
                            <div className="flex flex-col gap-4">
                                <div>
                                    <InputLabel
                                        htmlFor="address_line_1"
                                        value="Address Line 1"
                                        required
                                    />
                                    <TextInput
                                        id="address_line_1"
                                        value={data.address_line_1}
                                        onChange={(e) =>
                                            setData(
                                                "address_line_1",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.address_line_1}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="address_line_2"
                                        value="Address Line 2"
                                    />
                                    <TextInput
                                        id="address_line_2"
                                        value={data.address_line_2}
                                        onChange={(e) =>
                                            setData(
                                                "address_line_2",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.address_line_2}
                                        className="mt-2"
                                    />
                                </div>

                                <SelectDropdown
                                    id="country_id"
                                    name="country_id"
                                    label="Country"
                                    value={data.country_id}
                                    onChange={setData}
                                    apiEndpoint="/api/getCountry"
                                    error={errors.country_id}
                                />

                                <SelectDropdown
                                    id="state_id"
                                    name="state_id"
                                    label="States"
                                    value={data.state_id}
                                    onChange={setData}
                                    apiEndpoint="/api/getState"
                                    error={errors.state_id}
                                />

                                <SelectDropdown
                                    id="city_id"
                                    name="city_id"
                                    label="City"
                                    value={data.city_id}
                                    onChange={setData}
                                    apiEndpoint="/api/getCity"
                                    error={errors.city_id}
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    {alert && (
                        <p
                            className={`text-sm ${
                                successMessage
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {successMessage || errorMessage}
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
}
