import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'

function NavBar() {
  return (
    <div className="nav">
        <p className="nav-title">BROOK SHOP</p>
        <p className="nav-option">DEPORTIVO</p>
        <p className="nav-option">PARA SALIR</p>
        <p className="nav-option">DE CUERO</p>
        <p className="nav-option">SOBRE NOSOTROS</p>
        <p className="nav-option">CONTACTENOS</p>
        <CartWidget />
    </div>
  )
}

export default NavBar