import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProfileBanner({ image, title, description }) {
    return (
        <header className="overflow-hidden relative mb-16 w-full h-[400px]">
            <LazyLoadImage
                className="object-cover overflow-hidden aspect-square size-full "
                src={image}
                alt={title}
            />

            <div className="absolute top-2/4 left-2/4 px-5 py-0 w-full text-center -translate-x-2/4 -translate-y-2/4 z-[2]">
                <h1 className="mb-5 text-5xl font-medium tracking-tighter text-white">{title}</h1>
                { <p className="mx-auto my-0 text-lg opacity-80 max-w-[600px] text-white">
                    {description}
                </p> }
            </div>
        </header>
    );
}

export default ProfileBanner;
