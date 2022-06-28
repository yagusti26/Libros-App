import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const prueba = () => {
        console.log('Desde el contexto');
    };

    const addToCart = (product, cantidad) => {
        if (isInCart(product.id)) {
            console.log('en carrito');
        } else {
            setCart([...cart, { ...product, cantidad }]);
        }
        
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, prueba, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
