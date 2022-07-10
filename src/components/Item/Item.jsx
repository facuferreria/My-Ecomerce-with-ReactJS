import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.scss'


function Item({product}) {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="card">
        <img src={product.pictureImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.description}</h4>
          <p className="card-text">{product.name}</p>
          <button className="btn-primary">${product.price}</button>
        </div>
      </div>
    </Link>
  )
}

export default Item