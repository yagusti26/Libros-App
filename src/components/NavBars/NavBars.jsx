import React, { Component } from "react";
import "./navbar.css"

export default function NavBars() {
  
    return (
      <nav className="list">
          <ul>
              <li className="items">Productos</li>
              <li className="items">Servicios</li>
              <li className="items">Contacto</li>
          </ul>
          <button className="btn">Inicio</button>
      </nav>
    );
  }
  