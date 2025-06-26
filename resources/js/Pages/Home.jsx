import React, {lazy, Suspense} from "react";
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSlider from "@/Components/Home/HeroSlider";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecentlyCreatedProfiles = lazy(() => import('@/Components/Home/RecentlyCreatedProfiles'));
const DiscoverTheBenefits = lazy(() => import('@/Components/Home/DiscoverTheBenefits'));
const DiscoverYourPerfect = lazy(() => import('@/Components/Home/DiscoverYourPerfect'));

function Home({latestProfile}) {
    return (
        <GuestLayout>
            <Head>
                <title>{"Valand, Vanand, Nai, Nayi, Sen Samaj Matrimony: Find Your Perfect Match"}</title>
                <meta name="description"
                      content="Connect with eligible Valand brides and grooms for marriage. Your trusted Valand matrimony site with thousands of verified profiles from Gujarat, India and worldwide. Register Now!"/>
                <meta name="keywords"
                      content="Valand Vivah, Valand Shaadi, Valand Wedding, Valand Matrimony, Hindu Valand Matrimony, Best Valand Matrimonial Site, Best Valand Matrimony in Gujarat, Best Valand Matrimony in India, Valand Matrimony in World, Find Valand partner"/>
                {/* Add other meta tags as needed */}
                <meta property="og:title"
                      content="Valand, Vanand, Nai, Nayi, Sain Matrimony: Find Your Perfect Match - Vanand Vivah"/>
                <meta property="og:description" content="Connect with eligible Valand brides and grooms for marriage. Your trusted Valand matrimony site with thousands of verified profiles from Gujarat, India and worldwide. Register Now!"/>
                <link rel="canonical" href="https://vanandvivah.com/"/>
            </Head>
            <div className="w-full min-h-screen text-white bg-white">

                {/* Hero Slider Component Start */}
                <HeroSlider/>
                {/* Hero Slider Component End */}

                <Suspense fallback={<div>Loading...</div>}>
                    <DiscoverYourPerfect/>
                    <RecentlyCreatedProfiles latestProfile={latestProfile}/>
                    <DiscoverTheBenefits/>
                </Suspense>

            </div>
        </GuestLayout>
    );
}

export default Home;
