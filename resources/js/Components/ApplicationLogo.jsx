import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React from "react";

export default function ApplicationLogo(props) {
    return <LazyLoadImage
        alt="Vanand Vivah Logo"
        src="/images/header-logo.webp"
        effect="blur"
        height={"70px"}
        width={"234px"}
    />
}
