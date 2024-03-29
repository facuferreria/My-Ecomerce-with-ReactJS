import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.scss";
import { newContext } from '../Context/CartContext';

function CartWidget() {
  //obteniendo funcion para calcular items en el cart del context
  const { calculateItemsQuantity } = useContext(newContext)
  
  return (
    <div>
        <div className="miCart">
            <FontAwesomeIcon icon={ faCartShopping } className="miCart-icon" />
            <p className="miCart-text">{calculateItemsQuantity() !== 0 && calculateItemsQuantity() }</p>
        </div>
    </div>
  )
}

export default CartWidget