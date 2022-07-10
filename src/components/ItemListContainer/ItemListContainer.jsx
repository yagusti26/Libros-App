import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css';
import { getItems } from '../../services/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={s.containerCards}>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
