import React, {useState} from 'react'
import '../ItemCount/ItemCount.scss'

function ItemCount({stock, initial, onAdd}) {
    //contador de unidades de cada producto
    const [count, setCount] = useState(initial);

    //restar unidad
    const restarCounter = () => {
        //restar mientra sea mayor a 0
        if (count > 0) {
            setCount(count - 1);
        }
    }

    //sumar unidad
    const sumarCounter = () => {
        //sumar mientras no supere al stock disponible
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