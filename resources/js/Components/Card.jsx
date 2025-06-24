import React from "react";
import Button from "./Button";
import { ArrowRightIcon } from "./Icon";

const Card = ({ bgUrl, title, text }) => (
    <>
        <div className="group relative w-full h-[324px] lg:max-w-[413px] lg:h-[430px] flex flex-col shrink-0 rounded-[5px] shadow-[0px_4px_32px_rgba(96,96,96,0.12)] overflow-hidden lg:flex-[1_0_0%]">
            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[#D3D3D3] transition-transform duration-1000 ease-in-out group-hover:scale-[1.15]"
                style={{ backgroundImage: `url('/asset/${bgUrl}')` }}
            />
            <div className="bg-[linear-gradient(184deg,_rgba(255,255,255,0)_-125.53%,_rgba(164,74,152,0.49)_86.56%)] inset-0 absolute"></div>

            <div className="bg-white w-full z-10 rounded-t-[5px] p-[20px] absolute bottom-0 translate-y-16 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="self-stretch text-lg font-bold bg-clip-text text-transparent bg-linear">
                            {title}
                        </p>
                        <p className="text-sm font-normal">{text}</p>
                    </div>
                    <div className="">
                        <Button
                            variant="gradient"
                            size="md"
                            className="w-full text-center"
                        >
                            加入會員
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Card;
