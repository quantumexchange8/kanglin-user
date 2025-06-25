import React from "react";
import { StarIcon } from "./Icon";

const Testimonial = ({ imgUrl, title, text, username, userjoin }) => {
    return (
        <>
            <div className="flex flex-col flex-shrink-0 gap-3 p-6 bg-white rounded-[5px] w-[329px] lg:w-[381px] h-[234px] lg:h-[283px] shadow-[0px_4px_32px_rgba(96,96,96,0.12)]">
                <div className="flex gap-1 items-center">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className="flex flex-col justify-between grow">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm lg:text-lg font-bold text-gray-950">
                            {title}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-700">
                            {text}
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div>
                            <img
                                src={`/asset/${imgUrl}`}
                                alt={username}
                                className="rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px]"
                            />
                        </div>
                        <div>
                            <p className="text-gray-950 text-sm lg:text-base font-medium">
                                {username}
                            </p>
                            <p className="text-gray-500 text-xxs lg:text-xs">
                                {userjoin}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
