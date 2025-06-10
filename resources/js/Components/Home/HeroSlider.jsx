import React from "react";
import Slider from "react-slick";
import { Button } from "../Button";
import { Link, usePage } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



const sliderImages = [
    {
        src: "/images/home/slider/wedding-banner.webp",
        title: "Find your perfect match with Vanand Vivah",
        description:
            "At Vanand Vivah, we connect brides and grooms to help them discover meaningful relationships. Join our community today.",
    },
    {
        src: "/images/home/slider/destination-wedding.webp",
        title: "Join thousands finding love",
        description:
            "Trusted by thousands across the world, Vanand Vivah helps you take the first step toward a fulfilling relationship.",
    },
    {
        src: "/images/home/slider/hindu-wedding-mandap.webp",
        title: "Safe, secure, and personalized",
        description:
            "We value your privacy and provide you with a secure platform tailored to your unique preferences.",
    },
];

const preloadImages = async (imageUrls) => {
    const promises = imageUrls.map(src => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject();
        });
    });
    await Promise.all(promises);
}

function HeroSlider() {
    const user = usePage().props.auth.user;

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
        <div className="overflow-hidden relative mt-15 h-[600px]">
            <div className="relative h-[600px] overflow-hidden">
                <Slider {...settings}>
                    {sliderImages.map((slide, index) => (
                        <div key={index} className="relative w-full h-[600px]">
                            {index === 0 ? (
                                <img
                                    alt="Vanand Vivah Registration"
                                    src={slide.src}
                                    effect="eager"
                                    srcSet="images/home/slider/mobile/wedding-banner.webp 480w, images/home/slider/wedding-banner.webp 1900w"
                                    className="object-cover w-full h-full"
                                    width={"100%"}
                                    height={"600px"}
                                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw"
                                />
                            ) : (
                                <LazyLoadImage
                                    alt="Vanand Vivah Registration"
                                    src={slide.src}
                                    effect="blur"
                                    className="object-cover w-full h-full"
                                    width={"100%"}
                                    height={"600px"}
                                />
                            )}
                            <div className="absolute top-2/4 left-2/4 px-5 py-0 w-full text-center -translate-x-2/4 -translate-y-2/4 max-w-[800px]">
                                <h2 className="mb-6 text-6xl font-bold max-sm:text-4xl capitalize text-white drop-shadow-xl">
                                    {slide.title}
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-white text-opacity-90">
                                    {slide.description}
                                </p>
                                {user === null ? (
                                    <Link href="/register">
                                        <Button
                                            className="px-8 py-4 border-none rounded-[30px] transition-colors duration-300"
                                            variant="red"
                                        >
                                            Register Now
                                        </Button>
                                    </Link>
                                ) : ""}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HeroSlider;
