import React from 'react'
import '../ItemDetail/ItemDetail.scss'

function ItemDetail({ product }) {

    const changeStyle = (e) => {
        e.target.classList.toggle('text-talle-selected');
    }

  return (
    <div className="detail-card">
        <div className="product-img">
            <img src={product.bigImg} className="img" alt="..." />
        </div>
        <div className="product-info">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <h2 className="detail-price">${product.price}</h2>
          <p className="detail-text">TALLES</p>
          <div className="detail-talles">
            {product.sizes.map(size => <p className="text-talle" onClick={changeStyle}>{size}</p>)}
          </div>
          <div className="add-cart">
            <button className="add-cart-btn">
                <h2 className="add-cart-text">+  Añadir al carrito</h2>
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default ItemDetail