import React from "react";

const YesNoSelect = ({ onChange, className = '', ...props }) => {
    return (
        <select
            {...props}
            onChange={(e) => onChange(e.target.value)}
            className={"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700 " +
                className}
        >
            <option value="">-- Please select --</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    );
};

export default YesNoSelect;
