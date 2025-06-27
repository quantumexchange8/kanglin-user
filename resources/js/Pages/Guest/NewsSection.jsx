import NewsCard from "@/Components/NewsCard";
import React from "react";
import { useTranslation } from "react-i18next";

const NewsSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className=" flex flex-col lg:gap-[60px] gap-[40px] xl:p-[80px] lg:px-[60px] lg:py-[80px] md:px-[40px] px-[16px] py-[60px]">
                {/* Title */}
                <div className=" flex flex-col gap-2 text-center ">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-linear">
                        {t("news-sec-title")}
                    </p>
                    <p className="bg-clip-text text-transparent bg-linear text-sm font-medium tracking-[1.12px] uppercase">
                        latest news
                    </p>
                </div>

                {/* News Card */}
                <div className="flex xl:grid xl:grid-cols-3 flex-col xl:gap-5 justify-center">
                    <NewsCard
                        bgUrl="news-1.svg"
                        title={t("news-1-title")}
                        text={t("news-1-text")}
                        date="2025-02-26"
                    />
                    <NewsCard
                        bgUrl="news-2.svg"
                        title={t("news-2-title")}
                        text={t("news-2-text")}
                        date="2024-12-11"
                    />
                    <NewsCard
                        bgUrl="news-3.svg"
                        title={t("news-3-title")}
                        text={t("news-3-text")}
                        date="2024-10-28"
                    />
                </div>
            </div>
        </>
    );
};

export default NewsSection;
