import React from "react";

export const Button = ({
    variant = "red",
    children,
    className = "",
    ...props
}) => {
    const baseStyles = "px-4 py-1.5 text-sm font-medium rounded-lg";
    const variantStyles = {
        outline: "text-white bg-transparent border border-white border-solid",
        solid: "text-black bg-violet-400 border-[none]",
        red: "text-white bg-[#ff3131] hover:bg-[#880000] text-xl",
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
