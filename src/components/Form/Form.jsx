import React from 'react'
import { useState } from 'react'
import '../Form/Form.scss'


function Form({ generateOrder, clearCart, calculateTotalPrice }) {
    const [values, setValues] = useState({
        name:"",
        surname:"",
        email:"",
        number:"",
    })

    const handleChange = (e) => {
        const inputType = e.target.name
        const value = e.target.value
        setValues({
            ...values,
            [inputType]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <input type="text" className="input" placeholder="Nombre"  name= "name" onChange={handleChange}/>
            <input type="text" className="input" placeholder="Apellido"  name= "surname" onChange={handleChange}/>
            <input type="email" className="input" placeholder="E-mail"  name= "email" onChange={handleChange}/>
            <input type="number" className="input" placeholder="Numero"  name= "number" onChange={handleChange}/>
            <div className="buttons-container">
                <button className="price-btn" onClick = {() => generateOrder(values) }>${calculateTotalPrice()}  |  CHECKOUT</button>
                <button className="cancel-btn" onClick = {() => clearCart() }>CANCELAR COMPRA</button>
            </div>
            
        </div>
    )
}

export default Form