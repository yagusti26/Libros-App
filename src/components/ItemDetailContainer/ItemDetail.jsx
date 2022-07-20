import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../context/CartContext';
import Error from '../Error';
import Counter from '../Counter/Counter';
import s from './Detail.module.css';
// import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ item }) => {
    const { addToCart, cart, deleteItem, isOnCart } = useContext(cartContext);
    
    console.log(cart);

    //let navigate = useNavigate();  para usar mas

    function handleAddtoCart(cantidad) {
        addToCart(item, cantidad);
    }

    return (
        <div className={s.containerDetail}>
            <div className={s.containerDetailImg}>
                <img src={item.img} alt={item.name}  />
            </div>
            <div className={s.containerDetailInfo}>
                <h3>{item.name}</h3>
                <h4>{item.author}</h4>
                <h4>$ {item.price}</h4>
                <p>{item.description}</p>

                {/* rendering conditional  */}
                {item.stock <= 0 && <Error isWarning={true} text="Lo sentimos, no hay stock" />}
                
                {isOnCart(item.id) ? (
                    <Link className='bg-green-500 py-2 px-8 rounded-md font-bold text-white'
                    to="/cart">
                        Ir al carrito
                    </Link>

                ) : (
                    <Counter stock={item.stock} initial={1} onAdd={handleAddtoCart} />

                )}
                
                {isOnCart(item.id) && (
                    <button onClick={() => deleteItem(item.id)} className='mt-3 bg-red-500 py-2 px-8 rounded-md font-bold text-white'>
                        Eliminar del carrito
                    </button>
                )}
                
                
                
            </div>
        </div>
    );
};

export default ItemDetail;
