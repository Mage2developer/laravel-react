import React from "react";

const SelectBox = ({
    value,
    onChange,
    name,
    options,
    className = "",
    ...props
}) => {
    return (
        <select
            {...props}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700 " +
                className
            }
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
