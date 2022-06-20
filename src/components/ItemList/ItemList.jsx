import React from 'react';
import Item from '../Item/Item';

const ItemList = ( { items } ) => {
    return (
        <div className='flex justify-around flex-wrap'>
            {items?.map((item) => (
                <Item key={items.id} item={items} />
            ))}
        </div>
    );
};

export default ItemList;
