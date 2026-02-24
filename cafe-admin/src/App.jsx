import React from 'react'
import { useState, useEffect } from 'react'
import Login from './components/Login';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import {Routes, Route} from 'react-router-dom';
import Add from './pages/Add';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Order from './pages/Order';
import CustomerList from './pages/CustomerList';
 import { ToastContainer} from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL


export default function App() {
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
        localStorage.setItem('token',token);
      },[token]);

  return (
    <>
    <ToastContainer/>
    {token === ''
    ? <Login setToken={setToken} />
    : <div className='h-screen w-screen overflow-hidden flex flex-col'>
      <Nav setToken={setToken}/>
      <hr></hr>
      <div className='h-[90vh] w-full flex'>
      <div className='h-[90vh] w-full'>
      <SideBar/>
      </div>
      <div>
        <Routes>
          <Route path={'/'} element={<List token={token}/>}></Route>
          <Route path={'/customer-list'} element={<CustomerList token={token}/>}></Route>
          <Route path={'/add'} element={<Add token={token}/>}></Route>
          <Route path={'/list'} element={<List token={token}/>}></Route>
          {/* <Route path={'/order'} element={<Order token={token}/>}></Route> */}
        </Routes>
      </div>
      </div>
      
      </div>}

    </>
  )
}
