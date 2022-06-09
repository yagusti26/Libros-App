import React from 'react'

export const NavLink = (props) => {
  function handlerEvent(){
    console.log("click");
  }
  return (
    <li onClick={handlerEvent}>{props.title}</li>
  )
}
