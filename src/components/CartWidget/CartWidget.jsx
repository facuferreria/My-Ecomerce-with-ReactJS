import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.scss";

function CartWidget() {
  return (
    <div>
        <div className="miCart">
            <FontAwesomeIcon icon={ faCartShopping } className="miCart-icon" />
            <p className="miCart-text">Mi Carrito</p>
        </div>
    </div>
  )
}

export default CartWidget