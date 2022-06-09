import React from 'react'

export default function NavLinkChild({handleOnClick, children}) {
  return (
    <li onClick={handleOnClick}>
        {children}
    </li>
  )
}
