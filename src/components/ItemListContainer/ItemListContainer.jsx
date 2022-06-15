import React, { useState, useEffect } from 'react'
import { productos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const llamarProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);

    });

    llamarProductos
    .then((res) => {
      setProducts(res);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  return (
    <>
      <div className='itemListCount'>{props.greeting}</div>     
      <ItemList articulos={products} />
    </>  
  )
}
