import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';

export default function Signup() {

  const [name,setName] = useState('');
  const [number,setNumber] = useState('')
  const [password, setPassword] = useState('');
  const [date,setDate] = useState('');

  const handleSumit = async (e) => {
    const user = {
      name : name,
      number : number,
      password : password,
      birthday:date
    }

    try {

      const res = await axios.post(backendUrl+'/api/user/register',user);
      console.log(res.data);
      if(res.data.success){
        toast.success(res.data.message);
        setName('');
        setNumber('');
        setPassword('');
        setDate('');
      }else{
        toast.success(res.data.message)
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }


  return (
    <div>
      {/* Hero */}
      <div id='account-hero' className='h-[70vh] flex w-screen p-20 items-end justify-center'>
        <div><p className='montserrat-thin text-6xl'>JOIN WITH US !</p></div>
      </div>
      {/* main content */}
      <div id='login-box' className='h-screen w-screen flex items-center justify-center'>
        <div className='h-[80vh] w-[40vw] bg-[rgba(250,250,250,0.4)] rounded-2xl p-8 gap-3 text-black font-bold'>
          <p>Create your account </p>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter your Name' className='h-[8vh] w-full text-black bg-transparent outline-0 border-2 rounded-md my-3 p-3'/>
          <input onChange={(e)=>setNumber(e.target.value)} value={number} type="number" placeholder='Enter your Number' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[8vh] w-full text-black bg-transparent outline-0 border-2 rounded-md my-3 p-3'/>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your Password' className='h-[8vh] text-black w-full bg-transparent outline-0 border-2 rounded-md my-3 p-3'/>
          <input onChange={(e)=>setDate(e.target.value)} value={date} type="date" placeholder='Enter your Password' className='h-[8vh] text-black w-full bg-transparent outline-0 border-2 rounded-md my-3 p-3'/>
          <button onClick={()=>{handleSumit()}} className='h-[10vh] my-2 cursor-pointer w-full bg-[#f3d590] rounded-md text-black font-bold tracking-widest'>JOIN US</button>
          <p>Already have account ?<Link to={'/account/login'}><p className='cursor-pointer'>Login</p></Link>  </p>
        </div>
    </div>
    </div>
  )
}
