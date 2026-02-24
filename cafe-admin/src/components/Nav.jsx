import React from 'react'
import logo from '../assets/Logo.png';
export default function Nav({setToken}) {
  return (
    <div className='h-[10vh] w-full bg-gray-200 flex px-8 flex-row items-center justify-between'>
      {/* logo */}
        <div className='h-full w-[18vw] justify-evenly flex items-center text-3xl roboto'>
          <div className='h-full'><img src={logo} className='h-full object-cover'></img></div>
          <div><p>365 CAFE</p></div>
          </div>
      {/* Logout */}
        <div className='h-full py-2 w-[12vw]'>
          <button onClick={()=>{setToken('');}} className='h-full w-[12vw] bg-[#1a1b1c] text-white roboto text-xl cursor-pointer rounded-md'>Log out</button>
        </div>
    </div>
  )
}
