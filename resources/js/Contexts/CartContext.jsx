// src/contexts/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    // 初始化时获取购物车数量
    useEffect(() => {
        fetchCartCount();
    }, []);

    const fetchCartCount = async () => {
        try {
            const guestToken = localStorage.getItem('guest_token');
            const response = await axios.get('/getQuantity', {
                params: { guest_token: guestToken }
            });
            setCartCount(response.data.count || 0);
        } catch (error) {
            console.error('获取购物车数量失败:', error);
        }
    };

    // 暴露给其他组件的值
    const value = {
        cartCount,
        updateCartCount: fetchCartCount, // 直接复用获取逻辑
        incrementCartCount: (amount = 1) => setCartCount(prev => prev + amount)
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart必须在CartProvider内使用');
    }
    return context;
};