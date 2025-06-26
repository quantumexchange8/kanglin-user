import GoalCard from "@/Components/GoalCard";
import { GoalCardIcon1, GoalCardIcon2, GoalCardIcon3, GoalIcon } from "@/Components/Icon";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const GoalSection = () => {
    const isSm = useMediaQuery({ maxWidth: 767 });
    const { t } = useTranslation();

    return (
        <div className="relative py-[60px] px-4 md:py-[120px] lg:px-[60px] overflow-hidden">
            <div className="absolute right-[-72.271px] top-[22px]">
                <GoalIcon isSm={isSm} />
            </div>
            <div className="relative flex flex-col gap-10 md:gap-[80px] justify-center">
                <div className="flex flex-col gap-2">
                    <p className=" text-2xl font-bold text-center text-gray-900">
                        我們的三大目標
                    </p>
                    <p className="text-center text-sm text-gray-500 font-medium tracking-[1.12px] uppercase">
                        OUR GOALS
                    </p>
                </div>
                <div className="flex flex-col md:grid grid-cols-3 gap-5">
                    <GoalCard
                        icon={<GoalCardIcon1 />}
                        title={t("goal-1-title")}
                        text={t("goal-1-text")}
                    />
                    <GoalCard
                        icon={<GoalCardIcon2 />}
                        title={t("goal-2-title")}
                        text={t("goal-2-text")}
                    />
                    <GoalCard
                        icon={<GoalCardIcon3 />}
                        title={t("goal-3-title")}
                        text={t("goal-3-text")}
                    />
                </div>
            </div>
        </div>
    );
};

export default GoalSection;
