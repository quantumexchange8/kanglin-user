import React from "react";
import { useTranslation } from "react-i18next";
import { CalendarIcon } from "./Icon";
import { Link } from "@inertiajs/react";
//
const NewsCard = ({ bgUrl, title, text, date }) => {
    return (
        <>
            <div className="hidden xl:flex group flex-col w-[380px] bg-white rounded-[5px] border-gray-200 border-[1px] border-solid">
                <div className="relative w-full h-[221px] overflow-hidden rounded-t-[5px]">
                    {/* Background image layer*/}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-[1.18]"
                        style={{ backgroundImage: `url('/asset/${bgUrl}')` }}
                    />

                    {/* Overlay */}
                    <Link>
                        <div
                            className="absolute text-indigo-50 text-xs font-medium w-full text-center py-3 px-5 bottom-0 bg-[linear-gradient(90deg,_rgba(83,25,133,0.8)_0.21%,_rgba(164,74,152,0.8)_93.09%)]
                        translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                        >
                            查看詳情
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-3 p-5 self-stretch">
                    {/* Header */}
                    <div className="flex gap-2">
                        <CalendarIcon />
                        <p className="text-sm text-gray-700">{date}</p>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-2 self-stretch h-[92px]">
                        <p className="text-lg font-bold text-gray-950">
                            {title}
                        </p>
                        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                            {text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:hidden flex md:gap-[80px] gap-6 py-6 w-full justify-between self-stretch border-gray-100 border-b-[1px] border-solid ">
                <div className="flex flex-col gap-2">
                    {/* Header */}
                    <div className="flex gap-2">
                        <CalendarIcon />
                        <p className="text-xxs md:text-sm text-gray-700">
                            {date}
                        </p>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-2 self-stretch h-[92px]">
                        <p className="text-base md:text-lg font-bold text-gray-950">
                            {title}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                            {text}
                        </p>
                    </div>
                </div>
                <div className="w-[153px] h-[90px] rounded-[5px]  flex-shrink-0">
                    <img
                        src={`/asset/${bgUrl}`}
                        className="w-[153px] h-[90px] rounded-[5px]  flex-shrink-0"
                    ></img>
                </div>
            </div>
        </>
    );
};

export default NewsCard;
