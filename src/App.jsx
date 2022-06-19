import React from 'react'
import  './App.scss';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting = 'Hola, estamos en contruccion...'/>  
    </div>
  )
}

export default App