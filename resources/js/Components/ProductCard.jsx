import React from "react";

function ProductCard({ product }) {
    return (
        <article
            className="p-5 rounded-xl transition-all cursor-pointer bg-white bg-opacity-10 duration-[0.3s] ease-[cubic-bezier(0.37,0.01,0,0.98)] hover:transform hover:scale-[1.02]"
        >
            <figure className="overflow-hidden relative pt-96 mb-5 rounded-lg">
                <img
                    className="object-cover overflow-hidden absolute top-0 left-0 rounded-lg aspect-square size-full"
                    src={product.image}
                    alt={product.name}
                />
            </figure>
            <h2 className="mb-2.5 text-2xl font-medium leading-tight">
                {product.name}
            </h2>
            {product.description && (
                <p className="mb-4 text-base leading-snug text-white text-opacity-60">
                    {product.description}
                </p>
            )}
            <p className="text-xl font-medium text-violet-400">
                {product.price}
            </p>
        </article>
    );
}

export default ProductCard;