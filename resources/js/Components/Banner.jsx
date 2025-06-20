import React from "react";
import { SpeakerIcon } from "./Icon";

export default function Banner({ children }) {
    return (
        <>
            <div className="w-full h-9 flex-col items-start gap-[10px] justify-between bg-linear py-[8px] xl:px-[80px] lg:px-[60px] md:px-[40px] px-[16px]">
                <div className="flex justify-between items-center text-sm max-[767px]:gap-[40px] font-medium text-indigo-50 text-xs md:text-sm">
                    <div className="flex items-center gap-1 flex-1 overflow-hidden">
                        <SpeakerIcon />
                        <p className="whitespace-nowrap">『新聞快訊』</p>
                        <p className="truncate flex-1">
                            SCH NMN青春99膠囊，榮獲國家品牌玉山獎最佳產品類
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <p>2024 - 10 - 02</p>
                    </div>
                </div>
            </div>
        </>
    );
}
