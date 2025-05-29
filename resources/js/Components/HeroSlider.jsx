import React, { useEffect } from "react";
import Slider from "react-slick";
import { Button } from "./Button";
import { Link } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const sliderImages = [
    {
        src: "/images/wedding-banner.webp",
        title: "Find your perfect match with Vanand Vivah",
        description:
            "At Vanand Vivah, we connect brides and grooms to help them discover meaningful relationships. Join our community today.",
    },
    {
        src: "/images/destination-wedding.webp",
        title: "Join thousands finding love",
        description:
            "Trusted by thousands across the world, Vanand Vivah helps you take the first step toward a fulfilling relationship.",
    },
    {
        src: "/images/hindu-wedding-mandap.webp",
        title: "Safe, secure, and personalized",
        description:
            "We value your privacy and provide you with a secure platform tailored to your unique preferences.",
    },
];

function HeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <div className="relative h-[600px] overflow-hidden">
            <Slider {...settings}>
                {sliderImages.map((slide, index) => (
                    <div key={index} className="relative w-full h-[600px]">
                        <LazyLoadImage
                            alt="Vanand Vivah Registration"
                            src={slide.src}
                            className="object-cover w-full h-full"
                            height={"600px"}    
                            threshold={300}
                            wrapperClassName="h-[600px] w-full"
                            visibleByDefault={index === 0}
                            loading="eager"
                            effect="opacity"
                        />
                        <div className="absolute top-2/4 left-2/4 px-5 py-0 w-full text-center -translate-x-2/4 -translate-y-2/4 max-w-[800px]">
                            <h2 className="mb-6 text-6xl font-bold max-sm:text-4xl capitalize text-white drop-shadow-xl">
                                {slide.title}
                            </h2>
                            <p className="mb-8 text-xl leading-relaxed text-white text-opacity-90">
                                {slide.description}
                            </p>
                            <Link href="/register">
                                <Button
                                    className="px-8 py-4 border-none rounded-[30px] transition-colors duration-300"
                                    variant="red"
                                >
                                    Register Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HeroSlider;
