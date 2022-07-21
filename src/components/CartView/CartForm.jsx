import React, { useState } from 'react'

function CartForm({cart, totalPrice, createBuyOrder, deleteAll}) {

    const [buyer, setBuyer] = useState( {
        name: "",
        phone: "",
        email: "",
    },

    )

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        setBuyer({
            ...buyer,
            [field]: value
        })
    }

    function handleBuyOrder(evt) {
        evt.preventDefault();
        const dataOrder = {
            buyer,
            items: cart,
            total: totalPrice(),
        };

        createBuyOrder(dataOrder).then(( orderDataCreater ) => {
            deleteAll();

        })
    }


  return (
      <div className='form'>
        <form>
            <label htmlFor='username'>Usuario</label>
            <input onChange={handleChange} name='username' placeholder="Nombre"></input>

            <label htmlFor='phone'>Telefono</label>
            <input onChange={handleChange} name='phone' placeholder="Telefono"></input>

            <label htmlFor='email'>Email</label>
            <input onChange={handleChange} name='email' placeholder="Email"></input>

            <button onClick={handleBuyOrder}>Finalizar compra</button>
        </form>
    </div>
  )
}

export default CartForm