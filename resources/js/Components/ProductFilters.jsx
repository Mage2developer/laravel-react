import React from "react";

function ProductFilters({
    categories,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
}) {
    return (
        <div className="flex justify-between items-center p-5 mb-10 rounded-xl border border-solid bg-white bg-opacity-10 border-neutral-700">
            <div className="flex gap-2.5">
                {categories.map((category) => (
                    <button
                        className="px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer border-[none] duration-[0.3s] ease-[cubic-bezier(0.37,0.01,0,0.98)]"
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            backgroundColor:
                                selectedCategory === category
                                    ? "rgb(172, 126, 244)"
                                    : "rgba(255, 255, 255, 0.1)",
                            color:
                                selectedCategory === category
                                    ? "rgb(0, 0, 0)"
                                    : "rgb(255, 255, 255)",
                        }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <select
                className="px-4 py-2 text-sm font-medium text-white rounded-lg border border-solid cursor-pointer bg-white bg-opacity-10 border-neutral-700"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort products"
            >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
            </select>
        </div>
    );
}

export default ProductFilters;
