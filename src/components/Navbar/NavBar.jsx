import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav">
        <NavLink to= "/" className="nav-title"><p>BROOK SHOP</p></NavLink>
        <NavLink to= "/category/deportivo" className="nav-option"><p>DEPORTIVO</p></NavLink>
        <NavLink to= "/category/salida" className="nav-option"><p>PARA SALIR</p></NavLink>
        <NavLink to= "/category/cuero" className="nav-option"><p>DE CUERO</p></NavLink>
        <NavLink to= "/nosotros" className="nav-option"><p>SOBRE NOSOTROS</p></NavLink>
        <NavLink to= "/contacto" className="nav-option"><p>CONTACTENOS</p></NavLink>
        <NavLink to= "/cart" className="nav-widget"><CartWidget /></NavLink>
    </div>
  )
}

export default NavBar