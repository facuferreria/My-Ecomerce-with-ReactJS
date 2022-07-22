import React from 'react'
<<<<<<< HEAD
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav">
        <NavLink to= "/" className="nav-title"><p>BROOK SHOP</p></NavLink>
        <NavLink to= "/categoria/deportivo" className="nav-option"><p>DEPORTIVO</p></NavLink>
        <NavLink to= "/categoria/salida" className="nav-option"><p>PARA SALIR</p></NavLink>
        <NavLink to= "/categoria/cuero" className="nav-option"><p>DE CUERO</p></NavLink>
        <NavLink to= "/nosotros" className="nav-option"><p>SOBRE NOSOTROS</p></NavLink>
        <NavLink to= "/contacto" className="nav-option"><p>CONTACTENOS</p></NavLink>
        <NavLink to= "/cart" className="nav-widget"><CartWidget /></NavLink>
=======
import '../Navbar/NavBar.scss'


function NavBar() {
  return (
    <div className="navbar">
        <p className="navbar-title">BROOK SHOES</p>
        <p className="navbar-option">DEPORTIVAS</p>
        <p className="navbar-option">DE VESTIMENTA</p>
        <p className="navbar-option">CUERO</p>
        <p className="navbar-option">MI CARRITO</p>
        <p className="navbar-option">SOBRE NOSOTROS</p>
        <p className="navbar-option">CONTACTO</p>
>>>>>>> 9b05f55 (desafio menu e-commerce)
    </div>
  )
}

export default NavBar