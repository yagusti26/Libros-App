import React, { useEffect, useState } from 'react';
import { traerProductos } from '../../data/products';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => console.log(error));
    }, [categoryId]);

    return (
        <div className={s.containerCards}>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
