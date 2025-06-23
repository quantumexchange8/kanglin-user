import React from "react";
import Button from "./Button";

const Card = ({bgUrl, title, text}) => (
    <>
        <div
            className={`group w-[413px] h-[430px] relative flex flex-col shrink-0 rounded-[5px] shadow-[0px_4px_32px_rgba(96,96,96,0.12)]
            bg-[url('/asset/${bgUrl}')] bg-[#D3D3D3] bg-[position:-79.057px_0px] bg-[length:155.984%_100%] bg-no-repeat overflow-hidden`}
            style={{ flex: "1 0 0" }}
        >
            <div className="bg-[linear-gradient(184deg,_rgba(255,255,255,0)_-125.53%,_rgba(164,74,152,0.49)_86.56%)] inset-0 absolute"></div>

            <div className="bg-white z-10 rounded-t-[5px] p-[20px] absolute bottom-0 translate-y-16 hover:translate-y-0 transition-all duration-300">
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="self-stretch text-lg font-bold bg-clip-text text-transparent bg-linear">
                            {title}
                        </p>
                        <p>
                            {text}
                        </p>
                    </div>
                    <div className="">
                        <Button
                            variant="gradient"
                            size="md"
                            className="w-full text-center"
                        >
                            加入會員
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Card;
