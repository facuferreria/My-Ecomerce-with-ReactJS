import React from 'react'
import  './App.scss';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartContext} from './components/Context/CartContext';
import Error404 from './components/Error404/Error404';

function App() {
  return (
  <CartContext>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element = {<ItemListContainer />} />
          <Route index path="/detail/:detailId" element = {<ItemDetailContainer />} />
          <Route index path="/category/:categoryId" element = {<ItemListContainer />} />
          <Route index path="/cart" element = {<Cart />} />
          <Route index path="/nosotros" element = {<ItemListContainer />} />
          <Route index path="/contacto" element = {<ItemListContainer />} />
          <Route index path="*" element = {<Error404 />} />
        </Routes>   
      </div>
    </BrowserRouter>
  </CartContext>
  )
}

export default App