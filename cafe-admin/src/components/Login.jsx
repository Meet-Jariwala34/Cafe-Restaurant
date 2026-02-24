import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Login({setToken}) {

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const respond = await axios.post(backendUrl+'/api/user/admin',{number,password});
      if(respond.data.success){
        setToken(respond.data.token)
      }else{
        toast.error(respond.data.message);
      }


    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='h-[55vh] w-[30vw] p-8 bg-gray-100 text-center'>
        <div><p className='text-3xl roboto'>Login</p></div>
        <form onSubmit={handleSubmit} className='h-[40vh] w-full gap-4'>
          <p className='text-sm opacity-45 mb-2 text-left'>Number</p>
          <input type="number" onChange={(e)=>{setNumber(e.target.value)}} value={number} placeholder='Enter your Number' className='h-[8vh] w-full outline-0 bg-gray-400 roboto text-xl p-2' required/>
          <p className='text-sm opacity-45 mb-2 text-left'>Password</p>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  placeholder='Enter your Password' className='h-[8vh] w-full bg-gray-400 roboto text-xl p-2 mb-5 outline-0' required/>
          <button className='bg-[#ba534f] h-[8vh] w-full roboto text-2xl font-bold text-white cursor-pointer'>LOGIN</button>
        </form>
        
      </div>
    </div>
  )
}
