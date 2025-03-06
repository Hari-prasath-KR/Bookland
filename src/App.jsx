import React from 'react'
import Home from './Home'
import Cart from './Component/Cart'
import Login from './Component/Login'
import Lang from './Component/Lang'
import Academics from './Component/Academics'
import Offer from './Component/Offer'
import Bookshelf from './Component/Bookshelf'
import Toppubblishers from './Component/Toppubblishers'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nonfiction from './Component/Nonfiction'
import Fiction from './Component/Fiction'
import Children from './Component/Children'
import Youngadult from './Component/Youngadult'
import Register from './Component/Register'
import Booklist from './Component/Booklist'
import Joseph from './Component/Authors/Joseph'
import Neville from './Component/Authors/Neville'
import ScrollToTop from './Component/ScrollToTop'
import Sudha from './Component/Authors/Sudha'
import Ruskin from './Component/Authors/Ruskin'
import Company from './Component/company'
import Checkout from './Component/Checkout'
import Payment from './Component/Payment'
import Osha from './Component/Authors/Osha'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/toppublishers' element={<Toppubblishers/>}/>
          <Route path='/offers' element={<Offer/>}/>
          <Route path='/non-fiction' element={<Nonfiction/>}/>
          <Route path='/fiction' element={<Fiction/>}/>
          <Route path='/children' element={<Children/>}/>
          <Route path='/youngadult' element={<Youngadult/>}/>
          <Route path='/languages' element={<Lang/>}/>
          <Route path='/academic' element={<Academics/>}/>
          <Route path='/search' element={<Booklist/>}/>
          <Route path='/bookshelffav' element={<Bookshelf/>}/>
          <Route path='/joseph-murphy' element={<Joseph/>}/>
          <Route path='/neville-goddard' element={<Neville/>}/>
          <Route path='/sudha-murty' element={<Sudha/>}/>
          <Route path='/osha' element={<Osha/>}/>
          <Route path='/ruskin-bond' element={<Ruskin/>}/>
          <Route path='/company-about' element={<Company/>}/>
          <Route path='/order-now' element={<Checkout/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>

  </>
    
  )
}
