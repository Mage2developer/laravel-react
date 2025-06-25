import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateContactDetailsForm({ userId, className = "" }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("india");

    const [addressData, setAddressData] = useState({
        countryData: [],
        stateData: [],
        cityData: [],
        enableState: true,
        enableCity: true
    });

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
        if (alert) {
            const timeout = setTimeout(() => {
                setAlert(false);
                setSuccessMessage("");
                setErrorMessage("");
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [alert]);

    const fetchData = async (userId) => {
        try {
            const response = await axios.get(`/currentProfile/${userId}`);
            const contact = response.data.profile.user_contact_detail;

            setData(contact);
            setData('user_id', userId);

            console.log(contact);

            setAddressData(prevState => ({
                ...prevState,
                enableState: contact.country_id === 0,
                enableCity: contact.state_id === 0
            }));

        } catch (error) {
            console.log('AJAX call error: ', error);
        }
    };

    const fetchCountryData = async() => {
        axios
            .get("/api/getCountry")
            .then((res) => {
                const options = formatDropdownOptions(res.data?.data);

                setAddressData(prevState => ({
                    ...prevState,
                    countryData: options
                }));
            })
            .catch((err) => console.error("Error fetching user data", err));
    };

    const fetchStateData = async (countryId) => {
        axios
            .get(`/api/getState/${countryId}`)
            .then((res) => {
                const options = formatDropdownOptions(res.data?.data);

                setAddressData(prevState => ({
                    ...prevState,
                    stateData: options,
                    enableState: options.length === 0
                }));
            })
            .catch((err) => console.error("Error fetching user data", err));
    };

    const fetchCityData = async (stateId) => {
        axios
            .get(`/api/getCity/${stateId}`)
            .then((res) => {
                const options = formatDropdownOptions(res.data?.data);

                setAddressData(prevState => ({
                    ...prevState,
                    cityData: options,
                    enableCity: options.length === 0
                }));
            })
            .catch((err) => console.error("Error fetching user data", err));
    };

    useEffect(() => {
        fetchData(userId);
    }, [userId]);

    useEffect(() => {
        fetchCountryData();
    }, []);

    useEffect(() => {
        if (data.country_id)
            fetchStateData(data.country_id);
    }, [data.country_id]);

    useEffect(() => {
        if (data.state_id)
            fetchCityData(data.state_id);
    }, [data.state_id]);

    function formatDropdownOptions(options = []) {
        return options.map((option) => (
            {
                label: option.city_name || option.state_name || option.country_name,
                value: option.id,
            }
        ));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie");
            const res = await axios.patch("/userContactDetail", data);
            if (res.data.success) {
                setSuccessMessage(res.data.message);
                await axios
                    .get(`/currentProfile/${userId}`)
                    .then((res) => {
                        setData(res.data.profile.user_contact_detail)
                        setData("user_id", userId);
                    });
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

    const handleCountryChange = (e) => {
        const countryId = e.target.value;
        setData('country_id', countryId);
        setData('state_id', '');
        setData('city_id', '');

        setAddressData(prevState => ({
            ...prevState,
            enableState: countryId === '',
            enableCity: true
        }));

        if (countryId) {
            fetchStateData(countryId);
        }
    };

    const handleStateChange = (e) => {
        const stateId = e.target.value;
        setData('state_id', stateId);
        setData('city_id', '');

        setAddressData(prevState => ({
            ...prevState,
            enableCity: stateId === ''
        }));

        if (stateId) {
            fetchCityData(stateId);
        }
    };

    return (
        <section className={className}>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="mobile_number" value="Mobile Number" required />
                    <TextInput
                        id="mobile_number"
                        value={data.mobile_number}
                        required
                        onChange={(e) => setData("mobile_number", e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.mobile_number} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="father_mobile_number" value="Father's Mobile Number" />
                    <TextInput
                        id="father_mobile_number"
                        value={data.father_mobile_number ?? ''}
                        onChange={(e) => setData("father_mobile_number", e.target.value) }
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors.father_mobile_number} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="native_address" value="Native Address" />
                    <textarea
                        id="native_address"
                        value={data.native_address}
                        onChange={(e) => setData("native_address", e.target.value) }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                        focus:ring-indigo-500 text-sm font-medium text-gray-700"
                    />
                    <InputError message={errors.native_address} className="mt-2" />
                </div>

                {/* Tab Section for Address */}
                <div className="mt-4">
                    <InputLabel value="Current Address" className="mb-2" />

                    {/* Tabs */}
                    <div className="flex">
                        {["india", "foreign"].map((region) => (
                            <button
                                key={region}
                                type="button"
                                onClick={() => setSelectedRegion(region)}
                                className={`px-4 py-2 text-sm font-semibold capitalize focus:outline-none transition-all duration-200
                                    ${
                                        selectedRegion === region
                                            ? "border-b-2 border-red-600 text-red-600"
                                            : "border-b-2 border-white text-gray-500 hover:text-red-600"
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                {selectedRegion && (
                    <div className="border border-gray-300 rounded-lg p-4 bg-white">
                        {selectedRegion === "foreign" && (
                            <>
                                <InputLabel htmlFor="foreign_address" value="Foreign Address" required />
                                <textarea
                                    id="foreign_address"
                                    value={data.foreign_address ?? ''}
                                    onChange={(e) =>
                                        setData("foreign_address", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                />
                                <InputError message={errors.foreign_address} className="mt-2" />
                            </>
                        )}

                        {selectedRegion === "india" && (
                            <div className="flex flex-col gap-4">
                                <div>
                                    <InputLabel htmlFor="address_line_1" value="Address Line 1" required />
                                    <TextInput
                                        id="address_line_1"
                                        value={data.address_line_1}
                                        onChange={(e) => setData("address_line_1", e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.address_line_1} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="address_line_2" value="Address Line 2" />
                                    <TextInput
                                        id="address_line_2"
                                        value={data.address_line_2}
                                        onChange={(e) => setData("address_line_2", e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.address_line_2} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="country_id" value="Country" required/>
                                    <select
                                        id="country_id"
                                        name="country_id"
                                        value={data.country_id}
                                        onChange={handleCountryChange}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                                        focus:ring-indigo-500 text-sm font-medium text-gray-700 mt-1 block w-full"
                                    >
                                        <option key="" value="">Select...</option>
                                        {addressData.countryData.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.country_id} className="mt-2"/>
                                </div>

                                <div>
                                    <InputLabel htmlFor="state_id" value="State" required/>
                                    <select
                                        id="state_id"
                                        name="state_id"
                                        value={data.state_id}
                                        onChange={handleStateChange}
                                        disabled={addressData.enableState}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                                        focus:ring-indigo-500 text-sm font-medium text-gray-700 mt-1 block w-full"
                                    >
                                        <option key="" value="">Select...</option>
                                        {addressData.stateData.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.state_id} className="mt-2"/>
                                </div>

                                <div>
                                    <InputLabel htmlFor="city_id" value="City" required/>
                                    <select
                                        id="city_id"
                                        name="city_id"
                                        value={data.city_id}
                                        onChange={(e) => setData('city_id', e.target.value)}
                                        disabled={addressData.enableCity}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500
                                        focus:ring-indigo-500 text-sm font-medium text-gray-700 mt-1 block w-full"
                                    >
                                        <option key="" value="">Select...</option>
                                        {addressData.cityData.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.city_id} className="mt-2"/>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    {alert && (
                        <p className={`text-sm ${successMessage ? "text-green-600" : "text-red-600"}`}>
                            {successMessage || errorMessage}
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
}
