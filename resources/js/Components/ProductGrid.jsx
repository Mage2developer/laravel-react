import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
    return (
        <div className="grid gap-8 lg:grid-cols-[repeat(3,1fr)] xs425:grid-cols-[repeat(2,1fr)] max-xs425:grid-cols-[1fr] mb-20">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;
