import React from 'react'
import '../Item/Item.scss'


function Item({product}) {
  return (
    <div className="card">
      <img src={product.pictureImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{product.description}</h4>
        <p className="card-text">{product.name}</p>
        <button href="#" className="btn-primary">${product.price}</button>
      </div>
    </div>
  )
}

export default Item