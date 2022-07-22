<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { promesaDeportes } from '../../helpers/products.js'
import { useParams } from 'react-router-dom';


function ItemListContainer({ greeting }) {
  const { categoriaId } = useParams();
  const [prodDeportivos, setProdDeportivos] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {

    if (categoriaId) {
      promesaDeportes
      .then(res => setProdDeportivos(res.filter(item => item.categoria === categoriaId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      promesaDeportes
      .then(res => setProdDeportivos(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
    
  }, [categoriaId])

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemList prods = {prodDeportivos}/>}
    </div>
  )
=======
import React from 'react'

function ItemListContainer({greeting}) {
    return (
      <div>{greeting}</div>
    )
>>>>>>> 9b05f55 (desafio menu e-commerce)
}

export default ItemListContainer