import React, { createContext, useState } from 'react'

export const newContext = createContext();

export function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const addToCart= (item) =>{

        if (inCart(item.item.id)) {
            let itemInCart = cart.find(prod => prod.item.id === item.item.id)
            itemInCart.quantity += item.quantity;
            setCart([...cart]);
        } else {
            setCart([... cart, item])
        }
        
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.item.id !== id));
    }


    const removeUnityFromCart=(item) => {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            return removeFromCart(item.item.id);
        }

        setCart([...cart]);
    }

    const clearCart= () =>{
        setCart([])
    }

    const inCart= (id) =>{
        let productInCart = cart.find(producto => producto.item.id === id)
        return productInCart ? true : false
    }

    const calculateTotalPrice = () => {
        return cart.reduce((prev, product) => prev + (product.item.price * product.quantity) , 0)
    }

    const calculateItemsQuantity = () => {
        return cart.reduce((prev, item) => prev += item.quantity, 0)
    }

  return (
    <newContext.Provider value={{cart, addToCart, removeFromCart, removeUnityFromCart, clearCart, inCart, calculateTotalPrice, calculateItemsQuantity}}>
        {children}
    </newContext.Provider>
  )
}
