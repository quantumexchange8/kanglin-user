import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import AboutHeroSection from "./Guest/AboutHeroSection";
import IntroSection from "./Guest/IntroSection";
import GoalSection from "./Guest/GoalSection";
import JoinUsSection from "./Guest/JoinUsSection";
import FaqSection from "./Guest/FaqSection";

export default function About({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <Head title="About" />
            <div>
                <div>
                    <AboutHeroSection />
                </div>
                <div>
                    <IntroSection />
                </div>
                <div>
                    <GoalSection />
                </div>
                <div>
                    <JoinUsSection />
                </div>
                <div>
                    <FaqSection />
                </div>
            </div>
        </GuestLayout>
    );
}
