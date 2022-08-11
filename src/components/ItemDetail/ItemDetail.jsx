import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { newContext }  from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.scss'

function ItemDetail({ product }) {
  //defino el estado de contador y obtengo funciones del context
  const { addToCart } = useContext(newContext)
  const [ cantidad, setCantidad ] = useState()

  //agrego el producto al carrito con la cantidad del contador
  const onAdd = (counter) => {
    setCantidad(counter)

    //agrego al carrito el producto y cantidad deseada
    const producto = { item: product, quantity: counter }
    addToCart(producto)
  }

  //estilos para seleccion de talles
  const changeStyle = (e) => {
    e.target.classList.toggle('text-talle-selected');
  }

  return (
    <div className="detail-card">
        <div className="product-img">
            <img src={product.pictureImg} className="img" alt="..." />
        </div>
        <div className="product-info">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam qui nobis iste nisi labore odit ab obcaecati ut, magnam cumque? Suscipit perspiciatis ad impedit ullam quos rem, velit magni consequatur!</p>
          <h2 className="detail-price">${product.price}</h2>
          <p className="detail-text">TALLES</p>
          <div className="detail-talles">
            {product.sizes.map((size, index) => <p key= {index} className="text-talle" onClick={changeStyle}>{size}</p>)}
          </div>
          {cantidad? <Link to='/cart'>
                      <button className="add-cart-btn">
                        <h2 className="add-cart-text">Finalizar compra</h2>
                      </button>
                     </Link> 
                   : <ItemCount stock = {product.stock} initial = {0} onAdd = {onAdd}/>
          }
        </div>
    </div>
  )
}

export default ItemDetail