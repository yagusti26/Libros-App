import React from 'react'
import ItemCount from './ItemCount/ItemCount';

export const ItemListContainer = (props) => {
  return (
    <div className='itemListCount'>
      <h1>{props.greeting}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  )
}
