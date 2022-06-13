import { useState } from 'react';

function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);

     const suma = () => {
       /*if(count < stock){
          setCount(count + 1);
       } */
      count !== stock && setCount(count + 1); 
    };

    const resta = () => {
      count !== initial && setCount(count - 1); 
    };

  return (
    <div className='count'>
        <button onClick={resta}> - </button>
        <span>{count}</span>
        <button onClick={suma}> + </button>
        <br />
        <br />
        <div className="add-cart">
          <button>Agregar al carrito</button>
        </div>
    </div>
  );
}

export default ItemCount