import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);



    const addToCart = (product, cantidad) => {
        if (isInCart(product.id)) {
            sumarCantidad(product, cantidad);
        } else {
            setCart([...cart, { ...product, cantidad }]);
        }
        
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);
    

    const sumarCantidad = (product, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === product.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const totalPrice = () => {
        let total = 0;
        cart.forEach((product) => (total = total + (product.sumarCantidad * product.price)));
        return total;
    };

    const totalUnidades = () => {
        return 5;
    };

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const deleteAll = (_) => setCart([]);

    return (
        <CartContext.Provider value={{ 
            addToCart,
            cart,
            deleteItem,
            totalPrice,
            deleteAll,
            totalUnidades,
            }}>
            {children}
        </CartContext.Provider>
    );
};
