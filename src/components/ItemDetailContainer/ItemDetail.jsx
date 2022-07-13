import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Error from '../Error';
import Counter from '../Counter/Counter';
import s from './Detail.module.css';
// import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ product }) => {
    const { addToCart, cart, deleteItem, isOnCart } = useContext(CartContext);
    
    console.log(cart);

    //let navigate = useNavigate();  para usar mas

    function handleAddtoCart(cantidad) {
        addToCart(product, cantidad);
    }

    return (
        <div className={s.containerDetail}>
            <div className={s.containerDetailImg}>
                <img src={product.img} alt={product.name}  />
            </div>
            <div className={s.containerDetailInfo}>
                <h3>{product.name}</h3>
                <h4>{product.author}</h4>
                <h4>$ {product.price}</h4>
                <p>{product.description}</p>

                {/* rendering conditional  */}
                {product.stock <= 0 && <Error isWarning={true} text="Lo sentimos, no hay stock" />}
                
                {isOnCart(product.id) ? (
                    <Link className='bg-green-500 py-2 px-8 rounded-md font-bold text-white'
                    to="/cart">
                        Ir al carrito
                    </Link>

                ) : (
                    <Counter stock={product.stock} initial={1} onAdd={handleAddtoCart} />

                )}
                
                {isOnCart(product.id) && (
                    <button onClick={() => deleteItem(product.id)} className='mt-3 bg-red-500 py-2 px-8 rounded-md font-bold text-white'>
                        Eliminar del carrito
                    </button>
                )}
                
                
                
            </div>
        </div>
    );
};

export default ItemDetail;
