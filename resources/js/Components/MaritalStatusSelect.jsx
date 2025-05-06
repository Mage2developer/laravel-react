import React from "react";

const MaritalStatusSelect = ({ value, onChange, name, className = '', ...props }) => {
    return (
        <select
            {...props}
            onChange={(e) => onChange(e.target.value)}
            className={"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700 " +
                className}
        >
            <option value="">-- Please select --</option>
            <option value="0">Single</option>
            <option value="1">Married</option>
            <option value="2">Divorced</option>
        </select>
    );
};

export default MaritalStatusSelect;
