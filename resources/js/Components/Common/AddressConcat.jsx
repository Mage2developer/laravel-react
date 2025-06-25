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
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        const loadLocation = async () =>
            Promise.all([
                getCityName(city_id),
                getStateName(state_id),
                getCountryName(country_id),
            ]).then(([city, state, country]) => {
                setCity(city);
                setState(state);
                setCountry(country);
                setLoaded(true);
            });
        loadLocation();
    }, [city_id, state_id, country_id, setCity, setState, setCountry]);

    if (!loaded) return <span>Loading address...</span>;

    const address = `${address_line_1} ${
        address_line_2 ? ", " + address_line_2 : ""
    }`;

    const fullAddress = `${address}, ${city ? city + ", " : ""} ${
        state ? state + ", " : ""
    } ${country ? country : ""}`;

    return <span>{fullAddress}</span>;
};

export default AddressConcat;
