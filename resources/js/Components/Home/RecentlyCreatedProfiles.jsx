import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import LatestProfileCard from "../LatestProfileCard";
import "./RecentlyCreatedProfiles.css";

function RecentlyCreatedProfiles({ latestProfile }) {
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        gap: "1rem",
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
    };

    return (
        <section className="recent-profiles-container">
            <h2 className="heading">Recently Created Profiles</h2>
            <Splide
                options={options}
                extensions={{ AutoScroll }}
                aria-label="Recently Created Profiles"
            >
                {latestProfile.map((profile, index) => (
                    <SplideSlide key={index}>
                        <div className="slide-container">
                            <LatestProfileCard profile={profile} />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
}

export default RecentlyCreatedProfiles;
