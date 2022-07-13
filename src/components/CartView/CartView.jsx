import React from 'react'
import { useContext } from 'react';
import cartContext from '../../context/CartContext'


const CartView = () => {
    
    const { cart, deleteItem, totalPrice, deleteAll } = useContext(cartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div className="empty">Tu carrito está vacio</div>
            ) : (
                <>
                    <div className="cart">
                        {cart.map((product) => (
                            <div className="infoCart" key={product.id}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    width="70px"
                                />
                                <h2>{product.name}</h2>
                                <h2>${product.price}</h2>
                                <h2>Cantidad: {product.qnty}</h2>
                                <button onClick={() => deleteItem(product.id)}>
                                    Eliminar
                                </button>
                                <p>Subtotal: <span className='text-green-600'>$
                                    { product.price * product.qntyInCart}
                                    </span></p>
                            </div>
                        ))}
                        <div className="cartBtn">
                            <h2>Total: ${totalPrice().toFixed(2)}{" "}</h2>
                            <button onClick={deleteAll}>Vaciar carrito</button>
                        </div>
                    </div>
                    
                </>
            )}
        </>
    );
};

export default CartView;