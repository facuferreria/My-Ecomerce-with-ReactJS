import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { promesaDeportes } from '../../helpers/products.js'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'


function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [ products , setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    if (categoryId) {
      const queryCollectionFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryCollectionFilter)
      .then(res => setProducts(res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getDocs(queryCollection)
      .then(res => setProducts( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false))         

    }
    
  }, [categoryId])
  
  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemList prods = {products}/>}
    </div>
  )
}

export default ItemListContainer