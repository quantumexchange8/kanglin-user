import Button from "@/Components/Button";
import { FilterIcon, RefreshIcon, SearchIcon, XIcon } from "@/Components/Icon";
import SearchInput from "@/Components/SearchInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Checkbox, Menu, Select, Slider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProductsListing() {

    const { t } = useTranslation();
    const [filterOptions, setFilterOptions] = useState('current');
    const [filterCollapse, setFilterCollapse] = useState();
    const [filterCategories, setFilterCategpries] = useState();
    const [searchFilter, setSearchFilter] = useState('');
    const [getCategories, setGetCategories] = useState([]);
    const [filterPvValue, setFilterPvValue] = useState([0, 1000]); // Default range for PV filter
    const [filterNTValue, setFilterNTValue] = useState([0, 5000]); // Default range for NT filter
    
    const fetchCategories = async () => {

        try {
            const response = await axios.get('/getCategories');

            setGetCategories(response.data);

        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const clearFilter = () => {
        setSearchFilter('');
    }

    const productDetails = (product) => {
        window.location.href = `/product-detail/${product.id}`; // Redirect to product details page
    }

    return (
        <GuestLayout>
            <div className="w-full flex flex-col min-h-screen xl:bg-gray-25">
                {/* mobile topbar */}
                <div className="md:hidden text-lg font-bold bg-linear bg-clip-text text-transparent pb-2 pt-6 px-4">
                    {t('all_product')}
                </div>
                <div className="md:hidden sticky top-[81px] z-10 bg-white px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div className="max-w-[152px] w-full">
                            <Select
                                defaultValue="current"
                                value={filterOptions}
                                onChange={(value) => setFilterOptions(value)}
                                options={[{ value: 'current', label: '默認' }]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2.5"><FilterIcon /></div>
                            <div className="p-2.5"><SearchIcon /></div>
                        </div>
                    </div>
                </div>

                {/* web 768/1024 topbar */}
                <div className="hidden md:flex xl:hidden sticky top-[81px] z-10 bg-white py-6 px-[60px] justify-between items-center border-b-4 border-[#d7dbe033]">
                    <div className="text-xl font-bold bg-linear bg-clip-text text-transparent">
                        {t('all_product')}
                    </div>
                    <div className="flex items-center gap-3 max-w-[508px] w-full">
                        <Select
                            defaultValue="current"
                            value={filterOptions}
                            onChange={(value) => setFilterOptions(value)}
                            options={[{ value: 'current', label: '默認' }]}
                            className="antd-select-custom focus:ring-offset-transparent max-w-[170px] w-full"
                        />
                        <div className="border border-gray-200 rounded-[5px] flex gap-2 items-center py-3 px-4">
                            <FilterIcon className='w-4 h-4' />
                            <span className="text-sm text-gray-950 font-medium">篩選</span>
                            <span></span>
                        </div>
                        <SearchInput 
                            withIcon
                            IconComponent={SearchIcon}
                            placeholder='Search'
                            value={searchFilter}
                            onChange={(e) => setSearchFilter(e.target.value)}
                            dataValue={searchFilter != ''}
                            clearfunc={
                                <div className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer" onClick={clearFilter}>
                                    <XIcon className="w-4 h-4" />
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className="flex gap-5 xl:px-20 xl:py-7">
                    {/* filter bar */} {/* web 1440 topbar */}
                    <div className="hidden xl:flex flex-col gap-4 max-w-60 w-full">
                        <div className="bg-white flex flex-col w-full border border-gray-100 rounded-[5px]">
                            <div className="p-4 text-lg font-bold bg-linear bg-clip-text text-transparent border-b border-gray-50">搜你所愛</div>
                            <div className="p-4 flex items-center gap-3">
                                <SearchInput 
                                    withIcon
                                    IconComponent={SearchIcon}
                                    placeholder='搜索'
                                    value={searchFilter}
                                    onChange={(e) => setSearchFilter(e.target.value)}
                                    dataValue={searchFilter != ''}
                                    clearfunc={
                                        <div className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer" onClick={clearFilter}>
                                            <XIcon className="w-4 h-4" />
                                        </div>
                                    }
                                    className="w-[136px]"
                                />
                                <Button size="md">搜索</Button>
                            </div>
                        </div>
                        <div className="bg-white flex flex-col border border-gray-100 rounded-[5px]">
                            <div className="p-4 flex items-center justify-between border-b border-gray-100">
                                <div className="text-lg font-bold bg-linear bg-clip-text text-transparent">篩選</div>
                                <div className="flex items-center gap-1.5">
                                    <span><RefreshIcon /></span>
                                    <span className="text-gray-700 text-xs font-medium underline underline-offset-2">清空篩選</span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-3 border-b border-gray-50">
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-950 text-base font-bold">商品分類 ({0})</div>
                                    <div></div>
                                </div>
                                <div>
                                    <Checkbox.Group 
                                        options={getCategories.map(category => ({
                                            label: category.name,
                                            value: category.id
                                        }))}
                                        className="flex flex-col gap-4"
                                        onChange={(checkedValues) => setFilterCategpries(checkedValues)}
                                    />
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-3 border-b border-gray-50">
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-950 text-base font-bold">PV </div>
                                    <div></div>
                                </div>
                                <div>
                                    <Slider 
                                        range
                                        min={0}
                                        max={8000}
                                        defaultValue={[0, 1000]}
                                        value={filterPvValue}
                                        onChange={(value) => setFilterPvValue(value)}
                                    />
                                </div>     
                            </div>
                            <div className="p-4 flex flex-col gap-3 border-b border-gray-50">
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-950 text-base font-bold">價格 (NT$) </div>
                                    <div></div>
                                </div>
                                <div>
                                    <Slider 
                                        range
                                        min={0}
                                        max={10000}
                                        defaultValue={[0, 5000]}
                                        value={filterNTValue}
                                        onChange={(value) => setFilterNTValue(value)}
                                    />
                                </div>     
                            </div>
                            <div className="p-4">
                                <Button size="md" className="w-full" >確認</Button>
                            </div>
                        </div>
                    </div>
                    {/* content */}
                    <div className="w-full flex flex-col bg-white">
                        <div className="p-5 hidden xl:flex justify-between items-center border-b border-gray-50 ">
                            <div className="text-xl font-bold bg-linear bg-clip-text text-transparent">全部商品</div>
                            <div></div>
                        </div>
                        {
                            getCategories.length > 0 ? (
                                <div className="flex flex-col md:px-[60px] xl:p-0">
                                    {
                                        getCategories.map((category, index) => (
                                            <div key={index} className="flex flex-col border-b border-gray-50 md:py-8 xl:p-5">
                                                {/* category name */}
                                                <div className="pt-4 px-4 md:p-0 flex flex-col gap-1">
                                                    <span className="text-gray-950 text-base md:text-lg font-bold">{category.name}</span>
                                                    <span className="text-gray-400 text-xs md:text-sm font-medium">{category.description ? category.description : '-'}</span>
                                                </div>
                                                {/* category's product */}
                                                <div className="p-4 grid grid-cols-2 md:flex flex-wrap gap-4">
                                                    {
                                                        category.products.length > 0 ? (
                                                            <>
                                                                {
                                                                    category.products.map((product, idx) => (
                                                                        <div key={idx} className="flex flex-col gap-3 md:max-w-[200px] w-full cursor-pointer hover:bg-gray-25 " onClick={() => productDetails(product)}>
                                                                            {/* product img */}
                                                                            <div className="w-full bg-gray-50 rounded-[3px] py-3 px-4 h-[156px]">
                                                                                <img 
                                                                                    src={product.product_thumbnail} 
                                                                                    alt={product.name} 
                                                                                    className="w-full object-cover "
                                                                                />
                                                                            </div>
                                                                            <div className="flex flex-col gap-2">
                                                                                <div className="text-gray-950 text-sm font-medium line-clamp-2 h-9">{product.name}</div>
                                                                                <div className="flex flex-col">
                                                                                    <span className="text-base font-bold text-gray-900">${product.product_price}</span>
                                                                                    <span className="text-indigo-900 text-sm font-bold">+{product.product_pv}</span>
                                                                                </div>
                                                                                <div className="text-gray-950 text-xxs">
                                                                                    {0} 人收藏此商品
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                            
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <>
                                
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}