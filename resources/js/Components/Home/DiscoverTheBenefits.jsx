import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FeatureCard } from "../FeatureCard";
import { FaRegUserCircle } from "react-icons/fa";
import { MdImageSearch, MdRocketLaunch } from "react-icons/md";

function DiscoverTheBenefits() {
    const features = [
        {
            icon: <FaRegUserCircle size={30} />,
            title: "Easy to Use",
            description:
                "Create your profile and start journey towards finding a lifelong partner today",
        },
        {
            icon: <MdImageSearch size={30} />,
            title: "Advanced Search for Ideal Matches",
            description: "Easily filter profiles based on your preferences",
        },
        {
            icon: <MdRocketLaunch size={30} />,
            title: "Seamless System",
            description: "Communicate with potential matches effortlessly",
        },
    ];
    return (
        <section className="px-10 py-0 mx-auto my-24 max-w-[1200px]">
            <div className="flex items-center gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:w-full">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-5xl font-bold leading-tight max-sm:text-4xl text-black">
                            Discover the Benefits of Choosing Vanand Vivah
                        </h2>
                        <div className="flex flex-col gap-6">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <LazyLoadImage
                        alt="Vanand Vivah Digital Presence Showcase"
                        src="/images/home/box/hindu-wedding-mandap.webp"
                        effect="blur"
                        className="object-cover overflow-hidden w-full rounded-xl aspect-square shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                    />
                </div>
            </div>
        </section>
    );
}

export default DiscoverTheBenefits;
