import React from 'react'
import  './App.scss';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartContext} from './components/Context/CartContext';

function App() {
  return (
  <CartContext>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element = {<ItemListContainer greeting = 'Hola, estamos en contruccion...'/>} />
          <Route index path="/detail/:detailId" element = {<ItemDetailContainer />} />
          <Route index path="/categoria/:categoriaId" element = {<ItemListContainer greeting = 'Hola, estamos en contruccion...'/>} />
          <Route index path="/cart" element = {<Cart />} />
          <Route index path="/nosotros" element = {<ItemListContainer greeting = 'Hola, estamos en contruccion...'/>} />
          <Route index path="/contacto" element = {<ItemListContainer greeting = 'Hola, estamos en contruccion...'/>} />
          <Route index path="*" element = {<Navigate to="/" />} />
        </Routes>   
      </div>
    </BrowserRouter>
  </CartContext>
  )
}

export default App