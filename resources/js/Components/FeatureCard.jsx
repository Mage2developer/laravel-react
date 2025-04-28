import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="p-3 mt-1 rounded-xl bg-violet-400 bg-opacity-20">
                {icon}
            </div>
            <div>
                <h3 className="mb-2 text-2xl font-semibold text-neutral-500">{title}</h3>
                <p className="leading-relaxed text-neutral-400">{description}</p>
            </div>
        </div>
    );
};