import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { newContext } from '../Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const {cart, removeUnityFromCart, removeFromCart, calculateTotalPrice, clearCart} = useContext(newContext)
  
  const generateOrder = () => {
    const order = {}
    order.buyer = {name: "Facundo", email: "ferr@gmail.com", number: 112334}
    order.items = cart.map(product => {
      const id = product.item.id
      const price = product.item.price
      const name = product.item.name
      const quantity = product.quantity

      return {id, name, price, quantity}
    })
    order.total = calculateTotalPrice()
    console.log(order);
  }

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
              <button className="card-btn" onClick = {() => removeUnityFromCart(product) }>
                <FontAwesomeIcon icon={faTrashCan} />
                <p>QUITAR UNIDAD</p>
              </button>
              <button onClick = {() => removeFromCart(product.item.id) }>X</button>
            </div>
          </div>)
        }
        <div className="price-container">
          {cart.length !== 0 && <p className="total-price">${calculateTotalPrice()}</p>}
        </div>
        <div className="price-container">
          {cart.length !== 0 && <button className="price-btn" onClick = {() => generateOrder() }>FINALIZAR COMPRA</button>}
          {cart.length !== 0 && <button className="price-btn" onClick = {() => clearCart() }>CANCELAR COMPRA</button>}
        </div>
    </div>
  )
}


export default Cart