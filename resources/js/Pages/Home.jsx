import React, { lazy, Suspense } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSlider from "@/Components/Home/HeroSlider";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecentlyCreatedProfiles = lazy(() => import('@/Components/Home/RecentlyCreatedProfiles'));
const DiscoverTheBenefits = lazy(() => import('@/Components/Home/DiscoverTheBenefits'));
const DiscoverYourPerfect = lazy(() => import('@/Components/Home/DiscoverYourPerfect'));

function Home({ latestProfile }) {
    return (
        <GuestLayout>
            <Head title="Valand, Vanand, Nai, Nayi, Sen Samaj Matrimony: Find Your Perfect Match" />
            <div className="w-full min-h-screen text-white bg-white">

                {/* Hero Slider Component Start */}
                <HeroSlider />
                {/* Hero Slider Component End */}

                <Suspense fallback={<div>Loading...</div>}>
                    <DiscoverYourPerfect />
                    <RecentlyCreatedProfiles latestProfile={latestProfile} />
                    <DiscoverTheBenefits />
                </Suspense>

            </div>
        </GuestLayout>
    );
}

export default Home;
