import React from "react";

const SelectBox = ({
    value,
    onChange,
    name,
    options = [],
    className = "",
    placeholder = "Select...",
    required = false,
    ...props
}) => {
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        console.log(`Selected ${name}:`, selectedValue);
        onChange(name, selectedValue); // Pass value back to parent
    };

    const safeOptions = Array.isArray(options)
        ? options
        : Object.entries(options).map(([value, label]) => ({
              value: String(value),
              label,
          }));

    return (
        <select
            {...props}
            value={String(value || "")}
            onChange={handleChange}
            required={required}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm font-medium text-gray-700 " +
                className
            }
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {safeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
