import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { promesaDeportes } from '../../helpers/products.js'


function ItemListContainer({ greeting }) {
  const [prodDeportivos, setProdDeportivos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    promesaDeportes
    .then(res => setProdDeportivos(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemList prods = {prodDeportivos}/>}
    </div>
  )
}

export default ItemListContainer