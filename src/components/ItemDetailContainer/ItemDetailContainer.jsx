import React from 'react';
import { productos } from '../../mock/products';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react";


const ItemDetailContainer = (props, itemId) => {
    const [product, setProduct] = useState({});
  
  
    useEffect(() => {
     
      const llamarProducto = new Promise((res, rejected) => {
        setTimeout(() => {
          res(productos [itemId]);
        }, 2000);
  
      });
  
      llamarProducto
      .then((res) => {
        setProduct(res);
      })
      .catch((error)=>{
        console.log(error)
      })
    }, []);
  
  
    return (
      <>
        <div className='itemListCount'>{props.greeting}</div>     
        <ItemDetail item={product} />
      </>  
    )
  }

export default ItemDetailContainer;
