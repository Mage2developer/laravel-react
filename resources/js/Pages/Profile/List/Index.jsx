"use client";
import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Banner from "@/Components/Banner";
import ProductFilters from "@/Components/ProductFilters";
import ProductGrid from "@/Components/ProductGrid";
import { Head } from "@inertiajs/react";

function Index() {
    const [bannerImage, setBannerImage] = useState(
        "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    );
    const [bannerTitle, setBannerTitle] = useState("Premium Collection");
    const [bannerDescription, setBannerDescription] = useState(
        "Discover our curated selection of modern essentials",
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
            price: "$129",
            image:
                "https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg",
        },
        {
            id: 2,
            name: "Ergonomic Chair",
            price: "$299",
            image:
                "https://images.pexels.com/photos/6044923/pexels-photo-6044923.jpeg",
        },
        {
            id: 3,
            name: "Wireless Speaker",
            price: "$199",
            image:
                "https://images.pexels.com/photos/18236755/pexels-photo-18236755.jpeg",
        },
        {
            id: 4,
            name: "Smart Watch",
            price: "$249",
            image:
                "https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg",
        },
        {
            id: 5,
            name: "Laptop Stand",
            price: "$79",
            image:
                "https://images.pexels.com/photos/7454629/pexels-photo-7454629.jpeg",
        },
        {
            id: 6,
            name: "Mechanical Keyboard",
            price: "$159",
            image: "https://images.pexels.com/photos/102100/pexels-photo-102100.jpeg",
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
            <Head title="Members" />
            <div className="w-full min-h-screen text-white bg-white">
                <main className="min-h-screen text-white bg-black">
                    <Banner
                        image={bannerImage}
                        title={bannerTitle}
                        description={bannerDescription}
                    />

                    <section className="px-10 py-0 mx-auto my-0 max-w-[1200px]">
                        <h1 className="mb-8 text-5xl font-medium tracking-tighter text-center">
                            Featured Products
                        </h1>

                        <ProductFilters
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        <ProductGrid products={getFilteredAndSortedProducts()} />
                    </section>
                </main>
            </div>
        </GuestLayout>
    );
}

export default Index;
