import React from 'react';
import CartWidget from './CartWidget';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <Link to="/">
                <DiamondOutlinedIcon style={{color: 'white'}}/>
            </Link>
            <div className={s.links}>
                <ul>
                    <Link to="/category/ficción">
                        <li>Ficción</li>
                    </Link>
                    <Link to="/category/infantil">
                        <li>Infantil</li>
                    </Link>
                    <Link to="/category/biografía">
                        <li>Biografía</li>
                    </Link>
                </ul>
                <hr />
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
