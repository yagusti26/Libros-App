import React from 'react';
import CartWidget from './CartWidget';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <Link to="/">
                <img src="img/logo192.png" alt="logo" />
            </Link>
            <div className={s.links}>
                <ul>
                    <Link to="/category/remeras">
                        <li>Remeras</li>
                    </Link>
                    <Link to="/category/camisas">
                        <li>Camisas</li>
                    </Link>
                    <Link to="/category/gorras">
                        <li>Gorras</li>
                    </Link>
                </ul>
                <hr />
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
