import React from "react";
import { StarIcon } from "./Icon";

const Testimonial = () => {
    return (
        <>
            <div className="flex flex-col gap-3 p-6 bg-white rounded-[5px] w-[329px]">
                <div className="flex gap-1 items-center">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold">退休後的生活，原來還能這麼精彩。</p>
                        <p className="text-sm">
                            剛退休的時候有點迷惘，但康霖讓我每天都有目標、有社群可以互動。我開始學習健康知識，也用這些知識去幫助朋友和家人。
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div>AB</div>
                        <div>
                            <p>劉女士</p>
                            <p>已加入會員九年</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
