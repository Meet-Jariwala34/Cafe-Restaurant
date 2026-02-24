import React from 'react'
import HOME from './pages/home/HOME'
import {Route,Routes} from 'react-router-dom';
import Menu from './pages/menu/Menu';
import Menu2 from './pages/menu/menu2/Menu2';
import Menu3 from './pages/menu/menu3/Menu3';
import Contact from './pages/contact/Contact';
import ReserveTable from './pages/reserve/ReserveTable';
import Login from './pages/account/Login';
import Signup from './pages/account/Signup';
import { ToastContainer} from 'react-toastify';
import Home from './pages/cart/Home';
import Cart from './pages/cart/Cart';
import Order from './pages/cart/Order';


export const backendUrl = import.meta.env.VITE_BACKEND_URL

export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<HOME/>}></Route>
        <Route path='/menu/menu1' element={<Menu/>}></Route>
        <Route path='/menu/menu2' element={<Menu2/>}></Route>
        <Route path='/menu/menu3' element={<Menu3/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/reserve-table' element={<ReserveTable/>}></Route>
        <Route path='/account/login' element={<Login/>}></Route>
        <Route path='/account/signup' element={<Signup/>}></Route>
        <Route path='/account/home' element={<Home/>}></Route>
        <Route path='/account/cart' element={<Cart/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
      </Routes>
    </div>
  )
}
