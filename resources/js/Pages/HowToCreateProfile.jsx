"use client";
import React, { useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

const videoSources = [
    "/images/how-to-create-profile/gif/register-process.mp4",
    "/images/how-to-create-profile/gif/login-process.mp4",
    "/images/how-to-create-profile/gif/profile-search-process.mp4",
];

function HowToCreateProfile() {
    const videoRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5, // Trigger when 50% of video is visible
            }
        );

        videoRefs.current.forEach((video) => {
            if (video) {
                observer.observe(video);
            }
        });

        // Cleanup
        return () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    observer.unobserve(video);
                }
            });
        };
    }, []);

    return (
        <GuestLayout>
            <Head title="How To Create Profile" />
            <div className="min-h-[450px] flex items-center justify-center my-12 mt-5">
                <div className="max-w-4xl w-full mx-auto backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-md border border-black/10">
                    <section className="rounded-2xl sm:p-10 w-full text-center">
                        <h1 className="text-4xl font-bold text-[#ff3131] mb-6 sm:text-5xl">
                            How To Create Profile?
                        </h1>
                        <p className="text-lg text-gray-700 mb-10">
                            Follow all the steps below to create your profile.
                        </p>

                        {/* Step 1 */}
                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4">
                            <div className="font-bold">👉 Step 1:</div>
                            <p>
                                Click the Register button and fill in all
                                registration details. Once the account is
                                registered, you'll need to verify it with an
                                administrator.
                            </p>
                            <video
                                ref={(el) => (videoRefs.current[0] = el)}
                                src={videoSources[0]}
                                autoPlay
                                loop
                                muted
                                controls
                                playsInline
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>

                        {/* Step 2 */}
                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 2:</div>
                            <p>
                                Once your account has been verified by the
                                administrator, you can log in with your password
                                and complete your profile details.
                            </p>
                            <video
                                ref={(el) => (videoRefs.current[1] = el)}
                                src={videoSources[1]}
                                loop
                                muted
                                controls
                                playsInline
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>

                        {/* Step 3 */}
                        <div className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 3:</div>
                            <p>
                                Once your profile is completed, you can click on
                                the Profile menu and search by name or other
                                available options.
                            </p>
                            <video
                                ref={(el) => (videoRefs.current[2] = el)}
                                src={videoSources[2]}
                                loop
                                muted
                                controls
                                playsInline
                                className="w-full rounded-lg border border-gray-300"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}

export default HowToCreateProfile;
