import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner';


function ItemListContainer() {
  const { categoryId } = useParams();
  const [ products , setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getDataFromDocs = (docs) => {
    getDocs(docs)
    .then(res => setProducts(res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    if (categoryId) {
      const queryCollectionFilter = query(queryCollection, where('category', '==', categoryId))
      getDataFromDocs(queryCollectionFilter)

    } else {
      getDataFromDocs(queryCollection)       
    }
    
  }, [categoryId])
  
  return (
    <div>
      {loading ? <Spinner /> : <ItemList prods = {products}/>}
    </div>
  )
}

export default ItemListContainer