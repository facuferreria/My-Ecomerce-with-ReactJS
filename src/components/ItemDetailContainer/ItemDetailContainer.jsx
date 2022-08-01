import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ItemDetailContainer/ItemDetailContainer.scss";
import { promesaDeportes } from '../../helpers/products.js'
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from '../Spinner/Spinner';

function ItemDetailContainer() {
    const {detailId} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const db = getFirestore() 
      const queryProduct = doc(db, 'products', detailId )
      getDoc(queryProduct)
      .then(res => setItem({ id: res.id, ...res.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [detailId])
    
  return (
    <div>{loading ? <Spinner /> : <ItemDetail key= {item.id} product = {item}/>}</div>
  )
}

export default ItemDetailContainer