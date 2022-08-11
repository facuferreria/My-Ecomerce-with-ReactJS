import React, { useContext } from 'react'
import { newContext } from '../Context/CartContext'
import Form from '../Form/Form';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2';
import EmptyCart from '../EmptyCart/EmptyCart';


function Cart() {
  const {cart, removeUnityFromCart, removeFromCart, calculateTotalPrice, clearCart, addUnityToCart} = useContext(newContext)
  
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
    })
    .then((result) => {
      if (result.isConfirmed) {
        addDoc(queryInsertOrders, order)
        .then(res => Swal.fire('Compra Existosa!', `Este es el id de tu compra: ${res.id}`, 'success'))
        .catch(err => console.error(err))
        .finally(() => clearCart())
      } else if (result.isDenied) {
        Swal.fire('Ups no se completo la compra', 'Por favor vuelve a intentarlo mas tarde', 'info')
      }
    }) 
  }

  return (
    <div>
      <div className="items-container">
        { 
          cart.length === 0 
          ? <EmptyCart />
          : cart.map(product => 
              <ItemCart 
                removeUnityFromCart= {removeUnityFromCart} 
                removeFromCart= {removeFromCart} 
                product = {product} 
                addUnityToCart = {addUnityToCart}
                key = {product.item.id}
              />
            )
        }
      </div>
      <div className="form-container">
        {
          cart.length !== 0 && <Form  
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