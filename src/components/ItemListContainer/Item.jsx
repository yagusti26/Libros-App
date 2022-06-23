import React from 'react';
import { Link } from 'react-router-dom';
import s from './ItemListContainer.module.css';

const Item = ({ product }) => {
    return (
        <div className={s.card}>
            <div>
                <img src={product.img} alt="" />
            </div>
            <div className={s.cardInfo}>
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>

                <Link to={`/item/${product.id}`}>
                    <button className={s.details}>Ver detalles</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;
