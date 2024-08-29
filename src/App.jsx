import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/cart' element={<Cart/>}  />
      <Route path='/wishlist' element={<Wishlist/>}  />
     </Routes>

     <Footer/>
    
    
    
    </>
  )
}

export default App
