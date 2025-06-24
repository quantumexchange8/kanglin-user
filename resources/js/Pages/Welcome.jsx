import Banner from "@/Components/Banner";
import BenefitSection from "@/Pages/Guest/BenefitSection";
import Button from "@/Components/Button";
import HeroSection from "@/Pages/Guest/HeroSection";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import LatestProductSection from "./Guest/LatestProductSection";
import { useRef, useEffect, useState } from "react";
import BrandStorySection from "./Guest/BrandStorySection";
import TestimonialSection from "./Guest/TestimonialSection";

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

    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const bannerRef = useRef(null);
    const [topPadding, setTopPadding] = useState(0);

    //Set Fixed header and banner position & content padding Top
    useEffect(() => {
        const updateHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
                if (bannerRef.current) {
                    const headerHeight = headerRef.current?.offsetHeight || 0;
                    const bannerHeight = bannerRef.current?.offsetHeight || 0;
                    setTopPadding(headerHeight + bannerHeight);
                }
            }
        };

        updateHeight(); // Initial
        window.addEventListener("resize", updateHeight); // Responsive
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <GuestLayout ref={headerRef}>
            <Head title="Welcome" />

            {/* Banner Section */}
            <div className="flex flex-col w-full">
                <Banner offsetTop={headerHeight} ref={bannerRef} />
                <div style={{ paddingTop: `${topPadding}px` }}>
                    <HeroSection />
                </div>
            </div>

            {/* Latest product section */}
            <LatestProductSection />

            {/* Benefit Section */}
            <div>
                <BenefitSection />
            </div>

            {/* Brand Story Section */}
            <div>
                <BrandStorySection />
            </div>

            {/* Testimonial Section */}
            <div>
                <TestimonialSection />
            </div>
        </GuestLayout>
    );
}
