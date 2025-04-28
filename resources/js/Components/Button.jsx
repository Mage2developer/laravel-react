import React from "react";

export const Button = ({
    variant = "solid",
    children,
    className = "",
    ...props
}) => {
    const baseStyles = "px-4 py-1.5 text-sm font-medium rounded-lg";
    const variantStyles = {
        outline: "text-white bg-transparent border border-white border-solid",
        solid: "text-black bg-violet-400 border-[none]",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};