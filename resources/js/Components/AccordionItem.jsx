import React from 'react';
import {FaChevronUp, FaChevronDown} from "react-icons/fa";

const AccordionItem = React.memo(({ item, isOpen, onClick }) => {
    return (
        <div className="bg-white p-4 mb-3 shadow sm:rounded-lg sm:p-8">
            <button onClick={() => onClick(item.id)} className="w-full">
                <h2 className="text-xl font-medium text-gray-900 hover:text-[#ff3131] flex items-center justify-between">
                    {item.title} {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
                </h2>
            </button>
            {isOpen && <div>{item.content}</div>}
        </div>
    );
}, (prevProps, nextProps) => {
    // Prevent re-render unless isOpen or item changes
    return (
        prevProps.isOpen === nextProps.isOpen &&
        prevProps.item.id === nextProps.item.id &&
        prevProps.item.title === nextProps.item.title &&
        prevProps.item.content === nextProps.item.content
    );
});

export default AccordionItem;
