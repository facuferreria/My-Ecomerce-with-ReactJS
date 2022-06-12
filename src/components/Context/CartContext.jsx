import React, { createContext, useState } from 'react'

export const newContext = createContext();

export function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const addToCart= (item) => {

        if (inCart(item.item.id)) {
            let itemInCart = cart.find(prod => prod.item.id === item.item.id)
            itemInCart.quantity += item.quantity;
            setCart(cart);
        } else {
            setCart([... cart, item])
        }
        
    }

    const removeFromCart=(item) => {
        item.quantity > 0 ? item.quantity-- : item.quantity = 0;
        setCart([...cart]);
    }

    const clearCart= () => {
        setCart([])
    }

    const inCart= (id) => {
        let productInCart = cart.find(producto => producto.item.id === id)
        return productInCart ? true : false
    }

    const calculateTotalPrice = () => {
        return cart.reduce((prev, product) => prev + product.item.price * product.quantity , 0)
    }

  return (
    <newContext.Provider value={{cart, addToCart, removeFromCart, clearCart, inCart, calculateTotalPrice}}>
        {children}
    </newContext.Provider>
  )
}
