import Banner from "@/Components/Banner";
import BenefitSection from "@/Pages/Guest/BenefitSection";
import Button from "@/Components/Button";
import HeroSection from "@/Components/HeroSection";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import LatestProductSection from "./Guest/LatestProductSection";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
        <GuestLayout>
            <Head title="Welcome" />

            {/* Banner Section */}
            <div className="flex flex-col w-full">
                <Banner />
                <HeroSection />
            </div>

            {/* Latest product section */}
            <LatestProductSection />

            {/* Benefit Section */}
            <div>
                <BenefitSection />
            </div>

            {/* Benefit Section */}


        </GuestLayout>
    );
}
