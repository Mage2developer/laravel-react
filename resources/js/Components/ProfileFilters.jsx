import React, {useState, useEffect, useRef} from "react";
import InputLabel from "@/Components/InputLabel";
import {getGenderOptions, getMaritalStatusOptions} from "@/Utils/profileUtils";
import {AiOutlineClose} from "react-icons/ai";

function ProfileFilters({ onFilter }) {
    const prevValueRef = useRef({ value: '' });

    const [filters, setFilters] = useState({
        name: '',
        sex: '',
        marital_status: '',
        min_income: '',
        max_income: ''
    });

    useEffect(() => {
        if (filters !== prevValueRef.current) {
            prevValueRef.current = filters;
            onFilter(filters);
        }
    }, [filters, onFilter]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevState => ({ ...prevState, [name]: value }));
    };

    const handleClear = () => {
        filters.name = '';
        setFilters(prevState => ({ ...prevState, ["name"]: '' }));
    };

    return (
        <>
            <div className="flex gap-4 items-center p-5 mb-10 rounded-xl border border-solid bg-white bg-opacity-10
            border-neutral-700 flex-wrap xl:flex-row xl:flex-nowrap xl:gap-8">

                <InputLabel htmlFor="sex" value="I'm looking for" className="basis-full xl:w-22 sm:basis-full md:basis-full"/>

                <select
                    id="sex"
                    name="sex"
                    value={filters.sex}
                    onChange={handleFilterChange}
                    className="basis-full md:basis-2/5 rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                    text-sm font-medium text-gray-700"
                >
                    <option className="text-gray-500" key="" value="">Please select gender</option>
                    {getGenderOptions().map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>

                <select
                    id="marital_status"
                    name="marital_status"
                    value={filters.marital_status}
                    onChange={handleFilterChange}
                    className="basis-full md:basis-2/5 rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                    text-sm font-medium text-gray-700"
                >
                    <option className="text-gray-500" key="" value="">Please select marital status</option>
                    {getMaritalStatusOptions().map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>

                <input
                    id="min_income"
                    name="min_income"
                    type="number"
                    placeholder="Min income"
                    value={filters.minIncome}
                    onChange={handleFilterChange}
                    className="basis-full md:basis-2/5 p-2 bg-transparent border-black text-sm rounded-lg placeholder-gray-400 focus:outline-none
                    focus:ring-0 focus:outline-none focus:ring-0"
                />

                <input
                    id="max_income"
                    name="max_income"
                    type="number"
                    placeholder="Max income"
                    value={filters.maxIncome}
                    onChange={handleFilterChange}
                    className="basis-full md:basis-2/5 p-2 bg-transparent border-black text-sm rounded-lg placeholder-gray-400 focus:outline-none
                    focus:ring-0"
                />

            </div>
            <div className="flex items-center p-3 mb-10 rounded-xl border border-solid bg-white bg-opacity-10
                border-neutral-700">
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Search by name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    className="w-full p-2 bg-transparent border-none rounded-lg placeholder-gray-400 focus:outline-none
                    focus:ring-0"
                />
                {filters.name && (
                    <button
                        onClick={handleClear}
                        className="ml-2 text-[#ff3131] hover:text-[#880000] focus:outline-none"
                        aria-label="Clear search"
                    >
                        <AiOutlineClose size={20}/>
                    </button>
                )}
            </div>
        </>
    );
}

export default ProfileFilters;
