import axios from 'axios';
import React, { useContext, useState , useEffect } from 'react'
import {Link} from 'react-router-dom'
import { backendUrl } from '../../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { StoreDataContext } from '../../../context/StoreDataContext';



export default function Login() {
  const [number,setNumber] = useState('');
  const [password,setPassword] = useState('');
  const {token} = useContext(StoreDataContext);
  const navigate = useNavigate();

  const handleEnter = (ev) => {
    if(ev == 'Enter'){
      handleSubmit();
      
    }
  }

  
  
  const handleSubmit = async () => {
    const user = {
    number:number,
    password : password
  }
  try {

    const res = await axios.post(backendUrl+'/api/user/login',user);
    console.log(res);
    if(res.data.success){
      toast.success(res.data.message);
      localStorage.setItem("token",res.data.token);
      setNumber('');
      setPassword('');
    }else{
      toast.error(res.data.message);
    }

    if(token){
      navigate("/account/home");
    }else{
      toast.error("Can't able to go to Cart Page")
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
        <div><p className='montserrat-thin text-6xl'>WELCOME BACK</p></div>
      </div>
      {/* main content */}
      <div id='login-box' className='h-screen w-screen flex items-center justify-center'>
        <div className='h-[65vh] md:w-[40vw] w-[70vw] bg-[rgba(250,250,250,0.4)] rounded-2xl p-8 gap-3 text-black font-bold'>
          <p>Login in your account</p>
          <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Enter your Number' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[8vh] w-full text-black bg-transparent active:outline-0 border-1 rounded-md my-3 p-3'/>
          <input id='pass' type="password" value={password} onKeyDown={(e)=>handleEnter(e.key)}  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your Password' className='h-[8vh] text-black w-full bg-transparent active:outline-0 border-1 rounded-md my-3 p-3'/>
          <p className='text-right my-2 cursor-pointer'>Forget password ?</p>
          <button  onClick={()=>handleSubmit()} className='h-[10vh] my-2 cursor-pointer w-full bg-[#f3d590] rounded-md text-black font-bold tracking-widest'>Login</button>
          <p>Don't have any account ?</p><Link to={'/account/signup'}><p className='cursor-pointer'>Register</p></Link> 
        </div>
    </div>
    </div>
  )
}
