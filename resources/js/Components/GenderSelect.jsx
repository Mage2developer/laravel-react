import React from "react";

const GenderSelect = ({ value, onChange, name, className = '', ...props }) => {
    return (
        <select
            {...props}
            onChange={(e) => onChange(e.target.value)}
            className={"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700 " +
                className}
        >
            <option value="">-- Please select --</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
            <option value="2">Non-binary</option>
            <option value="3">Prefer not to say</option>
        </select>
    );
};

export default GenderSelect;
