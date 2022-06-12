import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.scss";
import { newContext } from '../Context/CartContext';

function CartWidget() {
  const { cart } = useContext(newContext)
  return (
    <div>
        <div className="miCart">
            <FontAwesomeIcon icon={ faCartShopping } className="miCart-icon" />
            <p className="miCart-text">{cart.length === 0 ? "" : cart.reduce((prev, product) => prev + product.quantity , 0)}</p>
        </div>
    </div>
  )
}

export default CartWidget