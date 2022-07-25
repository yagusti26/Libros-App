import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


function Counter({ stock, initial, onAdd }) {

  const MySwal = withReactContent(Swal)
  const [count, setCount] = useState(initial)


  function suma() {

    (count < stock)
      ? setCount(count + 1)
      : MySwal.fire(
        '¡Lo sentimos! ',
        'Sin stock, por favor vuelve a consultar en unos días.',
        'warning',
      )

  }

  function resta() {

    (count > initial) && setCount(count - 1)

  }




  return (
    <>
      <div className="container mt-5">

        <div className="flex justify-evenly items-center p-8 border-1 ">
          <button className="text-2xl font-bold bg-violet-400 text-white py-1 px-2 rounded-md" onClick={resta}>-</button>
          <span className="text-xl font-extrabold" >{count}</span>
          <button className="text-2xl font-bold bg-violet-400 text-white py-1 px-2 rounded-md" onClick={suma}>+</button>
        </div>

        <div>
          <button onClick={() => onAdd(count)} className='mt-3 bg-violet-500 py-2 px-8 rounded-md font-bold text-white' >Agregar al Carrito</button>
        </div>

      </div>
    </>
  )
}
export default Counter