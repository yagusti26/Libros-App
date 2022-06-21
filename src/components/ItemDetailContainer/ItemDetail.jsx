import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';


function ItemDetail({ item }) {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>$ {item.price}</p>

        <ItemCount stock={8} initial={1}  />
    </div>
  );
}

export default ItemDetail