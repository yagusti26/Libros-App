import React, { useEffect, useState } from 'react';
import { traerProducto } from '../../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='flex flex-wrap p-5 items-center justify-center'>
            { isLoading
            ? <h3>Cargando...</h3>
            : <ItemDetail product={product} />
            }
        </div>
    );
};

export default ItemDetailContainer;
