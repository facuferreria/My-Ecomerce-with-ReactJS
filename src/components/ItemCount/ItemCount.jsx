import React, {useState} from 'react'
import '../ItemCount/ItemCount.scss'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    function restarCounter() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function sumarCounter() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    return (
        <div className='add-cart'>
            <div className="counter">
                <span className="counter-button" onClick = {() => sumarCounter()}>+</span>
                <span className="counter-num">{count}</span>
                <span className="counter-button" onClick = {() => restarCounter()}>-</span>
            </div>
            <button className="add-cart-btn" disabled = { count === 0 } onClick={ () => onAdd(count)}>
                <h2 className="add-cart-text" >Añadir al carrito</h2>
            </button>
        </div>
    )
}

export default ItemCount