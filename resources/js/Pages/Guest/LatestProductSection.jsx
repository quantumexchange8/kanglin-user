import Button from "@/Components/Button";
import { Cart2Icon } from "@/Components/Icon";
import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function LatestProductSection() {

    const [isLoading, setIsLoading] = useState(false);
    const [latestProducts, setLatestProducts] = useState([]);

    // Define breakpoints
    const isXl = useMediaQuery({ minWidth: 1440 });
    const isLg = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
    const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSm = useMediaQuery({ minWidth: 360, maxWidth: 767 });

    // Determine slidesToShow based on screen size
    const getSlidesToShow = () => {
        if (isXl) return 6;
        if (isLg) return 4;
        if (isMd) return 3;
        return 2; // Default for sm and below
    };


    const fetchLatestProducts = async () => {

        setIsLoading(true);

        try {

            const response = await axios.get('/getLatestProducts');
            
            setLatestProducts(response.data);
            
        } catch (error) {
            console.error("Error fetching Latest Products:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchLatestProducts();
    }, []);

    // Function to chunk the products array based on slidesToShow
    const chunkProducts = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const slidesToShow = getSlidesToShow();
    const productGroups = chunkProducts(latestProducts, slidesToShow);


    return (
        <div className="w-full py-[60px] px-4 md:px-10 lg:py-20 lg:px-[60px] xl:p-20 flex flex-col gap-10 lg:gap-[60px]">
            {/* Title */}
            <div className="flex flex-col items-center gap-3">
                <div className="text-xl lg:text-2xl font-bold bg-linear bg-clip-text text-transparent">新品上市</div>
                <div className="text-sm font-medium bg-linear bg-clip-text text-transparent">LATEST PRODUCTS</div>
            </div>

            {/* Contetn */}
            <div>
                <Carousel
                    dots={true}
                    autoplay
                    arrows={!isSm}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    adaptiveHeight={true}
                    className="custom-carousel" // 添加自定义类名
                >
                    {productGroups.map((group, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="flex justify-center">
                                <div className={`grid ${isSm ? 'grid-cols-2' : ''} ${isMd ? 'grid-cols-3' : ''} ${isLg ? 'grid-cols-4' : ''} ${isXl ? 'grid-cols-6' : ''} gap-5 w-full md:max-w-[550px] lg:max-w-[740px] xl:max-w-[1120px] px-5 `}>
                                    {group.map((product, idx) => (
                                        <div key={`${index}-${idx}`} className="flex flex-col gap-3 md:max-w-[170px]">
                                            <div className="overflow-hidden flex flex-col gap-3">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    className="w-full h-[156px] object-cover bg-gray-50 rounded-[3px]"
                                                />
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="text-gray-950 text-sm font-medium line-clamp-2 h-9">{product.name}</div>
                                                        <div className="flex flex-col">
                                                            <span className="text-base font-bold text-gray-900">${product.product_price}</span>
                                                            <span className="text-indigo-900 text-sm font-bold">+{product.product_pv}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex md:hidden w-full">
                                                        <Button size="sm" variant="tertiary" className="flex items-center gap-2 w-full" >
                                                            <Cart2Icon />
                                                            <span></span>加入購物車
                                                        </Button>
                                                    </div>
                                                    <div className="hidden md:flex w-full">
                                                        <Button size="md" variant="tertiary" className="flex items-center gap-2 w-full" >
                                                            <Cart2Icon />
                                                            <span></span>加入購物車
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}