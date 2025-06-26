import { QuoteIcon } from "@/Components/Icon";
import Testimonial from "@/Components/Testimonial";
import React from "react";
import { useTranslation } from "react-i18next";

const TestimonialSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative lg:p-[80px] py-[60px] md:px-[80px] px-4 bg-gray-50 overflow-hidden ">
                <div className="absolute left-[69px] top-[54px] z-0">
                    <QuoteIcon />
                </div>
                <div className="relative flex flex-col gap-[40px] lg:gap-[60px]">
                    {/* Header */}
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-xl lg:text-2xl font-bold text-gray-900">
                            {t("testimonial-section-title-1")}
                        </p>
                        <p className="text-sm font-normal text-gray-500 uppercase">
                            {t("testimonial-section-title-2")}
                        </p>
                    </div>

                    {/* Auto-scrolling row*/}
                    <div className="group flex gap-5 w-full">
                        <div className="flex gap-5 animate-infinite-scroll group-hover:[animation-play-state:paused] w-max">
                            {/* Group 1 */}
                            {[...Array(1)].map((_, i) => (
                                <div className="flex gap-5 ">
                                    <Testimonial
                                        key={`g1-1`}
                                        imgUrl="avatar-1.svg"
                                        title={t("testimonial-1-title")}
                                        text={t("testimonial-1-text")}
                                        username={t("testimonial-1-user-name")}
                                        userjoin={t("testimonial-1-user-join")}
                                    />
                                    <Testimonial
                                        key={`g1-2`}
                                        imgUrl="avatar-2.svg"
                                        title={t("testimonial-2-title")}
                                        text={t("testimonial-2-text")}
                                        username={t("testimonial-2-user-name")}
                                        userjoin={t("testimonial-2-user-join")}
                                    />
                                    <Testimonial
                                        key={`g1-3`}
                                        imgUrl="avatar-3.svg"
                                        title={t("testimonial-3-title")}
                                        text={t("testimonial-3-text")}
                                        username={t("testimonial-3-user-name")}
                                        userjoin={t("testimonial-3-user-join")}
                                    />
                                    <Testimonial
                                        key={`g1-4`}
                                        imgUrl="avatar-4.svg"
                                        title={t("testimonial-4-title")}
                                        text={t("testimonial-4-text")}
                                        username={t("testimonial-4-user-name")}
                                        userjoin={t("testimonial-4-user-join")}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-5 animate-infinite-scroll group-hover:[animation-play-state:paused] w-max">
                            {/* Group 2 (must be identical) */}
                            {[...Array(1)].map((_, i) => (
                                <div className="flex gap-5 ">
                                    <Testimonial
                                        key={`g2-1`}
                                        imgUrl="avatar-1.svg"
                                        title={t("testimonial-1-title")}
                                        text={t("testimonial-1-text")}
                                        username={t("testimonial-1-user-name")}
                                        userjoin={t("testimonial-1-user-join")}
                                    />
                                    <Testimonial
                                        key={`g2-2`}
                                        imgUrl="avatar-2.svg"
                                        title={t("testimonial-2-title")}
                                        text={t("testimonial-2-text")}
                                        username={t("testimonial-2-user-name")}
                                        userjoin={t("testimonial-2-user-join")}
                                    />
                                    <Testimonial
                                        key={`g2-3`}
                                        imgUrl="avatar-3.svg"
                                        title={t("testimonial-3-title")}
                                        text={t("testimonial-3-text")}
                                        username={t("testimonial-3-user-name")}
                                        userjoin={t("testimonial-3-user-join")}
                                    />
                                    <Testimonial
                                        key={`g2-4`}
                                        imgUrl="avatar-4.svg"
                                        title={t("testimonial-4-title")}
                                        text={t("testimonial-4-text")}
                                        username={t("testimonial-4-user-name")}
                                        userjoin={t("testimonial-4-user-join")}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-5 animate-infinite-scroll group-hover:[animation-play-state:paused] w-max">
                            {/* Group 3 (must be identical) */}
                            {[...Array(1)].map((_, i) => (
                                <div className="flex gap-5 ">
                                    <Testimonial
                                        key={`g3-1`}
                                        imgUrl="avatar-1.svg"
                                        title={t("testimonial-1-title")}
                                        text={t("testimonial-1-text")}
                                        username={t("testimonial-1-user-name")}
                                        userjoin={t("testimonial-1-user-join")}
                                    />
                                    <Testimonial
                                        key={`g3-2`}
                                        imgUrl="avatar-2.svg"
                                        title={t("testimonial-2-title")}
                                        text={t("testimonial-2-text")}
                                        username={t("testimonial-2-user-name")}
                                        userjoin={t("testimonial-2-user-join")}
                                    />
                                    <Testimonial
                                        key={`g3-3`}
                                        imgUrl="avatar-3.svg"
                                        title={t("testimonial-3-title")}
                                        text={t("testimonial-3-text")}
                                        username={t("testimonial-3-user-name")}
                                        userjoin={t("testimonial-3-user-join")}
                                    />
                                    <Testimonial
                                        key={`g3-4`}
                                        imgUrl="avatar-4.svg"
                                        title={t("testimonial-4-title")}
                                        text={t("testimonial-4-text")}
                                        username={t("testimonial-4-user-name")}
                                        userjoin={t("testimonial-4-user-join")}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;
