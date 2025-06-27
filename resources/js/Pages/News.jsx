import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Tabs } from "antd";
import { Select } from "antd";
import { ChevronDown } from "@/Components/Icon";
import NewsCard from "@/Components/NewsCard";
import { useTranslation } from "react-i18next";

export default function About({ auth, laravelVersion, phpVersion }) {
    const { t } = useTranslation();

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: "1",
            label: "全部新聞",
            children: (
                <>
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
                </>
            ),
        },
        {
            key: "2",
            label: "商品新聞",
            children: "Content of Tab Pane 2",
        },
        {
            key: "3",
            label: "企業相關",
            children: "Content of Tab Pane 3",
        },
    ];
    const ChevronDownIcon = <ChevronDown />;

    return (
        <>
            <GuestLayout>
                <Head title="News" />
                <div className="px-[100px] py-7 justify-between items-start">
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                        tabBarExtraContent={
                            <Select
                                suffixIcon={ChevronDownIcon}
                                defaultValue="新到舊"
                                className="w-[170px]"
                                options={[
                                    { value: "新到舊", label: "新到舊" },
                                    { value: "lucy", label: "新到舊" },
                                    { value: "Yiminghe", label: "新到舊" },
                                ]}
                            />
                        }
                    />
                </div>
            </GuestLayout>
        </>
    );
}
