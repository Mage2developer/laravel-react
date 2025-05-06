import * as React from "react";
import { Link } from "@inertiajs/react";
import { LuHeartHandshake } from "react-icons/lu";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { TestimonialCard } from "@/Components/TestimonialCard";
import { LatestProfileCard } from "@/Components/LatestProfileCard";
import { FeatureCard } from "@/Components/FeatureCard";
import { Button } from "@/Components/Button";
import HeroSlider from "@/Components/HeroSlider";

function Home({ latestProfile }) {
    // const [searchText, setSearchText] = useState("");
    // const [activeIndex, setActiveIndex] = useState(null);

    console.log(latestProfile);

    // const testimonials = [
    //     {
    //         name: "Sarah Johnson",
    //         role: "Marketing Director",
    //         image: "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
    //         quote: "Vanand Vivah made my search for a partner effortless. I found my perfect match within weeks.",
    //     },
    //     {
    //         name: "Michael Chen",
    //         role: "CEO",
    //         image: "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
    //         quote: "Vanand Vivah made my search for a partner effortless. I found my perfect match within weeks.",
    //     },
    //     {
    //         name: "Emma Davis",
    //         role: "Product Manager",
    //         image: "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
    //         quote: "Vanand Vivah made my search for a partner effortless. I found my perfect match within weeks.",
    //     },
    // ];

    const features = [
        {
            icon: "⚡",
            title: "Key Features",
            description:
                "Create your profile and start journey towards finding a lifelong partner today",
        },
        {
            icon: "🎨",
            title: "Advanced Search for Ideal Matches",
            description: "Easily filter profiles based on your preferences",
        },
        {
            icon: "🚀",
            title: "Seamless Messaging System",
            description: "Communicate with potential matches effortlessly",
        },
    ];

    return (
        <GuestLayout>
            <div className="w-full min-h-screen text-white bg-white">
                <div className="overflow-hidden relative mt-15 h-[600px]">
                    <HeroSlider />
                </div>

                <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
                    <div className="flex items-center gap-5 max-md:flex-col">
                        <div className="w-6/12 max-md:w-full">
                            <img
                                src="https://www.varmalla.com/wp-content/uploads/2023/11/Destination-Wedding.jpg"
                                className="object-cover overflow-hidden w-full rounded-xl aspect-square shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                alt="Feature showcase"
                            />
                        </div>
                        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-5xl font-semibold leading-tight max-sm:text-3xl text-neutral-500 capitalize">
                                    Discover your perfect match with confidence
                                </h2>
                                <p className="mb-4 text-lg leading-relaxed text-neutral-400">
                                    Vanand Vivah priorities your safety and
                                    privacy. Our advanced matching algorithm
                                    connects you with compatible partners.
                                </p>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 mt-1 rounded-xl bg-[#ff3131]">
                                        <AiFillSafetyCertificate size={30} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-2xl font-semibold text-neutral-500">
                                            Safety First
                                        </h3>
                                        <p className="leading-relaxed text-neutral-400">
                                            Your data is protected with
                                            top-notch security measures.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 mt-1 rounded-xl bg-[#ff3131]">
                                        <LuHeartHandshake size={30} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-2xl font-semibold text-neutral-500">
                                            Proven Success
                                        </h3>
                                        <p className="leading-relaxed text-neutral-400">
                                            Join countless couples who found
                                            love through our platform.
                                        </p>
                                    </div>
                                </div>
                                <Link href="/register">
                                    <Button
                                        className="px-8 py-4 rounded-lg transition-transform cursor-pointer border-none duration-200 ease w-fit inline"
                                        variant="red"
                                    >
                                        Create Profile
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
                    <h2 className="mb-10 text-5xl font-semibold text-center max-sm:text-3xl text-neutral-500">
                        Recently Created Profiles
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="flex gap-8 px-0 py-5 min-w-min">
                            {latestProfile.map((profile, index) => (
                                <LatestProfileCard profile={profile} />
                            ))}
                        </div>
                    </div>
                </section>

                {/*<section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">*/}
                {/*    <div className="mb-16 text-center">*/}
                {/*        <h2 className="mb-4 text-5xl font-semibold max-sm:text-3xl text-neutral-500">*/}
                {/*            What Our Clients Say*/}
                {/*        </h2>*/}
                {/*        <p className="mx-auto my-0 text-lg max-w-[600px] text-neutral-400">*/}
                {/*            Hear from our satisfied customers about their*/}
                {/*            experiences*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*    <div className="relative px-0 py-5">*/}
                {/*        <div className="flex overflow-x-hidden gap-6 px-0 py-5 max-sm:flex-col">*/}
                {/*            {testimonials.map((testimonial, index) => (*/}
                {/*                <TestimonialCard*/}
                {/*                    key={index}*/}
                {/*                    image={testimonial.image}*/}
                {/*                    quote={testimonial.quote}*/}
                {/*                    name={testimonial.name}*/}
                {/*                    role={testimonial.role}*/}
                {/*                />*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*        <div className="flex gap-3 justify-center mt-8">*/}
                {/*            {[1, 2, 3].map((item) => (*/}
                {/*                <button*/}
                {/*                    key={item}*/}
                {/*                    className="w-3 h-3 rounded-full cursor-pointer border-none duration-300 ease transition-colors"*/}
                {/*                    style={{*/}
                {/*                        backgroundColor:*/}
                {/*                            item === 1*/}
                {/*                                ? "rgb(172, 126, 244)"*/}
                {/*                                : "rgb(51, 51, 51)",*/}
                {/*                    }}*/}
                {/*                    onClick={() => setActiveIndex(item)}*/}
                {/*                />*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className="px-10 py-0 mx-auto my-24 max-w-[1200px]">
                    <div className="flex items-center gap-5 max-md:flex-col">
                        <div className="w-6/12 max-md:w-full">
                            <div className="flex flex-col gap-8">
                                <h2 className="text-5xl font-bold leading-tight max-sm:text-4xl text-neutral-500">
                                    Discover the Benefits of Choosing Vanand
                                    Vivah for Your Matchmaking Journey
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
                            <img
                                src="https://www.varmalla.com/wp-content/uploads/2024/02/hindu-wedding-mandap-athens-greece-1-65bdc8ccafcea.webp"
                                className="object-cover overflow-hidden w-full rounded-3xl transition-transform aspect-square duration-300 ease hover:transform hover:scale-105 shadow-[30px_30px_60px_rgba(0,0,0,0.3)]"
                                alt="Digital presence showcase"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}

export default Home;
