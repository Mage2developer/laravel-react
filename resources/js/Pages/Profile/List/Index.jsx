"use client";
import React, {useState} from "react";
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ProfileBanner from "@/Components/ProfileBanner";
import ProductFilters from "@/Components/ProductFilters";
import ProfileGrid from "@/Components/ProfileGrid";
import SearchBox from "@/Components/SearchBox";

function Index({ profiles }) {
    const [profilesData, setProfilesData] = useState(profiles);

    const bannerImage = "images/wedding-banner.jpg";
    const bannerTitle = "Profile";
    const bannerDescription = "Discover our curated selection of modern essentials";

    const handleSearch = (searchTerm) => {
        const filteredResults = profiles.filter(profile =>
            profile.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProfilesData(filteredResults);
    };

    // const [selectedCategory, setSelectedCategory] = useState("all");
    // const [sortBy, setSortBy] = useState("featured");
    // const [categories, setCategories] = useState([
    //     "all",
    //     "lighting",
    //     "furniture",
    //     "audio",
    //     "accessories",
    // ]);

    // Filter and sort products based on selected category and sort option
    // const getFilteredAndSortedProfiles = () => {
    //     let filteredProfiles = profilesData;
    //
    //     // Filter by category
    //     if (selectedCategory !== "all") {
    //         // In a real app, you would filter based on product category
    //         // For this demo, we're just returning all products
    //         filteredProfiles = profilesData;
    //     }
    //
    //     // Sort products
    //     return [...filteredProfiles].sort((a, b) => {
    //         if (sortBy === "price-low") {
    //             return (
    //                 parseFloat(a.price.replace("$", "")) -
    //                 parseFloat(b.price.replace("$", ""))
    //             );
    //         } else if (sortBy === "price-high") {
    //             return (
    //                 parseFloat(b.price.replace("$", "")) -
    //                 parseFloat(a.price.replace("$", ""))
    //             );
    //         } else if (sortBy === "name") {
    //             return a.name.localeCompare(b.name);
    //         }
    //         // Default: featured (no sorting)
    //         return 0;
    //     });
    // };

    return (
        <GuestLayout>
            <Head title="Profiles"/>
            <div className="w-full min-h-screen">
                <main className="min-h-screen">
                    <div>
                        <ProfileBanner image={bannerImage} title={bannerTitle} description={bannerDescription}/>
                    </div>

                    <section className="px-3` sm:px-10 py-0 mx-auto my-0 max-w-[1200px] min-h-[800px]">
                        <SearchBox onSearch={handleSearch} />

                        {/* <ProductFilters
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        /> */}

                        <ProfileGrid profiles={profilesData}/>
                    </section>
                </main>
            </div>
        </GuestLayout>
    );
}

export default Index;
