import React from "react";

function ProductCard({ product }) {
    return (
        <article className="text-center p-5 rounded-xl transition-all cursor-pointer bg-[#aeaeae] bg-opacity-10 duration-[0.3s] ease-[cubic-bezier(0.37,0.01,0,0.98)] hover:transform hover:scale-[1.02]">
            {/* <figure className="overflow-hidden relative pt-52 md:pt-80 mb-5 rounded-lg"> */}
            <div>
                <img
                    className="rounded-full aspect-square size-full"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            {/* </figure> */}
            <h2 className="mb-2.5 text-2xl font-medium leading-tight">
                {product.name}
            </h2>
            {product.description && (
                <p className="mb-4 text-base leading-snug text-white text-opacity-60">
                    {product.description}
                </p>
            )}
            <div className="flex gap-5 justify-center items-center text-xl font-medium text-[#ff3131]">
                <div>{product.dob}</div>
                <div>{product.marital_status}</div>
                <div>{product.occupation}</div>
            </div>
        </article>
    );
}

export default ProductCard;
