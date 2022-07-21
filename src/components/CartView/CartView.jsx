import React from 'react'
import { useContext } from 'react';
import cartContext from '../../context/CartContext'
import { createBuyOrder } from '../../services/firestore';
import CartForm from './CartForm';


const CartView = () => {
    
    const { cart, deleteItem, totalPrice, deleteAll } = useContext(cartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div className="">Tu carrito está vacio</div>
            ) : (
                <>
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        {cart.map((product) => (
                            <div  key={product.id}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    width="90px"
                                />
                                <div className='mb-5 py-3 text-center'>
                                    <h2 className='text-3x1 text-gray-900 mt-2 mb-4 font-medium title-font'>{product.name}</h2>
                                    <h2 className='mt-4 text-green-700 text-md font-bold'>${product.price}</h2>
                                    <h2>Cantidad: {product.qnty}</h2>
                                    <button onClick={() => deleteItem(product.id)}>
                                        Eliminar
                                    </button>
                                    <p>Subtotal: <span className='text-green-600'>$
                                        { product.price * product.qntyInCart}
                                        </span></p>
                                </div>
                            </div>
                        ))}
                        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                            <h2>Total: ${totalPrice().toFixed(2)}{" "}</h2>
                            <button onClick={deleteAll}>Vaciar carrito</button>
                        </div>

                        <CartForm cart={cart} total={totalPrice} deleteAll={deleteAll} createBuyOrder={createBuyOrder} />
                    </div>
                    
                </>
            )}
        </>
    );
};

export default CartView;