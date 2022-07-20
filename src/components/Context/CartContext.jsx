import React, { createContext, useState } from 'react'

export const newContext = createContext();

export function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const addToCart= (item) =>{

        if (inCart(item.item.id)) {
            let itemPosition = cart.find(prod => prod.id === item.id)
            itemPosition.cantidad += item.cantidad;
            setCart(itemPosition);
        } else {
            setCart([... cart, item])
        }
        
    }

    const removeFromCart=(item) => {
        setCart(cart.filter(i => i.id !== item.id))
    }

    const clearCart= () =>{
        setCart([])
    }

    const inCart= (id) =>{
        let productInCart = cart.find(producto => producto.id === id)
        console.log(productInCart);
        console.log(productInCart  ? true : false);
        return productInCart ? true : false
    }

  return (
    <newContext.Provider value={[cart, addToCart, removeFromCart, clearCart, inCart]}>
        {children}
    </newContext.Provider>
  )
}
