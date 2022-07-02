import Item from '../Item/Item.jsx'
import '../ItemList/ItemList.scss'

function ItemList({prods}) {

  return (
    <div className = "itemContainer">
        {prods.map(product => <Item key={product.id} product = {product}/>)} 
    </div>
  )
}

export default ItemList