import ApplicationLogo from "@/Components/ApplicationLogo";
import Button from "@/Components/Button";
import { CartIcon, UserIcon } from "@/Components/Icon";
import { Logo, LogoWhite } from "@/Components/Logo";
import Navbar from "@/Components/NavBar";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <>
            <header className="bg-white flex items-center justify-between xl:px-[80px] lg:px-[60px] lg:py-[20px] md:px-[16px] px-[8px] py-[16px] ">
                <div
                    className="flex xl:gap-[20px] lg:gap-[8px] md:gap-[12px] flex-row-reverse lg:flex-row items-center w-full"
                    style={{ justifyContent: "start" }}
                >
                    <Logo className="w-[120px] h-[31.44px] md:w-[150px] md:h-[39.301px] lg:w-[200px] lg:h-[52.402px]" />
                    <Navbar />
                </div>
                <div className="flex items-center gap-[16px]">
                    <CartIcon />
                    <div className="hidden md:block">
                        <UserIcon />
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="flex flex-col">
                {children}
            </div>

            {/* footer */}
            <footer className="flex flex-col lg:gap-[100px] md:gap-[60px] gap-5 bg-gray-950 text-gray-50 xl:px-[80px] lg:px-[60px] lg:pt-[80px] md:p-[40px] px-4 py-5">
                <div className="flex xl:gap-48 md:gap-[25px] gap-5 flex-col lg:flex-row items-start self-stretch">
                    <div className="flex flex-col items-start md:gap-8 gap-4 w-[328px]">
                        <div>
                            <LogoWhite className="w-[120px] h-[25.98px] md:w-[180px] md:h-[38.96px] lg:w-[221.75px] lg:h-[48px]" />
                        </div>
                        <div className="md:font-medium lg:text-base md:text-sm text-xs font-normal">
                            <p>康霖生活事業股份有限公司</p>
                            <br />
                            <p>公司統編：42671281</p>
                            <p>地址：臺北市中正區忠孝西路一段6號3樓</p>
                            <p>電話：04-2305-8758</p>
                            <p>信箱:</p>
                        </div>
                    </div>
                    <div
                        className="hidden lg:flex gap-5 self-stretch"
                        style={{ flex: "1 0 0" }}
                    >
                        <div
                            className="flex flex-col gap-8 items-start self-stretch"
                            style={{ flex: "1 0 0" }}
                        >
                            <p className="text-lg font-medium">條款與規範</p>
                            <div className="flex flex-col gap-4 items-start self-stretch text-base font-medium">
                                <Link>約定條款</Link>
                                <Link>隱私權政策</Link>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-8 items-start self-stretch"
                            style={{ flex: "1 0 0" }}
                        >
                            <p className="text-lg font-medium">會員與加入</p>
                            <div className="flex flex-col gap-4 items-start self-stretch text-base font-medium">
                                <Link>加入我們</Link>
                                <Link>會員專區</Link>
                                <Link>舊會員專區</Link>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-8 items-start self-stretch"
                            style={{ flex: "1 0 0" }}
                        >
                            <p className="text-lg font-medium">支援與聯絡</p>
                            <div className="flex flex-col gap-4 items-start self-stretch text-base font-medium">
                                <Link>聯絡客服</Link>
                                <Link>查看物流</Link>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-8 items-start self-stretch"
                            style={{ flex: "1 0 0" }}
                        >
                            <p className="text-lg font-medium">業務專用</p>
                            <div className="flex flex-col gap-4 items-start self-stretch text-base font-medium">
                                <Link>業務專區</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:hidden gap-x-3 gap-y-3 md:gap-x-4 self-stretch items-center content-center flex-wrap font-medium">
                        <Link>約定條款</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>隱私權政策</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>加入我們</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>會員專區</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>舊會員專區</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>聯絡客服</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>查看物流</Link>
                        <div className="bg-gray-400 h-[18px] w-[1px]"> </div>
                        <Link>業務專區</Link>
                    </div>
                </div>
                <div className="md:text-center text-xs md:text-sm md:font-normal">
                    © 2025康霖生活事業股份有限公司 All Rights Reserved.
                </div>
            </footer>
        </>
    );
}
