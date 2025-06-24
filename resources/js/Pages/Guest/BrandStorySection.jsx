import Button from "@/Components/Button";
import { ArrowRightDarkIcon } from "@/Components/Icon";
import React from "react";
import { useTranslation } from "react-i18next";

const BrandStorySection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative bg-linear">
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full bg-[url('/asset/brandstoryBg.svg')] bg-no-repeat bg-cover bg-right-top z-0"></div>
                {/* Content layer */}
                <div className="relative z-10 flex items-center justify-center h-full py-[60px] px-4 md:p-[80px] lg:py-[100px] text-center text-blue-50">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl lg:text-2xl font-bold">
                                {t("brand-story-title-1")}
                            </h2>
                            <p className="text-sm uppercase text-indigo-200 tracking-[1.12px]">
                                {t("brand-story-title-2")}
                            </p>
                        </div>
                        <p className="md:text-base lg:text-lg text-white leading-relaxed">
                            {t("brand-story-text-1")}
                            <br />
                            {t("brand-story-text-2")}
                            <br />
                            {t("brand-story-text-3")}
                            <br />
                            {t("brand-story-text-4")}
                        </p>
                        <div>
                            <Button variant="secondary" size="lg">
                                {t("brand-story-btn-text")}
                                <ArrowRightDarkIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandStorySection;
