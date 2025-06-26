import React from "react";
import { GoalCardIcon1 } from "./Icon";

const GoalCard = ({icon, title, text}) => {
    return (
        <>
            <div
                className="p-5 md:p-10 flex flex-col gap-5 md:gap-10 bg-white shadow-[0px_2px_11.9px_rgba(0,0,0,0.09)] rounded-[5px] hover:scale-[1.03] transition-transform duration-500 ease-in-out"
                style={{ flex: "1 0 0" }}
            >
                {icon}
                <div className="flex flex-col gap-2 md:gap-4">
                    <p className=" bg-clip-text text-transparent bg-linear text-lg md:text-xl font-bold">
                        {title}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default GoalCard;
