// contexts/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartQty, setCartQty] = useState(0);

    const guestToken = localStorage.getItem('guest_token');

    const fetchCartQty = async () => {
        if (!guestToken) return;
        try {
            const response = await axios.get('/getQuantity', {
                params: {
                    uuid: guestToken,
                },
            });
            setCartQty(response.data);
        } catch (err) {
            console.error('Failed to fetch cart quantity:', err);
        }
    };

    useEffect(() => {
        fetchCartQty();
    }, []);

    return (
        <CartContext.Provider value={{ cartQty, setCartQty, fetchCartQty }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
