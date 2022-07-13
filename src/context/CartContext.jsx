import React, { useState, createContext } from 'react';

const cartContext = createContext();

export function CartProvider(props){
    const [cart, setCart] = useState([]);

    function addToCart(product, cantidad) {
        if (isOnCart(product.id)){
            const idToAdd = product.id;
            let itemToAdd = cart.find( eachItem => eachItem.id === idToAdd)
            itemToAdd.qnty += cantidad;
            
            let newCart = cart.filter((eachItem) => eachItem.id !== product.id);

            setCart([...newCart, {...itemToAdd }]);

        } else {
            setCart([...cart, {...product, qnty: cantidad}]);
        }
    };

    function isOnCart(id) {
        return cart.some((product) => product.id === id);
    } 

    function qntyInCart() {
        let total = 0;
        cart.forEach((product) => (total = total + product.qnty));
        return total;
    }
    

    function totalPrice() {
        let total = 0;
        cart.forEach((product) => (total = total + (product.qnty * product.price)));
        return total;
    }

    const totalUnidades = () => {
        return 5;
    };

    function deleteItem(id) {
        let newCart = (cart.filter((product) => product.id !== id));
        setCart(newCart);
    };

    function deleteAll() {
        setCart([]);
    }

    return (
        <cartContext.Provider
            value={{
                addToCart,
                qntyInCart,
                isOnCart,
                cart,
                deleteItem,
                totalPrice,
                deleteAll,
                totalUnidades,
            }}
        >
            {props.children}
        </cartContext.Provider>
    );
};
export default cartContext;