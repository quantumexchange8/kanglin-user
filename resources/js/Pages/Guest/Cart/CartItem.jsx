import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Checkbox, InputNumber } from "antd";

export default function CartItem({ item, index, selectedItems, toggleItem, onDelete, handleQtyChange, increaseQty, decreaseQty }) {
    const x = useMotionValue(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleDragEnd = (event, info) => {
        const distance = info.offset.x;

        if (distance < -60) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <div className="relative overflow-hidden">
            {/* Delete background button */}
            {isOpen && (
                <div className="absolute top-0 right-0 h-full flex items-center px-5 bg-red-500 text-white z-0">
                    <button onClick={handleDelete}>刪除</button>
                </div>
            )}

            {/* Swipeable product */}
            <motion.div
                className="relative z-10 py-5 px-4 bg-white flex items-center gap-4"
                drag="x"
                style={{ x }}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{ x: isOpen ? -80 : 0 }}
                transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: "easeInOut",
                }}            
            >
                {/* Checkbox */}
                <div>
                    <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleItem(item.id)}
                    />
                </div>

                {/* item details */}
                <div className="flex gap-3 w-full">
                    {/* Product image */}
                    <div className="max-w-20 max-h-20 w-full h-full overflow-hidden border border-gray-100 rounded bg-gray-25">
                            {
                            item.product.product_thumbnail  ? (
                                <img src={item.product.product_thumbnail} alt={item.product.product_thumbnail} className="object-cover w-full h-full" />
                            ) : (
                                <img src="" alt="no image found" />
                            )
                        }
                    </div>
                    {/* Product details */}
                    <div className="flex flex-col justify-between w-full h-20">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-900 font-medium text-base">{item.product.name}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="bg-linear bg-clip-text text-transparent text-base font-bold">
                                ${Number(item.product.product_price * item.quantity).toLocaleString()}
                            </div>
                            <div className="max-w-32 w-full">
                                <InputNumber 
                                    value={item.quantity}
                                    onChange={(value) => handleQtyChange(value, index)}
                                    addonBefore={
                                        <div className="text-gray-300 p-1.5 cursor-pointer select-none rounded-l-[5px] bg-white hover:bg-gray-50" onClick={() => decreaseQty(index)} >-</div>
                                    }
                                    min={1}
                                    max={item.product.stock}
                                    defaultValue={1}
                                    addonAfter={
                                        <div className="text-gray-300 p-1.5 cursor-pointer select-none rounded-r-[5px] bg-white hover:bg-gray-50" onClick={() => increaseQty(index)} >+</div>
                                    }
                                    className="custom-input-number-mobile"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
