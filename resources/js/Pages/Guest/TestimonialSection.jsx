import { QuoteIcon } from "@/Components/Icon";
import Testimonial from "@/Components/Testimonial";
import React from "react";
import { useTranslation } from "react-i18next";

const TestimonialSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative p-[80px] bg-gray-50">
                <div className="absolute left-[69px] top-[54px] z-0">
                    <QuoteIcon />
                </div>
                <div className="relative flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-2xl font-bold text-gray-900">
                            我們的會員說
                        </p>
                        <p className="text-sm font-normal text-gray-500 uppercase">
                            what OUR MEMBERs SAY
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Testimonial />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;
