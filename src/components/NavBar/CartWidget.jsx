import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const { qntyInCart } = useContext(CartContext);

    return (
        <div>
            <Link to='/cart'>
                <ShoppingCartIcon size={30} color='white' />
                <span className='ml-2'>{qntyInCart()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
