import React, { useContext, useState } from 'react'
import { createBuyOrder } from '../../services/firestore';
import { useForm } from 'react-hook-form';
import cartContext from '../../context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartForm = () => {
    const MySwal = withReactContent(Swal)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { cart, totalPrice, deleteAll } = useContext(cartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        setBuyer({
            ...buyer,
            [field]: value
        });
    }

    function handleBuyOrder(evt) {
        const dataOrder = {
            buyer,
            items: cart,
            total: totalPrice()
        }

        MySwal.fire({
            title: 'Estamos realizando la compra',
            text: 'Procesando tus datos',
            showConfirmButton: false,
            timerProgressBar: true,
        });

        createBuyOrder(dataOrder).then((orderDataCreated) => {
            deleteAll();

            MySwal.fire({
                icon: 'success',
                title: '¡Muchas gracias por tu compra! Esperamos que vuelvas pronto',
                text: 'Tu número de compra es: ' + orderDataCreated.id,
            });
        });
    }



  return (
    <div className='p-5 bg-gray-700 rounded overflow-visible'>
        <div className='flex align-middle justify-between text-lg mb-3 border-double border-b-4'>
            <h1 className='mb-4 text-xm text-gray-200 font-bold'>Por favor, ingresa tus datos aquí</h1>
        </div>

        <div>
            <form onSubmit={handleSubmit(handleBuyOrder)} className='flex flex-col'>
                <label className='text-xs text-gray-400' htmlFor='name'>Nombre y Apellido</label>
                <input {...register("name", { required: true })}
                aria-required
                className='text-center rounded mb-5 bg-slate-300 border-solid'
                onChange={handleChange}
                type='text'
                name='name' 
                />
                {errors.name?.type === 'required' && <span className='text-red-500'>Nombre y Apellido de contacto</span>}

                <label className='text-xs text-gray-400' htmlFor='phone'>Número de celular</label>
                <input {...register("phone", { required: true })}
                aria-required
                className='text-center rounded mb-5 bg-slate-300 border-solid'
                onChange={handleChange}
                type='phone'
                name='phone' 
                />
                {errors.phone?.type === 'required' && <span className='text-red-500'>Número de celular</span>}


                <label className='text-xs text-gray-400' htmlFor='email'>Email</label>
                <input {...register("email", { required: true })}
                aria-required
                className='text-center rounded mb-5 bg-slate-300 border-solid'
                onChange={handleChange}
                type='email'
                name='email' 
                />
                {errors.email?.type === 'required' && <span className='text-red-500'>Email</span>}
                {errors.email?.type === 'pattern' && <span className='text-red-500'>Email inválido, intenta de nuevo</span>}

                <span class="text-xs text-gray-400 ">Tipo de tarjeta</span>
                    <div class="overflow-visible flex justify-between items-center mt-2">

            				<div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">

            					<span class="italic text-lg font-medium text-gray-200 underline">VISA</span>

            					<div class="flex justify-between items-center pt-4 ">
            						
            						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>

            					</div>

            					<div class="flex justify-between items-center mt-3">
             						
            						<span class="text-xs  text-gray-200">Nombre y apellido</span>
            						<span class="text-xs  text-gray-200">12/22</span>
            					</div>


            					
            				</div>






            				<div class="flex justify-center  items-center flex-col">

            					<img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" />
            					<span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>
            					
            				</div>
            				
            		</div>
                        <div class="flex justify-center flex-col pt-3">
            				<label class="text-xs text-gray-400 ">Número de tarjeta</label>
            				<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="****     ****      ****      ****" />
            			</div>
                        <div class="grid grid-cols-3 gap-2 pt-2 mb-3">

            				<div class="col-span-2 ">

            					<label class="text-xs text-gray-400">Fecha de vencimiento</label>
            					<div class="grid grid-cols-2 gap-2">

            						<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mes" />
            						<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="año" />
            						
            					</div>


            					
            				</div>

            				<div class="">
            					<label class="text-xs text-gray-400">CVV</label>
            					<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX" />
            					
            				</div>
            				
            			</div>


                <button type='submit' className='bg-blue-500 py-2 px-8 rounded-md font-bold text-white mt-5'>Finalizar compra</button>

            </form>
        </div>
    </div>
  )
}
