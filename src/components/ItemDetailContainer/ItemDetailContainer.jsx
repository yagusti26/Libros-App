import React, { useEffect, useState } from 'react';
import { traerProducto } from '../../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='flex flex-wrap p-5 items-center justify-center'>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
