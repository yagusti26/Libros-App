import React from 'react'
import { useContext } from 'react';
import cartContext from '../../context/CartContext'
import { createBuyOrder } from '../../services/firestore';
import { CartForm } from './CartForm';
import { Link } from 'react-router-dom';


const CartView = () => {
    
    const { cart, deleteItem, totalPrice, deleteAll } = useContext(cartContext);

    if (cart.length === 0) {
        return (
            <main className="h-screen">
                <div className="bg-gray-100 h-screen">
                    <h1 className="text-center font-medium text-violet-800 text-4xl p-40">El carrito está vacio</h1>
                    <div className="flex justify-center p-7">
                    <Link to="/" className="bg-gray-600 py-4 px-10 text-1xl rounded-md font-bold text-white mt-5" >
                        Volver al Inicio
                    </Link>
                    </div>
                </div>
            </main>
        )
    }
        return (  
            <div className="h-[100%] bg-gray-300">
                <div className='py-12'>
                    <div className='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl'>
                        <div className='md-flex'>
                            <div className="w-full p-4 px-5 py-5">
                                <div className="md:grid md:grid-cols-3 gap-2 ">
                                    <div className="col-span-2 p-5">
                                        <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                        {cart.map((product) => (
                                        <div class="flex justify-between items-center mt-6 pt-6">
                                            <div className='flex  items-center' key={product.id}>
                                                <img className="w-[30%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                                                    src={product.img}
                                                    alt={product.name}
                                                    
                                                />
                                                <div className='flex flex-col ml-3'>
                                                    <span className='md:text-md font-medium'>{product.name}</span>
                                                    <span className='text-xs font-light text-gray-400'>Cantidad: {product.qnty}</span>
                                                    
                                                </div>
                                            </div>
                                                <div className='flex justify-center items-center'>
                                                    
                                                    <div className='pr-4 flex'>
                                                        <button onClick={() => deleteItem(product.id)} className="bg-violet-500 py-2 px-8 rounded-md font-bold text-white mt-5">
                                                            Eliminar
                                                        </button>
                                                        
                                                    </div>
                                                

                                                    <div className='pr-8'>
                                                    <p>Subtotal:{" "} 
                                                        <span className='text-xs font-light text-gray-400'>
                                                            ${product.price * product.qnty}
                                                        </span>
                                                    </p>
                                                        
                                                    </div>
                                                    <div>
            						                    <i class="fa fa-close text-xs font-medium"></i>
            					                    </div>
                                                </div>    
                                                
                                            
                                        </div>
                                        ))}
                                        <div class="flex justify-between items-center mt-6 pt-6 border-t"> 
            				<div class="flex items-center">
            					<i class="fa fa-arrow-left text-sm pr-2"></i>
            					<button onClick={deleteAll} class="text-md  font-medium text-blue-500">Vaciar carrito</button>
                                
            				</div>

            				<div class="flex justify-center items-end">
                               
            					<span class="text-sm font-medium text-gray-400 mr-1">Total:</span>
            					<span class="text-lg font-bold text-gray-800 "> ${totalPrice().toFixed(2)}{" "}</span>
            					
            				</div>
            				
            			</div>
                                    </div>
                                    <div>
                                        

                                        <CartForm cart={cart} total={totalPrice} deleteAll={deleteAll} createBuyOrder={createBuyOrder} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    
                        
                    
            </div>  
                
        )
};

export default CartView;