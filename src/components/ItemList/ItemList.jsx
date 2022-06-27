import React, { useState, useEffect } from 'react'
import { productosDeportivos } from '../../helpers/products.js'
import Item from '../Item/Item.jsx'

function ItemList() {
    const [prodDeportivos, setProdDeportivos] = useState([])
    const [loading, setLoading] = useState(true)

    const promesaDeportes = new Promise((resolve, reject) => {
        let condition = true;
        condition ? resolve(productosDeportivos) : reject("ERROR 404 Not Found")
    });

    useEffect(() => {

        setTimeout(() => {
            promesaDeportes
            .then((res) => setProdDeportivos(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }, 2000);
        
    }, [])
    

  return (
    <div>
        {
            loading ? <h2>Loading...</h2> : <Item prods = {prodDeportivos}/>

        }
    </div>
  )
}

export default ItemList