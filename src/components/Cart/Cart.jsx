import React, { useContext } from 'react'
import { newContext } from '../Context/CartContext'
import Item from '../Item/Item'

function Cart() {
  const {cart} = useContext(newContext)
  console.log(cart);
  return (
    <div>
       {cart.map(product => 
          <div className="card" key= {product.item.id}>
            <img src={product.item.pictureImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.item.name}</h4>
              <p className="card-text">{product.item.description}</p>
              <button className="btn-primary">Cantidad: {product.quantity}</button>
            </div>
          </div>)
        }
    </div>
  )
}

export default Cart