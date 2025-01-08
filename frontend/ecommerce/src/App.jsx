import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter,Route ,Routes } from 'react-router'
import ProductDetail from './pages/ProductDetail'
import { useState, createContext } from 'react'
import {ToastContainer} from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import Upcoming from './pages/Upcoming'

export const cartContext = createContext();

function App() {
  const  [cartItems, setCartItems] = useState([]);
  return (
    <>
    <BrowserRouter>
      <div>
      <cartContext.Provider value={cartItems}>
        <ToastContainer theme='dark' position='top-center' autoClose='2500'/>
        <Header />
      </cartContext.Provider>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/upcoming' element={<Upcoming />}/>
      <Route path='/search' element={<Shop />}/>
      <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
