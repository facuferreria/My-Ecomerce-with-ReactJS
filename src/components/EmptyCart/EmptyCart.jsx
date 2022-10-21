import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className='error-container'>
        <h1 className="error-title">CARRITO VACIO</h1>
        <p className="error-text">No hay productos en tu carrito</p>
        <Link to= '/' className="error-link" >
          <button className="error-button">
            <h2 className="error-button-text">Ir a la pagina</h2>
          </button>
        </Link>
    </div>
  )
}

export default EmptyCart