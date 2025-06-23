import React from "react";
import Card from "../../Components/Card";
import { useTranslation } from "react-i18next";

const BenefitSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="flex flex-col gap-[60px] items-start bg-[url('/asset/benefitSecBg.svg')] bg-no-repeat bg-cover p-[80px]">
                <div className="flex flex-col gap-2 items-center self-stretch">
                    <p className="text-2xl font-bold text-indigo-900">
                        加入
                        <span className="bg-clip-text text-transparent bg-linear">
                            康霖
                        </span>
                        ，打造你的美麗人生
                    </p>
                    <p className="bg-clip-text text-transparent bg-linear text-sm font-medium uppercase tracking-[1.12px]">
                        Begin your amazing journey with Kanglin!
                    </p>
                </div>
                <div className="flex gap-5 self-stretch items-start">
                    <Card
                        bgUrl="card1.jpg"
                        title={t("card-1-title")}
                        text={t("card-1-text")}
                    />
                    <Card
                        bgUrl="card1.jpg"
                        title={t("card-1-title")}
                        text={t("card-1-text")}
                    />
                    <Card
                        bgUrl="card1.jpg"
                        title={t("card-1-title")}
                        text={t("card-1-text")}
                    />
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
