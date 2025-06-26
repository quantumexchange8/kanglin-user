import Faq from "@/Components/Faq";
import React from "react";

const FaqSection = () => {
    return (
        <div className="flex flex-col gap-[60px] py-[80px] justify-center items-center bg-gray-25">
            <div className="flex flex-col gap-4 px-[253px] items-center">
                <p className="text-2xl font-bold text-gray-950">常見問題</p>
                <p className="text-lg gray-600 uppercase">FAQ</p>
            </div>
            <div>
                <Faq />
            </div>
        </div>
    );
};

export default FaqSection;
