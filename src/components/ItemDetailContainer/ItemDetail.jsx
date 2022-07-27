import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../context/CartContext';
import Error from '../Error';
import Counter from '../Counter/Counter';
import s from './Detail.module.css';



const ItemDetail = ({ item }) => {
    const { addToCart, cart, deleteItem, isOnCart } = useContext(cartContext);
    

    function handleAddtoCart(cantidad) {
        addToCart(item, cantidad);
    }

    return (
        <div className={s.containerDetail}>
            <div className={s.containerDetailImg}>
                <img src={item.img} alt={item.name} className='rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300' />
            </div>
            <div className={s.containerDetailInfo}>
                <h3 className='title text-[40px]'>{item.name}</h3>
                <h4 className='title text-[20px]'>{item.author}</h4>
                <h4 className='mt-7 text-3xl'>$ {item.price}</h4>
                <p className='pl-[4rem] text-justify mt-4'>{item.description}</p>

               
                {item.stock <= 0 && <Error isWarning={true} text="Lo sentimos, no hay stock" />}
                
                {isOnCart(item.id) ? (
                    <Link className='bg-violet-600/75 py-2 px-8 mt-4 rounded-md font-bold text-white'
                    to="/cart">
                        Ir al carrito
                    </Link>

                ) : (
                    <Counter stock={item.stock} initial={1} onAdd={handleAddtoCart} />

                )}
                
                {isOnCart(item.id) && (
                    <button onClick={() => deleteItem(item.id)} className='mt-3 bg-[#c4a4f9] py-2 px-8 rounded-md font-bold text-white'>
                        Eliminar del carrito
                    </button>
                )}
                
                
                
            </div>
        </div>
    );
};

export default ItemDetail;
