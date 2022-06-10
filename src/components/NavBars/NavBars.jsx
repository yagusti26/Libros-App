import React from 'react'
import CartWidget from '../CartWidget';
import './navbar.css'



export default function NavBars() {
  return (
    <nav className='navMain'>
      <ul className='navList' >
        <a href="/">Productos</a>
        <a href="/">Servicios</a>
        <a href="/">Contacto</a>
        <CartWidget />
      </ul>

    </nav>
  )
}