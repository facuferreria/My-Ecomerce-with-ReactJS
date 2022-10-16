import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

  return (
  <div>
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <NavLink to= "/" className="navbar-title"><p>BROOK SHOP</p></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to= "/category/deportivo" className="navbar-option"><p>DEPORTIVO</p></NavLink>
            <NavLink to= "/category/cuero" className="navbar-option"><p>DE CUERO</p></NavLink>
            <NavLink to= "/contacto" className="navbar-option"><p>CONTACTENOS</p></NavLink>
            <NavLink to= "/nosotros" className="navbar-option"><p>SOBRE NOSOTROS</p></NavLink>
            <NavLink to= "/cart" className="navbar-widget"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavBar