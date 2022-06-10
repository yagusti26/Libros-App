import React from 'react'
import CartWidget from '../CartWidget';
import './navbar.css'



export default function NavBars() {
  return (
    <nav className='{styles.navMain}'>
      <ul className='navList' >
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 23</a>
        <CartWidget />
      </ul>

    </nav>
  )
}