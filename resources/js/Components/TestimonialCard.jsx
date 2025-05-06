import React from "react";

export const TestimonialCard = ({ image, quote, name, role }) => {
    return (
        <div className="flex flex-col items-center p-8 text-center rounded-2xl bg-violet-400 bg-opacity-10 flex-[0_0_calc(33.33%_-_16px)] max-sm:w-full">
            <img
                className="object-cover overflow-hidden mb-5 w-20 h-20 rounded-full border-violet-400 border-solid aspect-square border-[3px]"
                src={image}
                alt={`${name}'s testimonial`}
            />
            <p className="mb-5 text-base leading-relaxed text-black">{quote}</p>
            <div>
                <h4 className="mb-1 text-lg font-semibold text-black">{name}</h4>
                <p className="text-sm text-black">{role}</p>
            </div>
        </div>
    );
};
