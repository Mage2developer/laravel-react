// components/SelectDropdown.jsx
import React, { useEffect, useState } from "react";
import SelectBox from "@/Components/SelectBox";
import axios from "axios";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function SelectDropdown({
    id,
    name,
    label,
    value,
    onChange,
    apiEndpoint,
    required = false,
    className = "",
    error = "",
}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios
            .get(apiEndpoint)
            .then((res) => {
                const list = res.data?.message || res.data;
                const formattedOptions = list.map((item) => ({
                    label:
                        item.city_name || item.state_name || item.country_name,
                    value: item.id,
                }));
                setOptions(formattedOptions);
            })
            .catch((err) => {
                console.error(
                    `Failed to fetch options from ${apiEndpoint}`,
                    err
                );
            });
    }, [apiEndpoint]);

    return (
        <div className={className}>
            {label && (
                <InputLabel htmlFor={id} value={label} required={required} />
            )}

            <SelectBox
                id={id}
                name={name}
                value={value}
                required={required}
                onChange={onChange}
                options={options}
                className="mt-1 block w-full"
            />

            <InputError message={error} className="mt-2" />
        </div>
    );
}
