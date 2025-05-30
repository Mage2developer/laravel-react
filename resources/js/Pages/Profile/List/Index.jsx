"use client";
import React, {lazy, Suspense, useState} from "react";
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ProfileBanner from "@/Components/ProfileBanner";

const ProfileGrid = lazy(() => import('@/Components/ProfileGrid'));
const ProfileFilters = lazy(() => import('@/Components/ProfileFilters'));

function Index({ profiles }) {
    const bannerImage = "images/home/slider/wedding-banner.webp";
    const bannerTitle = "Profile";
    const bannerDescription = "Discover our curated selection of modern essentials";

    const [profilesData, setProfilesData] = useState(profiles);

    const handleProfileFilters = (filters) => {
        const filteredItems = profiles.filter(profile => {
            const { name, sex, marital_status, min_income, max_income } = filters;

            if (name && !profile.name.toLowerCase().includes(name.toLowerCase())) {
                return false;
            }

            if (sex && profile.user_personal_detail.sex !== parseInt(sex)) {
                return false;
            }

            if (marital_status && profile.user_personal_detail.marital_status !== parseInt(marital_status)) {
                return false;
            }

            if (min_income && parseFloat(profile.user_education_detail.personal_income) < parseFloat(min_income)) {
                return false;
            }

            if (max_income && parseFloat(profile.user_education_detail.personal_income) > parseFloat(max_income)) {
                return false;
            }

            return true;
        });
        setProfilesData(filteredItems);
    };

    return (
        <GuestLayout>
            <Head title="Profiles"/>
            <div className="w-full min-h-screen">
                <main className="min-h-screen">
                    <div>
                        <ProfileBanner image={bannerImage} title={bannerTitle} description={bannerDescription}/>
                    </div>

                    <section className="px-3 sm:px-5 px-10 py-0 mx-auto my-0 max-w-[1200px] min-h-[800px]">
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProfileFilters onFilter={handleProfileFilters} />

                            <ProfileGrid profiles={profilesData}/>
                        </Suspense>
                    </section>
                </main>
            </div>
        </GuestLayout>
    );
}

export default Index;
