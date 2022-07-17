import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ItemDetailContainer/ItemDetailContainer.scss";
import { promesaDeportes } from '../../helpers/products.js'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const {detailId} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      promesaDeportes
      .then(res => setItem(res.find(item => item.id === detailId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [detailId])
    
  return (
    <div>{loading ? <h2>Loading...</h2> : <ItemDetail key= {item.id} product = {item}/>}</div>
  )
}

export default ItemDetailContainer