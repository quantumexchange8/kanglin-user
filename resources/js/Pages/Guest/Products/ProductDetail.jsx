import Button from "@/Components/Button";
import { Cart2Icon, FaceBookIcon, LikeActiveIcon, LikeIcon, LineIcon, StarIcon, WeChatIcon, WhatAppsIcon } from "@/Components/Icon";
import { formatAmount } from "@/Composables";
import GuestLayout from "@/Layouts/GuestLayout";
import { Breadcrumb, InputNumber, Progress, Rate } from "antd";
import React, { useState } from "react";

export default function ProductDetail({ product }) {

    const images = product.product_images || [];
    const [selectedImage, setSelectedImage] = useState(images[0]);


    // Function to handle quantity changes
    const [productQty, setProductQty] = useState(1);


    const decreaseQty = () => {
        setProductQty(prev => (prev > 1 ? prev - 1 : 1));
    };

    const increaseQty = () => {
        setProductQty(prev => (prev < product.stock ? prev + 1 : prev));
    };

    const handleQtyChange = (value) => {
        if (value === null || value < 1) {
            setProductQty(1);
        } else if (value > product.stock) {
            setProductQty(product.stock);
        } else {
            setProductQty(value);
        }
    };

    return (
        <GuestLayout>
            <div className="flex flex-col w-full bg-gray-25">
                {/* sticky header */}
                <div className="p-4 md:py-7 md:px-10 bg-white md:bg-gray-25">
                    <Breadcrumb 
                        separator=">"
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: '全部商品',
                                href: '/products',
                            },
                            {
                                title: product.name,
                            },
                        ]}
                    />
                </div>

                {/* content */}
                <div className="flex flex-col gap-2 md:px-10 md:pb-3 ">
                    <div className="bg-white md:p-5 rounded-[5px]">
                        <div className="flex flex-col md:flex-row md:gap-5 bg-white">
                            <div className="flex flex-col gap-3 bg-white px-4 pb-3 md:p-0 w-full">
                                {/* Main Image Display */}
                                <div className="p-5 w-full bg-white h-[328px] flex items-center justify-center border border-gray-100 rounded-[5px]">
                                    <img src={selectedImage} alt="Product" className="h-full object-contain" />
                                </div>
                                {/* Thumbnail Gallery */}
                                <div className="flex gap-3 ">
                                    {
                                        images.map((img, index) => (
                                            <div
                                                key={index}
                                                className={`w-16 h-16 border rounded-[5px] cursor-pointer overflow-hidden ${
                                                    selectedImage === img ? 'border-indigo-900' : 'border-gray-100'
                                                }`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="p-4 flex flex-col gap-3 bg-white w-full">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col gap-1 w-full">
                                                <div className="text-gray-950 text-lg font-bold">{product.name}</div>
                                                <div className="text-gray-500 text-sm md:text-base">{product.description}</div>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <Rate disabled defaultValue={4} className="" />
                                            </div>
                                            <div className="text-blue-600 text-xs md:text-base font-bold underline underline-offset-2">
                                                4.0 (20)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <div className="w-20 text-gray-500 text-sm">產品編號</div>
                                            <div className="text-gray-950 text-sm font-medium">{product.product_code}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-20 text-gray-500 text-sm">現有庫存</div>
                                            <div className="text-green-600 text-sm font-bold">庫存大於{product.stock}!</div>
                                        </div>
                                        <div className="flex ">
                                            <div className="max-w-20 w-full text-gray-500 text-sm">產品特色</div>
                                            <div className="text-gray-950 text-sm font-medium w-full">{product.product_feature}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-20 text-gray-500 text-sm">限用KP</div>
                                            <div className="text-gray-950 text-sm font-medium">{formatAmount(product.product_max_kp)}KP</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* 会员 */}
                                </div>
                                <div className="hidden md:flex flex-col gap-8">
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            {/* 选择配套 */}
                                        </div>
                                        <div className="flex items-center ">
                                            {/* quantity */}
                                            <div className="max-w-20 w-full text-gray-500 text-sm">數量</div>
                                            <div className="w-full ">
                                                <InputNumber 
                                                    value={productQty}
                                                    onChange={handleQtyChange}
                                                    addonBefore={
                                                        <div className="text-gray-300 p-3 cursor-pointer select-none bg-white hover:bg-gray-50" onClick={decreaseQty} >-</div>
                                                    }
                                                    min={1}
                                                    max={product.stock}
                                                    defaultValue={1}
                                                    addonAfter={
                                                        <div className="text-gray-300 p-3 cursor-pointer select-none bg-white hover:bg-gray-50" onClick={increaseQty} >+</div>
                                                    }
                                                    className="custom-input-number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {/* Like button */}
                                            <Button size="lg" variant="tertiary" iconOnly>
                                                <LikeIcon />
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button size="lg" variant="tertiary" className="flex items-center gap-2" >加入購物車</Button>
                                            <Button size="lg" >立即購買</Button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    {/* add to cart */}
                                </div>
                                <div className="flex items-center md:justify-end">
                                    <div className="text-gray-500 text-sm max-w-20 w-full">分享至</div>
                                    <div className="flex items-center gap-2">
                                        <FaceBookIcon />
                                        <WeChatIcon />
                                        <LineIcon />
                                        <WhatAppsIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                        <div className="flex items-center">
                            <div className="max-w-20 w-full text-gray-500 text-sm">出貨</div>
                            <div className="text-gray-950 text-sm font-medium">付款後三天內寄出</div>
                        </div>
                        <div className="flex">
                            <div className="max-w-20 w-full text-gray-500 text-sm">配送方式</div>
                            <div className="text-gray-950 text-sm font-medium">宅配 | 7-11 超商取貨 免運費 | 全家 超商取貨 免運費</div>
                        </div>
                        <div className="flex items-center">
                            <div className="max-w-20 w-full text-gray-500 text-sm">配送運費</div>
                            <div className="text-gray-950 text-sm font-medium">$80起</div>
                        </div>
                        <div className="flex items-center">
                            <div className="max-w-20 w-full text-gray-500 text-sm">付款方式</div>
                            <div className="text-gray-950 text-sm font-medium">信用卡線上付清</div>
                        </div>
                    </div>
                    <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">熱銷推薦榜</div>
                        </div>
                        
                    </div>
                    <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">商品介紹</div>
                        </div>
                        <div></div>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">商品介紹</div>
                                <div className="text-gray-950 text-sm font-medium w-full">{product.description}</div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">商品成分</div>
                                <div className="text-gray-950 text-sm font-medium w-full">{product.product_feature}</div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">使用說明</div>
                                <div className="text-gray-950 text-sm font-medium w-full">{product.instruction_desciption}</div>
                            </div>
                        </div>
                    </div>
                    {/* Report */}
                    <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">報告</div>
                        </div>
                        
                    </div>
                    {/* rating */}
                    <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">客戶評分</div>
                        </div>
                        <div className="w-full py-8 px-5 flex flex-col items-center gap-5 bg-linear-rating">
                            <div className="bg-linear bg-clip-text text-transparent text-[64px] font-medium">4.9</div>
                            <div className="flex flex-col gap-1 w-full">
                                <div className="w-full flex items-center gap-2">
                                    <div className="max-w-[42px] w-full flex items-center gap-1 text-gray-400 text-sm font-medium">5.0 <StarIcon/></div>
                                    <div className="w-full">
                                        <Progress percent={80} />
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <div className="max-w-[42px] w-full flex items-center gap-1 text-gray-400 text-sm font-medium">4.0 <StarIcon/></div>
                                    <div className="w-full">
                                        <Progress percent={20} />
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <div className="max-w-[42px] w-full flex items-center gap-1 text-gray-400 text-sm font-medium">3.0 <StarIcon/></div>
                                    <div className="w-full">
                                        <Progress percent={0} />
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <div className="max-w-[42px] w-full flex items-center gap-1 text-gray-400 text-sm font-medium">2.0 <StarIcon/></div>
                                    <div className="w-full">
                                        <Progress percent={0} />
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <div className="max-w-[42px] w-full flex items-center gap-1 text-gray-400 text-sm font-medium">1.0 <StarIcon/></div>
                                    <div className="w-full">
                                        <Progress percent={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        {/* comment */}
                        <div className="py-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="max-w-[38px] w-full h-[38px] rounded-full"></div>
                                    <div className="w-full flex flex-col">
                                        <div className="text-gray-950 text-base font-bold">林女士</div>
                                        <div className="text-gray-500 text-xs">已加入會員九年</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LikeActiveIcon />
                                        <span>{17}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="max-w-[38px] w-full h-[38px] rounded-full"></div>
                                    <div className="w-full flex flex-col gap-2">
                                        <div>
                                            <Rate disabled defaultValue={5} className="" />
                                        </div>
                                        <div className="text-gray-950 text-sm">
                                            我是經朋友推薦開始嘗試這款「珍珠膠原飲」，原本只是想補充膠原蛋白，沒想到喝了兩週左右，肌膚真的有變得比較Q彈、保濕感也更明顯，妝容更服貼，照鏡子的時候感覺整體氣色都亮起來了！ 口味部分帶有淡淡的果香，不會太甜也沒有腥味，很順口。我特別喜歡它添加了珍珠粉和Q10，覺得比市面上單一成分的膠原產品更全面。重點是它用的是小分子膠原蛋白，吸收效果真的不錯，喝完沒有負擔。
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            2025 - 06 - 23
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 flex flex-col gap-5 py-5 px-4 bg-white border-t border-gray-100">
                <div className="flex items-center justify-end ">
                    {/* quantity */}
                    <div className="max-w-20 w-full text-gray-500 text-sm">數量</div>
                    <div className="w-full max-w-40">
                        <InputNumber 
                            value={productQty}
                            onChange={handleQtyChange}
                            addonBefore={
                                <div className="text-gray-300 p-3 cursor-pointer select-none bg-white hover:bg-gray-50" onClick={decreaseQty} >-</div>
                            }
                            min={1}
                            max={product.stock}
                            defaultValue={1}
                            addonAfter={
                                <div className="text-gray-300 p-3 cursor-pointer select-none bg-white hover:bg-gray-50" onClick={increaseQty} >+</div>
                            }
                            className="custom-input-number"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        {/* Like button */}
                        <Button size="lg" variant="tertiary" iconOnly>
                            <LikeIcon />
                        </Button>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button size="lg" variant="tertiary" className="flex items-center gap-2" >
                            <Cart2Icon />
                            <span>加入購物車</span>
                        </Button>
                        <Button size="lg" >立即購買</Button>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}