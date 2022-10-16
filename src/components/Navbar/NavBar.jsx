import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavLink } from "react-bootstrap";

function NavBar() {

  return (
    <div className = "nav-container">
       <Navbar collapseOnSelect expand="sm"  variant="light">
            <NavLink to= "/" className="navbar-title">BROOK SHOP</NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav>
                <NavLink to= "/category/deportivo" eventKey="1" as={Link} className="navbar-option">DEPORTIVO</NavLink>
                <NavLink to= "/category/salida" eventKey="2" as={Link} className="navbar-option">PARA SALIR</NavLink>
                <NavLink to= "/category/cuero" eventKey="3" as={Link} className="navbar-option">DE CUERO</NavLink>
                <NavLink to= "/nosotros" eventKey="4" as={Link} className="navbar-option">SOBRE NOSOTROS</NavLink>
                <NavLink to= "/contacto" eventKey="5" as={Link} className="navbar-option">CONTACTENOS</NavLink>
                <NavLink to= "/cart" eventKey="6" as={Link} className="navbar-widget">
                  { window.screen.width > 575 ? <CartWidget /> : <p>MI CARRITO</p>}
                </NavLink> 
              </Nav>
          </Navbar.Collapse> 
        </Navbar>
    </div>
  )
}

export default NavBar