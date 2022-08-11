import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner';


function ItemListContainer() {
  //obteniendo la categoria del producto
  const { categoryId } = useParams();
  //definiendo estado del producto y de carga
  const [ products , setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // funcion para obtener los productos deseados de los docs de firebase
  const getDataFromDocs = (docs) => {
    getDocs(docs)
    .then(res => setProducts(res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    //inicializando firestore
    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    //si obtenemos la categoria del producto, filtramos la data. Sino dame toda la data de los productos
    if (categoryId) {
      //filtro y obtengo mis productos en base a la categoria deseada
      const queryCollectionFilter = query(queryCollection, where('category', '==', categoryId))
      getDataFromDocs(queryCollectionFilter)

    } else {
      //obtengo todos los productos
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