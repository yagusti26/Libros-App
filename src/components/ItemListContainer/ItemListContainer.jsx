import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css';
import { getItems, getProdCategory } from '../../services/firestore';
import { useParams } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader'
import Banner from '../Banner/Banner';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getProdCategory(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            getItems()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
        }
      
    }, [categoryId]);

    

    return (
        <div>
            <Banner />
            <div className={s.containerCards}>
                {
                    products

                ?  <ItemList products={products} />
                : (
                    <div className='mx-auto h-96 flex justify-around'>
                        <div className='flex-1 flex justify-center items-center'>
                            <CircleLoader className='mx-auto align-middle' color="#ac2ae1" size={20}/>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default ItemListContainer;
