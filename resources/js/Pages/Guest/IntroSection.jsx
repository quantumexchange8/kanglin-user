import React from "react";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative bg-secondary md:px-[253px] md:py-[120px] px-8 py-16">
            <div className="absolute inset-0 bg-[url('/asset/introSecBg.svg')] bg-no-repeat bg-cover bg-right"></div>
            <div className="relative">
                <div className="flex flex-col gap-8 md:gap-10 text-center justify-center">
                    <div className="flex flex-col gap-2">
                        <p className="text-xl md:text-2xl font-bold text-indigo-100">
                            {t("goal-intro-title")}
                        </p>
                        <p className="text-sm font-medium text-indigo-200 uppercase tracking-[1.12px]">
                            kanglin life
                        </p>
                    </div>
                    <div className="text-base md:text-lg text-indigo-200">
                        <p>{t("goal-intro-text-1")}</p>
                        <br />
                        <p>{t("goal-intro-text-2")} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
