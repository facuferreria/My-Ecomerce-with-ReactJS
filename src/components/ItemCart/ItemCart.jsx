import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ItemCart({ product, removeFromCart, removeUnityFromCart }) {
  return (
    <div>
        <div className="card">
            <img src={product.item.pictureImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.item.name}</h4>
              <p className="card-text">{product.item.description}</p>
              <p className="card-text">CANTIDAD: {product.quantity}</p>
              <button className="card-btn" onClick = {() => removeUnityFromCart(product) }>
                <FontAwesomeIcon icon={faTrashCan} />
                <p>QUITAR UNIDAD</p>
              </button>
              <button onClick = {() => removeFromCart(product.item.id) }>X</button>
            </div>
          </div>
    </div>
  )
}

export default ItemCart