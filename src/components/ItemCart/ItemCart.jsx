import React from 'react'
import '../ItemCart/ItemCart.scss'

function ItemCart({ product, removeFromCart, removeUnityFromCart, addUnityToCart }) {
  return (
   
  <div className="cart-item">
    <img src={product.item.pictureImg} className="cart-img" alt="..." />
    <h4 className="cart-title">{product.item.name}</h4>
    <div className="counter-container">
      <span className="counter-text">QTY:</span>
      <div className="cart-counter">
        <span className="cart-counter-button" onClick = {() => addUnityToCart(product)}>+</span>
        <span className="cart-counter-num">{product.quantity}</span>
        <span className="cart-counter-button" onClick = {() => removeUnityFromCart(product)}>-</span>
      </div>
    </div>
    <span className="minus-product-button" onClick = {() => removeFromCart(product.item.id) }>X</span> 
  </div>
   
  )
}

export default ItemCart