import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    const style = "text-[16px] cursor-pointer ml-[50px]"
    return (
        <nav className='navbar h-[60px] shadow-md relative z-10 bg-[#8a4af4]'>
            <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb[10px] flex justify-between items-center'>
            <div className='left flex flex-1 items-center'>
                <div className='language cursor-pointer text-[16px] text-[white]'>
                    Buscar
                </div>
                <div className='searchInput flex border-[1px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#6366f1] transition-all'>
                    <input className='input outline-none' type="text" />
                    <SearchIcon style={{fontSize: '18px'}}/>
                </div>

            </div>

            <Link to="/" className='center flex-1 text-center'>
                <DiamondOutlinedIcon  style={{color: 'white'}}/>
            </Link>
            <div className='right flex flex-1 items-center justify-end'>
                <ul className='right flex flex-1 items-center justify-end'>
                    <Link to="/category/ficción">
                        <li className={style}>Ficción</li>
                    </Link>
                    <Link to="/category/infantil">
                        <li className={style}>Infantil</li>
                    </Link>
                    <Link to="/category/biografía">
                        <li className={style}>Biografía</li>
                    </Link>
                    
                        <CartWidget />
                  
                </ul>
             
                
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
