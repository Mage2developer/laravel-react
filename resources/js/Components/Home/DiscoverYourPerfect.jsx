import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LuHeartHandshake } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../Button";
import { Link } from "@inertiajs/react";

function DiscoverYourPerfect() {
    return (
        <section className="px-3 sm:px-10 py-0 mx-auto my-6 sm:my-10 max-w-[1200px]">
            <div className="flex items-center gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:w-full">
                    <LazyLoadImage
                        alt="Feature showcase"
                        src="/images/home/box/destination-wedding.webp"
                        effect="blur"
                        className="object-cover overflow-hidden w-full rounded-xl aspect-square shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                    />
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col gap-4 sm:gap-6 items-center sm:items-start">
                        <h2 className="text-5xl font-semibold leading-tight max-sm:text-3xl text-black capitalize">
                            Discover your perfect match with confidence
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed text-black">
                            Vanand Vivah priorities your safety and privacy. Our
                            advanced matching algorithm connects you with
                            compatible partners.
                        </p>
                        <div className="flex gap-4 items-start">
                            <div className="p-2 mt-1 rounded-xl bg-[#ff3131]">
                                <AiFillSafetyCertificate size={30} />
                            </div>
                            <div>
                                <h3 className="mb-2 text-2xl font-semibold text-black">
                                    Safety First
                                </h3>
                                <p className="leading-relaxed text-black">
                                    Your data is protected with top-notch
                                    security measures.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-2 mt-1 rounded-xl bg-[#ff3131]">
                                <LuHeartHandshake size={30} />
                            </div>
                            <div>
                                <h3 className="mb-2 text-2xl font-semibold text-black">
                                    Proven Success
                                </h3>
                                <p className="leading-relaxed text-black">
                                    Join countless couples who found love
                                    through our platform.
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
    );
}

export default DiscoverYourPerfect;
