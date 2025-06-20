import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import YouTube from "react-youtube";
import Setting from "@/Utils/Setting";

function HowToCreateProfile() {
    const options = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0
        },
    };

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
                                Click the Register button and fill in all registration details. Once the account is
                                registered, you'll need to verify it with an administrator.
                            </p>
                            <YouTube videoId={Setting.REGISTER_YT_VIDEO_ID} opts={options} className="video-container" />
                        </div>

                        {/* Step 2 */}
                        <div id="profile-complete" className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 2:</div>
                            <p>
                                Once your account has been verified by the administrator, you can log in with your
                                password and complete your profile details.
                            </p>
                            <YouTube videoId={Setting.LOGIN_YT_VIDEO_ID} opts={options} className="video-container" />
                        </div>

                        {/* Step 3 */}
                        <div id="profile-explore" className="text-left text-xl max-w-2xl mx-auto space-y-4 mt-10">
                            <div className="font-bold">👉 Step 3:</div>
                            <p>
                                Once your profile is completed, you can click on the Profile menu and search by name or
                                other available options.
                            </p>
                            <YouTube videoId={Setting.SEARCH_YT_VIDEO_ID} opts={options} className="video-container" />
                        </div>
                    </section>
                </div>
            </div>
        </GuestLayout>
    );
}

export default HowToCreateProfile;
