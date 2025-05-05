"use client";
import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Banner from "@/Components/Banner";
import ProductFilters from "@/Components/ProductFilters";
import ProductGrid from "@/Components/ProductGrid";
import { Head } from "@inertiajs/react";
import SearchBox from "@/Components/SearchBox";

function Index() {
    const [bannerImage, setBannerImage] = useState("images/wedding-banner.jpg");
    const [bannerTitle, setBannerTitle] = useState("Profile");
    const [bannerDescription, setBannerDescription] = useState(
        "Discover our curated selection of modern essentials"
    );
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [categories, setCategories] = useState([
        "all",
        "lighting",
        "furniture",
        "audio",
        "accessories",
    ]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
        {
            id: 1,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            id: 2,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
        {
            id: 1,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://picsum.photos/id/1/200/300",
        },
        {
            id: 2,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
        {
            id: 1,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://picsum.photos/200/300/?blur",
        },
        {
            id: 2,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
        {
            id: 1,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://picsum.photos/200/300.jpg",
        },
        {
            id: 2,
            name: "Modern Desk Lamp",
            dob: "29",
            occupation: "Job",
            marital_status: "Single",
            image: "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
    ]);

    // Filter and sort products based on selected category and sort option
    const getFilteredAndSortedProducts = () => {
        let filteredProducts = products;

        // Filter by category
        if (selectedCategory !== "all") {
            // In a real app, you would filter based on product category
            // For this demo, we're just returning all products
            filteredProducts = products;
        }

        // Sort products
        return [...filteredProducts].sort((a, b) => {
            if (sortBy === "price-low") {
                return (
                    parseFloat(a.price.replace("$", "")) -
                    parseFloat(b.price.replace("$", ""))
                );
            } else if (sortBy === "price-high") {
                return (
                    parseFloat(b.price.replace("$", "")) -
                    parseFloat(a.price.replace("$", ""))
                );
            } else if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
            // Default: featured (no sorting)
            return 0;
        });
    };

    return (
        <GuestLayout>
            <Head title="Profiles" />
            <div className="w-full min-h-screen">
                <main className="min-h-screen">
                    <div>
                        <Banner
                            image={bannerImage}
                            title={bannerTitle}
                            // description={bannerDescription}
                        />
                    </div>

                    <section className="px-3` sm:px-10 py-0 mx-auto my-0 max-w-[1200px] min-h-[800px]">
                        {/* <h1 className="mb-8 text-5xl font-medium tracking-tighter text-center">
                            Featured Products
                        </h1> */}
                        <SearchBox />

                        {/* <ProductFilters
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        /> */}

                        <ProductGrid
                            products={getFilteredAndSortedProducts()}
                        />
                    </section>
                </main>
            </div>
        </GuestLayout>
    );
}

export default Index;
