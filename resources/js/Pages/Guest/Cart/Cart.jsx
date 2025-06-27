import { DeleteIcon } from "@/Components/Outline";
import { formatAmount } from "@/Composables";
import GuestLayout from "@/Layouts/GuestLayout";
import { Checkbox, InputNumber } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CartItem from "./CartItem";
import toast from "react-hot-toast";
import { Link, router } from "@inertiajs/react";
import EmptyCart from "@/Components/Illustration/EmptyCart";
import Button from "@/Components/Button";

export default function Cart({ cartItem }) {

    const [cartItems, setCartItems] = useState(cartItem);
    const updateTimers = useRef({});
    const [selectedItems, setSelectedItems] = useState([]);
    
    const toggleItem = (itemId) => {
        setSelectedItems(prev => 
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)  // remove
                : [...prev, itemId]                 // add
        );
    };

    const isAllSelected = Array.isArray(cartItem) && cartItem.length > 0 && selectedItems.length === cartItem.length;

    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedItems([]); // unselect all
        } else {
            setSelectedItems(cartItem.map(item => item.id)); // select all
        }
    };

    const selectedTotal = useMemo(() => {
        if (!Array.isArray(cartItems)) return 0;
    
        return cartItems
            .filter(item => selectedItems.includes(item.id))
            .reduce((sum, item) => sum + parseFloat(item.product.product_price) * item.quantity, 0);
    }, [cartItems, selectedItems]);
      


    const increaseQty = (index) => {
        const current = cartItems[index].quantity;
        handleQtyChange(current + 1, index);
    };
    
    const decreaseQty = (index) => {
        const current = cartItems[index].quantity;
        handleQtyChange(current - 1, index);
    };

    const handleQtyChange = (value, index) => {
        if (!value || value < 1) return;
    
        const updatedItems = [...cartItems];
        updatedItems[index].quantity = value;
        setCartItems(updatedItems);
    
        const itemId = updatedItems[index].id;
    
        // Clear any existing timer for this item
        if (updateTimers.current[itemId]) {
            clearTimeout(updateTimers.current[itemId]);
        }
    
        // Set a new debounce timer
        updateTimers.current[itemId] = setTimeout(() => {
            axios.post('/guest-update-cart', {
                cart_item_id: itemId,
                quantity: value,
            })
    
            // Clear the timer ref after sending
            delete updateTimers.current[itemId];
        }, 2000); // 3 seconds
    };

    useEffect(() => {
        return () => {
            Object.values(updateTimers.current).forEach(clearTimeout);
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.post('/guest-delete-cart', { cart_item_id: id });
            setCartItems(prev => prev.filter(i => i.id !== id));
            router.reload({ only: ['cartItem'] });
            toast.success('已刪除商品!', {
                title: '已刪除商品!',
                duration: 3000,
                variant: 'variant1',
            });
        } catch {
            toast.error('刪除失敗!', {
                title: '刪除失敗!',
                duration: 3000,
                variant: 'variant1',
            });
        }
    };

    const handleCheckout = () => {
        if (selectedItems.length === 0) return;
    
        router.get('/guest-checkout', {
            cart_items: selectedItems, // this will be an array of cart_item_ids
        });
    };
    

    return (
        <GuestLayout>
            <div className="py-6 flex flex-col gap-6 min-h-[70vh] max-h-[85vh] overflow-scroll">
                {/* map cart item */}
                {
                    cartItem ? (
                        <>
                            <div className="px-4">
                                <Checkbox 
                                    className="text-indigo-900 font-medium text-sm"
                                    checked={isAllSelected}
                                    indeterminate={selectedItems.length > 0 && !isAllSelected}
                                    onChange={toggleSelectAll}
                                >
                                    選擇全部商品 ({selectedItems.length})
                                </Checkbox>
                            </div>
                            {
                                cartItem.length > 0 ? (
                                    <div className="flex flex-col">
                                        {
                                            cartItem.map((item, index) => (
                                                <CartItem
                                                    key={item.id}
                                                    item={item}
                                                    index={index}
                                                    onDelete={handleDelete}
                                                    selectedItems={selectedItems}
                                                    toggleItem={toggleItem}
                                                    handleQtyChange={handleQtyChange}
                                                    increaseQty={increaseQty}
                                                    decreaseQty={decreaseQty}
                                                />
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        No Item Added
                                    </div>
                                )
                            }
                        </>
                    ) : (
                        <div className="px-4 flex flex-col justify-center items-center min-h-[60vh]">
                            <div className="py-12 px-9">
                                    <EmptyCart />
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col items-center gap-3">
                                        <div className="text-gray-950 text-xl font-bold">購物車還空著呢</div>
                                        <div className="text-gray-500 text-center text-base">去看看有沒有讓您心動的商品吧！</div>
                                </div>
                                <Link href={route('products')}>
                                    <Button size="lg" className="w-full">前往選購</Button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                selectedItems.length > 0 && (
                    <div className="sticky bottom-0 border-t border-gray-100 bg-white flex items-center justify-between gap-4 py-5 px-4">
                        <div className="flex items-center gap-1">
                            <div>應付</div>
                            <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">$ {formatAmount(selectedTotal)}</div>
                        </div>
                        <Button size="lg" onClick={handleCheckout}>
                            前往結帳
                        </Button>
                    </div>
                )
            }
        </GuestLayout>
    )
}