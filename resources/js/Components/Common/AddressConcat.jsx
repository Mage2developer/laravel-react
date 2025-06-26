import React, { useEffect, useState } from "react";
import {
    getCityName,
    getCountryName,
    getStateName,
} from "@/Utils/locationUtils";

const AddressConcat = ({ contact }) => {
    const { address_line_1, address_line_2, city_id, state_id, country_id } =
        contact;

    const [location, setLocation] = useState({
        city: "",
        state: "",
        country: "",
        loading: true,
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const [city, state, country] = await Promise.all([
                    getCityName(city_id),
                    getStateName(state_id),
                    getCountryName(country_id),
                ]);
                setLocation({ city, state, country, loading: false });
            } catch (error) {
                console.error("Failed to fetch location info", error);
                setLocation({
                    city: "",
                    state: "",
                    country: "",
                    loading: false,
                });
            }
        };

        fetchLocation();
    }, [city_id, state_id, country_id]);

    if (location.loading) return <span>Loading address...</span>;

    const addressParts = [
        address_line_1,
        address_line_2,
        location.city,
        location.state,
        location.country,
    ].filter(Boolean);

    return <span>{addressParts.join(", ")}</span>;
};

export default AddressConcat;
