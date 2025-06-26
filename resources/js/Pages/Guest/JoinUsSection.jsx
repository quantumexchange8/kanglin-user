import Button from "@/Components/Button";
import { ArrowRightDarkIcon } from "@/Components/Icon";
import React from "react";
import { useTranslation } from "react-i18next";

const JoinUsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex w-full h-screen px-8 md:py-[232px] md:px-[253px] overflow-hidden justify-center items-center">
            {/* Video element */}
            <div>
                <video
                    className="absolute inset-0 w-full h-full object-cover z-[-1]"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/asset/aboutVideo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(164,74,135,0.67)]"></div>

            {/* Content */}
            <div className="relative flex flex-col gap-8 md:gap-10 text-center">
                <div className="flex flex-col gap-2">
                    <p className="text-indigo-25 text-xl md:text-2xl font-bold">
                        {t("join-us-title")}
                    </p>
                    <p className="text-indigo-50 text-sm font-medium tracking-[1.12px] uppercase">
                        join us
                    </p>
                </div>
                <p className="text-indigo-25 text-base md:text-lg">
                    {t("join-us-text")}
                </p>
                <div>
                    <Button variant="secondary" size="lg">
                        {t("join-us-btn-text")}
                        <ArrowRightDarkIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;
