import React from "react";

export default function ApplicationLogo(props) {
    return (
        <img
            alt="Vanand Vivah Logo"
            src="/images/header-logo.webp"
            effect="opacity"
            height={"70"}
            width={"234"}
            loading="eager"
            threshold={300}
            wrapperClassName="h-[70px] w-[234]"
        />
    );
}
