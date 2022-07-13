import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../context/CartContext'

function CartWidget() {
  const { qntyInCart } = useContext(CartContext);

    return (
        <div>
            <ShoppingCartIcon size={30} color='white' />
            <span className='ml-2'>{qntyInCart()}</span>
        </div>
    );
};

export default CartWidget;
