import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';
import s from './Detail.module.css';
// import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ product }) => {
    const {addToCart} = useContext(CartContext)

    //let navigate = useNavigate();  para usar mas

    const [cant, setCant] = useState(0);

    const onAdd = (cantidad) => {
        setCant(cantidad);
        addToCart(product, cantidad);
        //navigate('/cart');
        
    };

    return (
        <div className={s.containerDetail}>
            <div className={s.containerDetailImg}>
                <img src={product.img} alt={product.name}  />
            </div>
            <div className={s.containerDetailInfo}>
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <p>{product.description}</p>
                {cant === 0 ? (
                    <Counter onAdd={onAdd} stock={10} initial={1}/>
                ) : (
                    <Link  to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
