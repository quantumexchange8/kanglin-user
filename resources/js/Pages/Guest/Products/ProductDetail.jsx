import Button from "@/Components/Button";
import { Cart2Icon, FaceBookIcon, LikeActiveIcon, LikeIcon, LineIcon, StarIcon, WeChatIcon, WhatAppsIcon, XIcon } from "@/Components/Icon";
import { formatAmount } from "@/Composables";
import { useCart } from "@/Contexts/CartContext";
import GuestLayout from "@/Layouts/GuestLayout";
import { Breadcrumb, Image, InputNumber, Progress, Rate } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ProductDetail({ product }) {

    const images = product.product_images || [];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectQtyOpen, setSelectQtyOpen] = useState(false);
    const [selectBuyOpen, setSelectBuyOpen] = useState(false);


    // Function to handle quantity changes
    const [productQty, setProductQty] = useState(1);
    const { incrementCartCount, updateCartCount } = useCart();

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

    const addToCart = async () => {

        let guestToken = localStorage.getItem('guest_token');

        if (!guestToken) {
            guestToken = crypto.randomUUID(); // or use uuid() library
            localStorage.setItem('guest_token', guestToken);
        }

        try {
            const response = await axios.post('/guest-add-cart', {
                guest_token: guestToken,
                product_id: product.id,
                quantity: productQty,
            });

            incrementCartCount(productQty);
            
            // Optionally show a toast or feedback
            toast.success('成功加入購物車!', {
                title: '成功加入購物車!',
                description: '可以前往購物車下單',
                duration: 3000,
                variant: 'variant3',
            });
            
        } catch (error) {
            console.error('Add to cart error', error);
            toast.error('加入購物車失敗');
        }

    }

    return (
        <GuestLayout>
            <div className="min-h-[85vh]">
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
                                    <div className="p-5 w-full bg-white max-h-[328px] flex items-center justify-center border border-gray-100 rounded-[5px]">
                                        <div className="max-w-[328px] p-3 flex items-center justify-center">
                                            <Image 
                                                src={selectedImage}
                                                className="h-full object-contain"
                                            />
                                        </div>
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
                        {/* <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                            <div className="flex items-center gap-3">
                                <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                                <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">熱銷推薦榜</div>
                            </div>
                            
                        </div> */}
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
                            <div className="max-w-[300px]">
                                <img src="/asset/report.png" alt="" />
                            </div>
                        </div>
                        {/* rating */}
                        <div className="p-4 bg-white flex flex-col gap-3 rounded-[5px]">
                            <div className="flex items-center gap-3">
                                <div className="w-[7px] bg-indigo-900 h-[18px]"></div>
                                <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">客戶評分</div>
                            </div>
                            <div className="w-full py-8 px-5 flex flex-col md:flex-row items-center gap-5 bg-linear-rating">
                                <div className="bg-linear bg-clip-text text-transparent text-[64px] font-medium">4.9</div>
                                <div className="flex flex-col gap-1 w-full md:max-w-96">
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

                <div className="fixed bottom-0 w-full flex flex-col gap-5 md:hidden py-5 px-4 bg-white border-t border-gray-100">
                    <div className="flex items-center w-full">
                        {
                            (selectQtyOpen || selectBuyOpen) && (
                                <div className="flex flex-col w-full">
                                    <div className="p-3 flex">
                                        <div className="flex gap-2.5 w-full">
                                            <div className="max-w-20 max-h-20 w-full h-full p-5 border border-gray-100 rounded-[5px] ">
                                                <img src={product.product_thumbnail} alt="" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="text-gray-950 font-bold text-base">{product.name}</div>
                                                <div className="flex flex-col gap-1">
                                                    <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">${product.product_price}</div>
                                                    <div className="text-gray-500 text-xs">庫存:{product.stock}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex p-2 cursor-pointer" onClick={() => {
                                                if (selectQtyOpen) {
                                                    setSelectQtyOpen(false)
                                                } else {
                                                    setSelectBuyOpen(false)
                                                }
                                            }} >
                                                <XIcon className='w-6 h-6' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 p-3">
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
                                </div>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        {
                            (selectQtyOpen || selectBuyOpen) ? (
                                null
                            ) : (
                                <Button size="lg" variant="tertiary" iconOnly>
                                    <LikeIcon />
                                </Button>
                            )
                        }
                        
                        <div className={`flex items-center gap-3 ${(selectQtyOpen || selectBuyOpen) ? 'w-full' : ''}`}>
                            {
                                !selectBuyOpen ? (
                                    <Button size="lg" variant="tertiary" className={`flex items-center gap-2 ${selectQtyOpen ? 'w-full' : ''}`} 
                                        onClick={() => {
                                            if (selectQtyOpen) {
                                            addToCart(); // 🔥 only run addToCart if already open
                                            } else {
                                            setSelectQtyOpen(true); // 💬 show dialog first
                                            }
                                        }}
                                    >
                                        <Cart2Icon className='w-4 h-4' />
                                        <span>加入購物車</span>
                                    </Button>
                                ) : null
                            }
                            {
                                !selectQtyOpen ? (
                                    <Button size="lg" 
                                        onClick={() => {
                                            if (selectBuyOpen) {
                                                // setSelectBuyOpen()
                                            } else {
                                                setSelectBuyOpen(true)
                                            }
                                        }}
                                    className={`flex items-center gap-2 ${selectBuyOpen ? 'w-full' : ''}`} 
                                    >立即購買</Button>
                                ) : null
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}