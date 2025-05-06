import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="p-3 mt-1 rounded-xl bg-[#ff3131] text-white">
                {icon}
            </div>
            <div>
                <h3 className="mb-2 text-2xl font-semibold text-black">
                    {title}
                </h3>
                <p className="leading-relaxed text-black">
                    {description}
                </p>
            </div>
        </div>
    );
};
