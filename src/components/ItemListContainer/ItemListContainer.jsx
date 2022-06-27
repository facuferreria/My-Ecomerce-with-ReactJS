import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'

function ItemListContainer({ greeting }) {
  return (
    <div>
      <ItemList />
    </div>
  )
}

export default ItemListContainer