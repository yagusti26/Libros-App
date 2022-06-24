import React from 'react';
import Counter from '../Counter/Counter';
import s from './Detail.module.css';

const ItemDetail = ({ product }) => {
    return (
        <div className={s.containerDetail}>
            <div className={s.containerDetailImg}>
                <img src={product.img} alt={product.name}  />
            </div>
            <div className={s.containerDetailInfo}>
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <Counter />
            </div>
        </div>
    );
};

export default ItemDetail;
