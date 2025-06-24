import React from "react";
import Card from "../../Components/Card";
import { useTranslation } from "react-i18next";

const BenefitSection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative bg-[linear-gradient(180deg,_#FAF5FF_-20.05%,_#FFF_123.53%)]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full bg-[url('/asset/benefitSecBg.svg')] bg-no-repeat bg-auto z-0"></div>

            <div className="flex flex-col gap-[60px] items-start py-[60px] lg:py-[80px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px]">
                <div className="flex flex-col gap-2 items-center text-center self-stretch">
                    <p className="text-2xl font-bold text-indigo-900">
                        {t("benefit-title-1-1")}
                        <span className="bg-clip-text text-transparent bg-linear">
                            {t("benefit-title-1-2")}
                        </span>
                        {t("benefit-title-1-3")}
                    </p>
                    <p className="bg-clip-text text-transparent bg-linear text-sm font-medium uppercase tracking-[1.12px]">
                        {t("benefit-title-2")}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 self-stretch items-start justify-center">
                    <Card
                        bgUrl="card1.jpg"
                        title={t("card-1-title")}
                        text={t("card-1-text")}
                    />
                    <Card
                        bgUrl="card2.jpg"
                        title={t("card-2-title")}
                        text={t("card-2-text")}
                    />
                    <Card
                        bgUrl="card3.jpg"
                        title={t("card-3-title")}
                        text={t("card-3-text")}
                    />
                </div>
            </div>
        </div>
    );
};

export default BenefitSection;
