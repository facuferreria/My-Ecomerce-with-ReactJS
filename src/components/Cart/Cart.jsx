import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { newContext } from '../Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const {cart, removeFromCart, calculateTotalPrice, clearCart} = useContext(newContext)
  console.log(cart);
  return (
    <div>
       { 
       cart.length == 0 
        ? 
        <Link to="/"><button>Para agregar productos a su carrito vaya aqui...</button></Link>
        :
        cart.map(product => 
          <div className="card" key= {product.item.id}>
            <img src={product.item.pictureImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.item.name}</h4>
              <p className="card-text">{product.item.description}</p>
              <p className="card-text">CANTIDAD: {product.quantity}</p>
              <button className="card-btn" onClick = {() => removeFromCart(product) }>
                <FontAwesomeIcon icon={faTrashCan} />
                <p>QUITAR UNIDAD</p>
              </button>
            </div>
          </div>)
        }
        <div className="price-container">
          <p className="total-price">${calculateTotalPrice()}</p>
        </div>
        <div className="price-container">
          <button className="price-btn">FINALIZAR COMPRA</button>
          <button className="price-btn" onClick = {() => clearCart() }>CANCELAR COMPRA</button>
        </div>
    </div>
  )
}

export default Cart