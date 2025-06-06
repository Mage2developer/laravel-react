import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const AccordionItemProfile = ({ title, isOpen, onToggle, children }) => {
    return (
        <div className="border border-black/10 bg-white rounded-lg md:rounded-lg shadow-lg"
        style={{
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
        }}>
            <button
                onClick={onToggle}
                className={`w-full text-left px-4 py-3 font-medium text-xl flex justify-between items-center`}

            >
                {title}
                <span className="ml-2">
                    {isOpen ? (
                        <TiArrowSortedUp size={24}/>
                    ) : (
                        <TiArrowSortedDown  size={24} />
                    )}
                </span>
            </button>

            {isOpen && (
                <div className="px-3 py-3 border-t bg-white rounded-b-lg md:rounded-b-lg shadow-b-lg">{children}</div>
            )}
        </div>
    );
};

export default AccordionItemProfile;
