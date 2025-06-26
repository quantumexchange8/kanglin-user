import GuestLayout from "@/Layouts/GuestLayout";
import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProductsListing({ category }) {

    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [getProduct, setGetProduct] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6); // default 6 per page

    const fetchProduct = async () => {
        setIsLoading(true);

        try {

            const response = await axios.get('/getCategoryProduct', {
                params: {
                    id: category.id,
                    page: page,
                    per_page: pageSize,
                }
            })

            setGetProduct(response.data.data); // assuming paginated data in `data`
            setTotal(response.data.total);     // assuming total count returned
            
        } catch (error) {
            console.error('error', error)
        }
    } 

    useEffect(() => {
        fetchProduct();
    }, [page, pageSize]);

    const handlePageChange = (newPage, newPageSize) => {
        setPage(newPage);
        setPageSize(newPageSize);
    };


    const productDetails = (product) => {
        window.location.href = `/product-detail/${product.id}`; // Redirect to product details page
    }

    return (
        <GuestLayout>
            <div className="w-full flex flex-col min-h-[70vh]">
                {/* Header */}
                <div className="md:hidden text-lg font-bold bg-linear bg-clip-text text-transparent pb-2 pt-6 px-4">
                    {category.name}
                </div>

                {/* web 768/1024 topbar */}
                <div className="hidden md:flex xl:hidden sticky top-[81px] z-10 bg-white py-6 px-[60px] justify-between items-center border-b-4 border-[#d7dbe033]">
                    <div className="text-xl font-bold bg-linear bg-clip-text text-transparent">
                        {category.name}
                    </div>
                    {/* <div className="flex items-center gap-3 max-w-[508px] w-full">
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
                    </div> */}
                </div>

                {/* content */}
                <div className="flex flex-col">
                    {
                        getProduct?.length > 0 ? (
                            <div className="flex flex-col gap-5">
                                <div className="p-4 grid grid-cols-2 md:flex flex-wrap gap-4">
                                    {
                                        getProduct.map((product, index) => (
                                            <div key={index} className="flex flex-col gap-3 md:max-w-[200px] w-full cursor-pointer hover:bg-gray-25 " onClick={() => productDetails(product)}>
                                                {/* product img */}
                                                <div className="w-full flex bg-gray-50 rounded-[3px] py-3 px-4 h-[156px]">
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
                                </div>
                                {/* Pagination */}
                                <div className="w-full px-4 pb-6">
                                    <Pagination
                                        current={page}
                                        pageSize={pageSize}
                                        total={total}
                                        onChange={handlePageChange}
                                        showSizeChanger
                                        pageSizeOptions={['6', '10', '20', '50']}
                                        align="center"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                            
                            </>
                        )

                    }
                </div>
            </div>
        </GuestLayout>
    )
}