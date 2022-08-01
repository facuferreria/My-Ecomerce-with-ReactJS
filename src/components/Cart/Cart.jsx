import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { newContext } from '../Context/CartContext'
import Form from '../Form/Form';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2';


function Cart() {
  const {cart, removeUnityFromCart, removeFromCart, calculateTotalPrice, clearCart} = useContext(newContext)
  const [id, setId] = useState("")
  
  const generateOrder = (values) => {
    const order = {}
    order.buyer = {name: values.name, email: values.email, number: parseInt(values.number)}
    order.items = cart.map(product => {
      const id = product.item.id
      const price = product.item.price
      const name = product.item.name
      const quantity = product.quantity

      return {id, name, price, quantity}
    })
    order.total = calculateTotalPrice()


    const db = getFirestore()
    const queryInsertOrders = collection(db, 'orders')

    Swal.fire({
      title: 'Confirmar pedido...',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        addDoc(queryInsertOrders, order)
        .then(res => setId(res.id))
        .catch(err => console.error(err))
        .finally(() => clearCart())
        Swal.fire('Compra Existosa!', `Este es el id de tu compra: ${id}`, 'success')
      } else if (result.isDenied) {
        Swal.fire('Ups no se completo la compra', 'Por favor vuelve a intentarlo mas tarde', 'info')
      }
    }) 
  }

  return (
    <div>
       { 
        cart.length == 0 
        ? <Link to="/"><button>Para agregar productos a su carrito vaya aqui...</button></Link>
        : cart.map(product => 
            <ItemCart 
              removeUnityFromCart= {removeUnityFromCart} 
              removeFromCart= {removeFromCart} 
              product = {product} 
              key = {product.item.id}
            />
          )
       }
      <div className="form-container">
        {cart.length !== 0 && <Form  
                                calculateTotalPrice = {calculateTotalPrice} 
                                generateOrder = {generateOrder} 
                                clearCart = {clearCart} 
                              /> 
        }
      </div>
    </div>
  )
}


export default Cart