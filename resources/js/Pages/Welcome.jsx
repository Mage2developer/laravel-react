import { Head } from "@inertiajs/react";
import Home from "./Home";

export default function Welcome({ auth, laravelVersion, phpVersion, latestProfile }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="A Perfect Match For Marriage" />
            <Home latestProfile={latestProfile} />
        </>
    );
}
