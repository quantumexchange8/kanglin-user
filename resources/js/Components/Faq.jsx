import React from "react";
import { Collapse, theme } from "antd";
import { MinusIcon, PlusIcon } from "./Icon";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Faq = () => {
    const { t } = useTranslation();

    const getItems = (panelStyle) => [
        {
            key: "1",
            label: t("faq-1-title"),
            children: (
                <Trans i18nKey="faq-1-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "2",
            label: t("faq-2-title"),
            children: (
                <Trans i18nKey="faq-2-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "3",
            label: t("faq-3-title"),
            children: (
                <Trans i18nKey="faq-3-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "4",
            label: t("faq-4-title"),
            children: (
                <div dangerouslySetInnerHTML={{ __html: t("faq-4-text") }} />
            ),
            style: panelStyle,
        },
        {
            key: "5",
            label: t("faq-5-title"),
            children: (
                <Trans i18nKey="faq-5-text" components={{ Link: <Link /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "6",
            label: t("faq-6-title"),
            children: (
                <Trans i18nKey="faq-6-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "7",
            label: t("faq-7-title"),
            children: (
                <Trans i18nKey="faq-7-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
        {
            key: "8",
            label: t("faq-8-title"),
            children: (
                <Trans i18nKey="faq-8-text" components={{ br: <br /> }} />
            ),
            style: panelStyle,
        },
    ];

    const panelStyle = {
        borderRadius: "5px",
        border: "none",
    };
    return (
        <Collapse
            accordion={true}
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
                isActive ? <MinusIcon /> : <PlusIcon />
            }
            expandIconPosition={"end"}
            className="text-gray-100"
            items={getItems(panelStyle)}
        />
    );
};

export default Faq;
