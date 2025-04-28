import React from "react";

export const ContentSection = ({ children, className = "" }) => {
    return (
        <div className={`flex gap-5 max-md:flex-col ${className}`}>{children}</div>
    );
};

export const ContentColumn = ({ children, className = "" }) => {
    return (
        <div className={`w-6/12 max-md:ml-0 max-md:w-full ${className}`}>
            {children}
        </div>
    );
};