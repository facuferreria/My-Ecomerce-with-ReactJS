import React, { createContext, useState } from 'react'

export const newContext = createContext();

function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const addToCart= (item)=>{
        if (cart.find(prod => prod.id === item.id)) {
            console.log(cart.find(prod => prod.id === item.id))
        } else {
            setCart([... cart, item])
        }
        
    }

    const removeFromCart=(item) => {
        setCart(cart.filter(i => i.id !== item.id))
    }

    const clearCart= ()=>{
        setCart([])
    }

    const inCart= (id)=>{
        setCart([])
    }

  return (
    <newContext.Provider value={[cart, addToCart, removeFromCart, clearCart, inCart]}>
        {children}
    </newContext.Provider>
  )
}

export default CartContext