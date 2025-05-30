import React from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSlider from "@/Components/Home/HeroSlider";
import "react-lazy-load-image-component/src/effects/blur.css";
import DiscoverYourPerfect from "@/Components/Home/DiscoverYourPerfect";
import RecentlyCreatedProfiles from "@/Components/Home/RecentlyCreatedProfiles";
import DiscoverTheBenefits from "@/Components/Home/DiscoverTheBenefits";

function Home({ latestProfile }) {
    return (
        <GuestLayout>
            <Head title="Vanand, Nai, Nayi, Sain Matrimony: Find Your Perfect Match" />
            <div className="w-full min-h-screen text-white bg-white">
                {/* Hero Slider Component Start */}
                <HeroSlider />
                {/* Hero Slider Component End */}

                {/* DiscoverYourPerfect Component Start */}
                <DiscoverYourPerfect />
                {/* DiscoverYourPerfect Component End */}

                {/* RecentlyCreatedProfiles Component Start */}
                <RecentlyCreatedProfiles latestProfile={latestProfile} />
                {/* RecentlyCreatedProfiles Component End */}

                {/* DiscoverTheBenefits Component Start */}
                <DiscoverTheBenefits />
                {/* DiscoverTheBenefits Component End */}
            </div>
        </GuestLayout>
    );
}

export default Home;
