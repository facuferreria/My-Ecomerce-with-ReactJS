import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ItemDetailContainer/ItemDetailContainer.scss";
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from '../Spinner/Spinner';

function ItemDetailContainer() {
    //obtengo id de producto deseado
    const {detailId} = useParams();
    // defino estados delproducto y de carga
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      //inicializando firestore
      const db = getFirestore() 
      //filtrando entre los docs el producto con el id obtenido
      const queryProduct = doc(db, 'products', detailId )
      //obtengo el producto de firebase en base el id obtenido
      getDoc(queryProduct)
      .then(res => setItem({ id: res.id, ...res.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [detailId])
    
  return (
    <div>{ loading ? <Spinner /> : <ItemDetail key= {item.id} product = {item}/> }</div>
  )
}

export default ItemDetailContainer