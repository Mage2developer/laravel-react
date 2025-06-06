import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

function FollowUs({label}) {
    return (
        <div className="mt-6 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#ff3131]">
                {label}
            </h3>
            <div className="flex gap-4 items-center">
                <a
                    target="_blank"
                    href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/"
                    aria-label="Facebook"
                    className=" hover:text-[#ff3131] transition-colors"
                >
                    <FiFacebook className="w-6 h-6" />
                </a>
                <a
                    target="_blank"
                    href="https://www.facebook.com/people/Vanand-Vivah/61576099730680/"
                    aria-label="Facebook"
                    className=" hover:text-[#ff3131] transition-colors"
                >
                    <FiInstagram className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
}

export default FollowUs;
