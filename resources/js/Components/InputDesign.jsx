import * as React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TestimonialCard } from "./TestimonialCard";
import { ProfileCard } from "./ProfileCard";
import { FeatureCard } from "./FeatureCard";

function InputDesign() {
    const [searchText, setSearchText] = useState("");
    const [activeIndex, setActiveIndex] = useState(null);

    const profiles = [
        { name: "Alex Morgan", id: 31750448 },
        { name: "Chris Lee", id: 31750449 },
        { name: "Diana Park", id: 31750450 },
        { name: "Ethan Brown", id: 31750451 },
        { name: "Fiona Chen", id: 31750452 },
        { name: "George Smith", id: 31750453 },
        { name: "Helen Wu", id: 31750454 },
        { name: "Ian Clark", id: 31750455 },
        { name: "Julia Kim", id: 31750456 },
        { name: "Kevin Patel", id: 31750457 },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            image:
                "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
            quote:
                "The platform has transformed how we handle our digital presence. The ease of use and powerful features have made it an essential tool for our team.",
        },
        {
            name: "Michael Chen",
            role: "CEO",
            image:
                "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
            quote:
                "The platform has transformed how we handle our digital presence. The ease of use and powerful features have made it an essential tool for our team.",
        },
        {
            name: "Emma Davis",
            role: "Product Manager",
            image:
                "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
            quote:
                "The platform has transformed how we handle our digital presence. The ease of use and powerful features have made it an essential tool for our team.",
        },
    ];

    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast Performance",
            description:
                "Optimized for speed and efficiency, ensuring your website loads instantly",
        },
        {
            icon: "🎨",
            title: "Beautiful Design Tools",
            description:
                "Create stunning layouts with our intuitive design interface",
        },
        {
            icon: "🚀",
            title: "Seamless Integration",
            description: "Works perfectly with your existing tech stack and tools",
        },
    ];

    return (
        <div>
            <div className="w-full min-h-screen text-white bg-white">
                <Header />

                <div className="overflow-hidden relative mt-16 h-[600px]">
                    <div className="flex h-full transition-transform duration-500 ease-in-out">
                        <div className="relative animate-[fadeIn_0.5s_ease-in-out] flex-[0_0_100%]">
                            <img
                                src="images/wedding-banner.jpg"
                                className="object-cover overflow-hidden absolute aspect-square size-full"
                                alt="Hero background"
                            />
                            <div className="absolute top-2/4 left-2/4 px-5 py-0 w-full text-center -translate-x-2/4 -translate-y-2/4 animate-[slideUp_0.8s_ease-out] max-w-[800px]">
                                <h1 className="mb-6 text-6xl font-bold max-sm:text-4xl">
                                    Transform Your Digital Experience
                                </h1>
                                <p className="mb-8 text-xl leading-relaxed text-white text-opacity-90">
                                    Create stunning websites and applications with our powerful
                                    platform
                                </p>
                                <button className="px-8 py-4 text-lg font-medium bg-violet-400 cursor-pointer border-none rounded-[30px] hover:bg-violet-500 transition-colors duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
                    <div className="flex items-center gap-5 max-md:flex-col">
                        <div className="w-6/12 max-md:w-full">
                            <img
                                src="https://images.pexels.com/photos/31711708/pexels-photo-31711708.jpeg"
                                className="object-cover overflow-hidden w-full rounded-xl aspect-square shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                alt="Feature showcase"
                            />
                        </div>
                        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-5xl font-semibold leading-tight max-sm:text-3xl text-neutral-500">
                                    Create beautiful experiences without limits
                                </h2>
                                <p className="mb-4 text-lg leading-relaxed text-neutral-400">
                                    Build and optimize digital experiences for any platform. Our
                                    intuitive visual editor and powerful development tools make it
                                    easy to create stunning websites and applications.
                                </p>
                                <button className="px-8 py-4 text-base font-medium text-black bg-violet-400 rounded-lg transition-transform cursor-pointer border-none duration-200 ease hover:transform hover:scale-105 w-fit">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
                    <h2 className="mb-10 text-5xl font-semibold text-center max-sm:text-3xl text-neutral-500">
                        Recently Created Profiles
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="flex gap-5 px-0 py-5 min-w-min">
                            {profiles.map((profile, index) => (
                                <ProfileCard
                                    key={profile.id}
                                    image={`https://images.pexels.com/photos/${profile.id}/pexels-photo-${profile.id}.jpeg`}
                                    name={profile.name}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-10 py-0 mx-auto my-20 max-w-[1200px]">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-5xl font-semibold max-sm:text-3xl text-neutral-500">
                            What Our Clients Say
                        </h2>
                        <p className="mx-auto my-0 text-lg max-w-[600px] text-neutral-400">
                            Hear from our satisfied customers about their experiences
                        </p>
                    </div>
                    <div className="relative px-0 py-5">
                        <div className="flex overflow-x-hidden gap-6 px-0 py-5 max-sm:flex-col">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    image={testimonial.image}
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    role={testimonial.role}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3 justify-center mt-8">
                            {[1, 2, 3].map((item) => (
                                <button
                                    key={item}
                                    className="w-3 h-3 rounded-full cursor-pointer border-none duration-300 ease transition-colors"
                                    style={{
                                        backgroundColor:
                                            item === 1 ? "rgb(172, 126, 244)" : "rgb(51, 51, 51)",
                                    }}
                                    onClick={() => setActiveIndex(item)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-10 py-0 mx-auto my-24 max-w-[1200px]">
                    <div className="flex items-center gap-5 max-md:flex-col">
                        <div className="w-6/12 max-md:w-full">
                            <div className="flex flex-col gap-8">
                                <h2 className="text-5xl font-bold leading-tight max-sm:text-4xl text-neutral-500">
                                    Elevate Your Digital Presence
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
                                src="https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg"
                                className="object-cover overflow-hidden w-full rounded-3xl transition-transform aspect-square duration-300 ease hover:transform hover:scale-105 shadow-[30px_30px_60px_rgba(0,0,0,0.3)]"
                                alt="Digital presence showcase"
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default InputDesign;
