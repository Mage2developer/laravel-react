import React, { useState, useRef, useEffect } from "react";

const ClickableTooltip = ({ text, tooltipContent }) => {
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
        <div className="relative inline-block" ref={tooltipRef}>
            <span
                onClick={() => setVisible((v) => !v)}
                className="cursor-pointer text-[#ff3131] font-semibold underline"
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

// import React, { useState, useRef, useEffect } from "react";

// const ClickableTooltip = ({ text, tooltipContent }) => {
//     const [visible, setVisible] = useState(false);
//     const tooltipRef = useRef();

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 tooltipRef.current &&
//                 !tooltipRef.current.contains(event.target)
//             ) {
//                 setVisible(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () =>
//             document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="relative inline-block" ref={tooltipRef}>
//             <span
//                 onClick={() => setVisible((v) => !v)}
//                 className="cursor-pointer text-blue-600 underline"
//             >
//                 {text}
//             </span>

//             {visible && (
//                 <div className="absolute top-[-50px] sm:top-[-150px] sm:right-[-325px] z-10 mt-2 w-full sm:w-80 p-3 bg-white border border-gray-300 rounded shadow-md">
//                     {tooltipContent}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ClickableTooltip;
