import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import s from './Navbar.module.css';

const CartWidget = () => {
    return (
        <div className={s.shop}>
            <ShoppingCartIcon size={30} color="white" />
            <p>4</p>
        </div>
    );
};

export default CartWidget;
