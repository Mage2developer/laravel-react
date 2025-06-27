import React, { useState, useRef, useEffect } from "react";

const ClickableTooltip = ({ text, tooltipContent, style = '' }) => {
    const [visible, setVisible] = useState(false);
    const tooltipRef = useRef();

    // Close tooltip if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                tooltipRef.current &&
                !tooltipRef.current.contains(event.target)
            ) {
                setVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block ml-2" ref={tooltipRef}>
            <span
                onClick={() => setVisible((v) => !v)}
                className="cursor-pointer text-[#ff3131] font-semibold underline"
                style={style}
            >
                {text}
            </span>

            {visible && (
                <div
                    className="
                        absolute z-10 mt-2
                        w-[90vw] max-w-xs sm:max-w-sm
                        p-3 bg-white border border-gray-300 rounded shadow-md
                        left-1/2 -translate-x-1/2 right-0
                    "
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
};

export default ClickableTooltip;
