import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getOneItem } from '../../services/firestore'
import Error from '../Error';
import CircleLoader from 'react-spinners/CircleLoader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    
    const { productId } = useParams();

    useEffect(() => {
        getOneItem(productId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
                setIsError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [productId]);


    if(isLoading){
        return (
            <div className='flex flex-wrap p-5 items-center justify-center'>
                <div className='flex-1 flex justify-center items-center'>
                    <CircleLoader className='mx-auto align-middle' color="#ac2ae1" size={20} />
               </div>
            </div>
        );
    }

    return (
        <>
        <div className="text-center container mx-auto mt-5 h-screen">  
            <div className='font-bold text-pink-600 text-4x1 mb-2'>
                {isError && <Error text={isError} />}
                {product.id && <ItemDetail item={product} />}
            </div>
        </div>
    </>
    );
};



export default ItemDetailContainer;
