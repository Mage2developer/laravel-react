// components/AddressConcat.jsx
import React, { useEffect, useState } from "react";
import {
    getCityName,
    getStateName,
    getCountryName,
} from "@/Utils/locationUtils";

const AddressConcat = ({ contact }) => {
    const { address_line_1, address_line_2, city_id, state_id, country_id } =
        contact;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadLocationData = async () => {
            await Promise.all([
                getCityName(city_id),
                getStateName(state_id),
                getCountryName(country_id),
            ]);
            setLoaded(true);
        };
        loadLocationData();
    }, []);

    if (!loaded) return <span>Loading address...</span>;

    const fullAddress = [
        address_line_1,
        address_line_2,
        getCityName(city_id),
        getStateName(state_id),
        getCountryName(country_id),
    ]
        .filter(Boolean)
        .join(", ");

    return <span>{fullAddress}</span>;
};

export default AddressConcat;
