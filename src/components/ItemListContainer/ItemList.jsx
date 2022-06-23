import React from 'react';
import Item from './Item';
import s from './ItemListContainer.module.css';

const ItemList = ({ products }) => {
    return (
        <div className={s.cards}>
            {products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;
