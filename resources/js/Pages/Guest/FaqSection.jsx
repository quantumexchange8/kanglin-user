import Button from "@/Components/Button";
import Faq from "@/Components/Faq";
import React from "react";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-10 md:gap-[60px] py-[60px] px-[16px] md:py-[80px] md:px-[253px] justify-center items-center bg-gray-25">
            <div className="flex flex-col gap-2 md:gap-4 items-center">
                <p className="text-xl md:text-2xl font-bold text-gray-900 md:text-gray-950">
                    {t("faq-title")}
                </p>
                <p className="text-sm md:text-lg uppercase text-gray-500 md:text-gray-600">
                    FAQ
                </p>
            </div>
            <div className="w-full flex flex-col gap-6 md:gap-10">
                <Faq />
                <div className="flex flex-col gap-6 md:gap-8  px-8 md:px-0 py-10 bg-gray-50 rounded-[5px] justify-center items-center">
                    <div>
                        <img
                            src="asset/contactAvatar.svg"
                            className="h-[80px] md:h-full"
                        ></img>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-gray-950 font-bold text-lg md:text-xl">
                            {t("contact-title")}
                        </p>
                        <p className="text-gray-500 text-sm md:text-base">
                            {t("contact-text")}
                        </p>
                    </div>
                    <div>
                        <Button variant="primary" size="lg">
                            {t("contact-btn-text")}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
