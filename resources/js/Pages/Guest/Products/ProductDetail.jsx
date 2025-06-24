import { FaceBookIcon, LineIcon, WeChatIcon, WhatAppsIcon } from "@/Components/Icon";
import GuestLayout from "@/Layouts/GuestLayout";
import { Breadcrumb, Rate } from "antd";
import React from "react";

export default function ProductDetail({ product }) {

    return (
        <GuestLayout>
            <div className="flex flex-col w-full bg-gray-25">
                {/* sticky header */}
                <div className="p-4 sticky top-[81px] z-10 bg-white">
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
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <div className="pb-3 px-4 bg-white">
                            
                        </div>
                        <div className="p-4 flex flex-col gap-3 bg-white">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-1 w-full">
                                            <div className="text-gray-950 text-lg font-bold">{product.name}</div>
                                            <div className="text-gray-500 text-sm">{product.description}</div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Rate disabled defaultValue={4}  />
                                        </div>
                                        <div className="text-blue-600 text-xs font-bold underline underline-offset-2">
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
                                        <div className="text-gray-950 text-sm font-medium">{product.product_max_kp}KP</div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div className="flex items-center">
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
                    <div className="p-4 bg-white flex flex-col gap-3">
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
                    <div className="p-4 bg-white flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">熱銷推薦榜</div>
                        </div>
                        
                    </div>
                    <div className="p-4 bg-white flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">商品介紹</div>
                        </div>
                        <div></div>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">商品介紹</div>
                                <div className="text-gray-950 text-sm font-medium">{product.description}</div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">商品成分</div>
                                <div className="text-gray-950 text-sm font-medium">{product.product_feature}</div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-500 text-sm max-w-20 w-full">使用說明</div>
                                <div className="text-gray-950 text-sm font-medium">{product.instruction_desciption}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}