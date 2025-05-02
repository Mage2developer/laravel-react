import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleClear = () => {
        setSearchTerm("");
        if (onSearch) {
            onSearch("");
        }
    };

    return (
        <div className="flex items-center p-3 mb-10 rounded-xl border border-solid bg-white bg-opacity-10 border-neutral-700">
            <input
                type="text"
                placeholder="Search Profile Name..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full p-2 bg-transparent border-none rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 "
            />
            {searchTerm && (
                <button
                    onClick={handleClear}
                    className="ml-2 text-[#ff3131] hover:text-[#880000] focus:outline-none"
                    aria-label="Clear search"
                >
                    <AiOutlineClose size={20} />
                </button>
            )}
        </div>
    );
}

export default SearchBox;
