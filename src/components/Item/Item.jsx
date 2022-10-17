import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.scss'
import Card from 'react-bootstrap/Card';

function Item({ product }) {
  return (
    <Link className = "link-class" to={`/detail/${product.id}`}>
      <Card>
        <Card.Img variant="top" src= {product.pictureImg} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            Pequeña descripcion de prueba sobre las zapatillas: 
            This is a wider card with supporting text below as a natural lead-in to additional content. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${product.price}</small>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default Item