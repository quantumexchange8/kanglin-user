import React from "react";
import { useTranslation } from "react-i18next";

const AboutHeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative bg-[url('/asset/aboutHeroBg.svg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center h-[500px] md:h-[720px] min-[1440px]:h-[100vh] min-[1600px]:h-[90vh] min-[1920px]:h-[1000px]] z-10">
            <div className="absolute inset-0 bg-[linear-gradient(182deg,_rgba(83,25,133,0.5)_19.74%,_rgba(255,255,255,0.2)_195.53%)]"></div>
            <div className="relative flex flex-col gap-2 justify-center items-center">
                <p className="text-white font-bold text-2xl md:text-3xl">
                    {t("goal-hero-title")}
                </p>
                <p className="text-gray-100 font-medium text-base md:text-lg uppercase tracking-[1.6px]">
                    about us
                </p>
            </div>
        </div>
    );
};

export default AboutHeroSection;
