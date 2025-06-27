import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import orderConfirmed from '@/Components/Illustration/OrderConfirmed';
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";

export default function PlacedSuccesful() {

    return (
        <GuestLayout>
            <div className="px-4 pb-10 flex flex-col">
                <div>
                    <Player 
                        autoplay
                        loop
                        src={orderConfirmed}
                    />
                </div>
                <div className="w-full flex flex-col items-center gap-6 justify-center">
                    <div className="flex flex-col gap-3 items-center max-w-[328px] w-full">
                        <div className="text-gray-950 text-xl font-bold">🎉 您的訂單已確認！</div>
                        <div className="text-gray-500 text-base text-center">我們已將訂單明細與電子發票寄送至您的電子信箱。您可以通過我們的網頁查看訂單物流以掌握配送與後續進度。</div>
                    </div>

                    <div className="w-full">
                        <Link href={'/'}>
                            <Button size="lg" className="w-full">回到首頁</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}