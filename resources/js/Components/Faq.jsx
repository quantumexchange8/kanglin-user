import React from "react";
import { Collapse } from "antd";

const getItems = (panelStyle) => [
    {
        key: "1",
        label: "This is panel header 1",
        children: <p>1233424</p>,
        style: panelStyle,
    },
    {
        key: "2",
        label: "This is panel header 2",
        children: <p>1234</p>,
        style: panelStyle,
    },
    {
        key: "3",
        label: "This is panel header 3",
        children: <p>1234</p>,
        style: panelStyle,
    },
];

const Faq = () => {
    const panelStyle = {
        marginBottom: 24,
        background: "white",
        border: "none",
    };
    return (
        <Collapse
            bordered={false}
            accordion={true}
            defaultActiveKey={["1"]}
            style={{ background: "white" }}
            items={getItems(panelStyle)}
        />
    );
};

export default Faq;
