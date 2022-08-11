import React, { createContext, useState } from 'react'

//creando el contexto
export const newContext = createContext();

export function CartContext({children}) {

    //definiendo el estado del carrito
    const [cart, setCart] = useState([]);

    //agregando productos al carrito
    const addToCart= (item) => {
        //si existe el producto, modifica la cantidad
        if (inCart(item.item.id)) {
            let itemInCart = cart.find(prod => prod.item.id === item.item.id)
            itemInCart.quantity += item.quantity;
            setCart([...cart]);
        } else {
            //no existe el producto en el carrito
            setCart([...cart, item])
        }
        
    }

    //eliminando producto del carrito
    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.item.id !== id));
    }

    //eliminar una unidad del producto
    const removeUnityFromCart= (item) => {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            //remueve el producto si no hay mas unidades
            return removeFromCart(item.item.id);
        }

        setCart([...cart]);
    }

    //agregando una unidad del producto al carrito
    const addUnityToCart = (item) => {
        item.quantity++;
        setCart([...cart]);
    }

    //vaciando el carrito
    const clearCart= () => {
        setCart([])
    }

    //consulto si el producto esta en el carrito
    const inCart= (id) =>{
        let productInCart = cart.find(producto => producto.item.id === id)
        return productInCart ? true : false
    }

    //calculo el precio total del carrito
    const calculateTotalPrice = () => {
        return cart.reduce((prev, product) => prev + (product.item.price * product.quantity) , 0)
    }

    //calculo la cantidad de unidades del carrito
    const calculateItemsQuantity = () => {
        return cart.reduce((prev, item) => prev += item.quantity, 0)
    }

  return (
    <newContext.Provider value={{
        cart, 
        addToCart, 
        removeFromCart, 
        removeUnityFromCart, 
        addUnityToCart,
        clearCart, 
        inCart, 
        calculateTotalPrice, 
        calculateItemsQuantity
    }}>
        {children}
    </newContext.Provider>
  )
}
