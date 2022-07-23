import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { promesaDeportes } from '../../helpers/products.js'
import { useParams } from 'react-router-dom';


function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [prodDeportivos, setProdDeportivos] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {

    if (categoryId) {
      promesaDeportes
      .then(res => setProdDeportivos(res.filter(item => item.categoria === categoryId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      promesaDeportes
      .then(res => setProdDeportivos(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
    
  }, [categoryId])

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemList prods = {prodDeportivos}/>}
    </div>
  )
}

export default ItemListContainer