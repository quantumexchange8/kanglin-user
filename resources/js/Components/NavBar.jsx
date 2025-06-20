import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@inertiajs/react";
import {
    AboutIcon,
    ContactIcon,
    HomeIcon,
    MenuIcon,
    NewsIcon,
    ProductIcon,
    ProfileIcon,
    TrackingIcon,
} from "./Icon";
import { Drawer } from "antd";
import { Logo } from "./Logo";

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        setMenuOpen(true);
    };
    const onClose = () => {
        setMenuOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navItems = [
        { label: t("home"), href: route("home") },
        { label: t("about"), href: route("home") },
        { label: t("product"), href: route("home") },
        { label: t("news"), href: route("home") },
    ];

    return (
        <>
            <div className="flex lg:hidden">
                <button
                    onClick={showMenu}
                    className="text-gray-700 focus:outline-none"
                >
                    {menuOpen}
                    <MenuIcon />
                </button>
            </div>

            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                open={menuOpen}
                key="left"
                width="236px"
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex gap-[20px] text-base font-medium items-center">
                            <ProfileIcon />
                            登入/註冊
                        </div>
                        <div className="bg-gray-100 h-[1px]"> </div>
                        <div className="flex flex-col gap-[12px]  text-base font-medium">
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <HomeIcon />
                                    <p>首頁</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <AboutIcon />
                                    <p>關於我們</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <ProductIcon />
                                    <p>產品</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <NewsIcon />
                                    <p>新聞</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <TrackingIcon />
                                    <p>查看物流</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="flex gap-3">
                                    <ContactIcon />
                                    <p>聯絡客服</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-start w-[120px]">
                        <Logo />
                    </div>
                </div>
            </Drawer>

            <nav className="flex items-center gap-[8px] hidden lg:flex">
                {navItems.map((item, idx) => (
                    <Link href={item.href} key={idx}>
                        <div className="px-4 py-2 text-sm font-bold text-gray-900 hover:text-indigo-600">
                            {item.label}
                        </div>
                    </Link>
                ))}
            </nav>
        </>
    );
}
