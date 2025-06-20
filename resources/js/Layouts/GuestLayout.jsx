import ApplicationLogo from "@/Components/ApplicationLogo";
import Button from "@/Components/Button";
import { CartIcon, UserIcon } from "@/Components/Icon";
import { Logo } from "@/Components/Logo";
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
                    <Logo />
                    <Navbar />
                </div>
                <div className="flex items-center gap-[16px]">
                    <CartIcon />
                    <div className="hidden md:block">
                        <UserIcon />
                    </div>
                </div>
            </header>
            
            {children}

            {/* footer */}
            <div>123456</div>

        </>
    );
}
