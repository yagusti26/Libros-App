import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import s from './ItemListContainer.module.css';


const Item = ({ product }) => {
    const detailUrl = `/book/${product.id}`;
    return (
        <Link to={detailUrl}>
            <div className={s.card}>
                <div>
                    <img src={product.img} alt="" className='w-[100%]'/>
                </div>
                <div className='flex relative w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col bg-[#5b21b6]'>
                    <h3 className='text-white font-medium text-[17.5px]'>{product.name}</h3>
                    <h4 className='text-white font-medium text-[16px]'>{product.author}</h4>
                    <h4 className='text-white font-medium text-[20px]'>$ {product.price}</h4>
                    
                </div>
            </div>
        </Link>
    );
};

export default memo(Item);
