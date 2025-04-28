import React from "react";

export const ProfileCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center p-5 rounded-xl transition-transform cursor-pointer bg-violet-400 bg-opacity-10 duration-300 ease hover:transform hover:scale-105 flex-[0_0_200px]">
            <img
                className="object-cover overflow-hidden mb-3 rounded-full border-violet-400 border-solid aspect-square border-[3px] h-[120px] w-[120px]"
                src={image}
                alt={name}
            />
            <h3 className="mb-1 text-base font-semibold text-center text-neutral-500">{name}</h3>
        </div>
    );
};