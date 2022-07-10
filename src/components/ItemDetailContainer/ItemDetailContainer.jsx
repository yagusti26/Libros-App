import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { traerUnProducto } from '../../services/firestore';
import CircleLoader from 'react-spinners/CircleLoader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const { itemId } = useParams();

    useEffect(() => {
        traerUnProducto(itemId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [itemId]);


    if(isLoading){
        return (
            <div className='flex flex-wrap p-5 items-center justify-center'>
               <CircleLoader className='mx-auto align-middle' color="#ac2ae1" size={20} />
            </div>
        );
    }

    return (
        <>
        <div className="text-center container mx-auto mt-5 h-screen">  
            {product.id && <ItemDetail item={product} />}
        </div>
    </>
    );
};



export default ItemDetailContainer;
