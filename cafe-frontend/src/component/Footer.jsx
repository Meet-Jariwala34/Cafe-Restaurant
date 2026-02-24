import React from 'react'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='md:h-[125vh] h--[150vh] relative flex md:flex-row flex-col items-center  w-[100vw] bg-[#0e0d0c]'>
      {/* background image */}
      <div id='footer' className='h-[125vh] absolute top-0 left-0 z-0 w-[100vw] opacity-40 '></div>

      {/* left */}
      <div className='md:h-full h-auto z-9 w-screen md:w-[25%] p-8 flex gap-8  flex-col justify-center items-center'>
        <Link to={'/'}> <div className='flex montserrat-thin tracking-[1vh] justify-center cursor-pointer items-center'><span className='cursor-pointer'>HOME</span></div></Link>
        <Link to={'/menu/menu1'}> <div className='flex montserrat-thin tracking-[1vh] justify-center cursor-pointer items-center'><span className='cursor-pointer'>MENU</span></div></Link>
        <Link to={'/about'}> <div className='flex montserrat-thin tracking-[1vh] justify-center cursor-pointer items-center'><span className='cursor-pointer'>ABOUT</span></div></Link>
        <Link to={'/chefts'}> <div className='flex montserrat-thin tracking-[1vh] justify-center cursor-pointer items-center'><span className='cursor-pointer'>OUR CHEFTS</span></div></Link>
        <Link to={'/contact'}> <div className='flex montserrat-thin tracking-[1vh] justify-center cursor-pointer items-center'><span className='cursor-pointer'>CONTACT</span></div></Link>
      </div>
      <div className='md:h-[95vh] h-auto z-9 w-screen md:w-[50%] p-15 gap-5'>
        <div id='footer-content' className='h-full py-10 px-5 flex flex-col items-center bg-[#0e0d0c] w-full '>
          <div className='h-15 flex montserrat-thin items-center justify-evenly text-2xl  w-[50%]'><img src={logo} alt="logo" className='h-15 my-10'/><span>365 CAFE</span></div>
          <div className='h-40 mt-7 opacity-40 w-full px-5 mb-10'>
            <p className='my-2'>City Light Town, Citylight, Surat, Gujarat</p>
            <p className='my-2'>officialmeetjariwala@gmail.com</p>
            <p className='my-2'>Booking request :- +91 9428867728</p>
            <p className='my-2'>Open : 11AM - 11PM</p>
            </div>
            <div>
              <h2 className='text-3xl'>Get News and Offers</h2>
              <p className='opacity-40 my-3'>Subscribe us & get 20% Off</p>
            </div>
            <div className='flex h-[8vh] w-[80%] bg-[#1a1b1c] items-center'>
              <i class="fa-regular fa-envelope text-xl p-3 mr-2"></i>
              <input type='email' placeholder='Your email' className='p-3 outline-0 active:outline-0 border-0 h-full w-[60%]'/>
              <button className='h-full w-[35%] bg-[#f3d590] text-[#0e0d0c] text-[0.85rem] tracking-[0.3vmin] hover:bg-[#0e0d0c] hover:text-[#fff] hover:border-2 cursor-pointer'>SUBSCRIBE</button>
            </div>
        </div>
      </div>

      <div className='md:h-full h-auto z-9 w-screen md:w-[25%] p-8 flex gap-8  flex-col justify-center items-center'>
        <div className='flex montserrat-thin tracking-[1vh] cursor-pointer justify-center items-center'><span>FACEBOOK</span></div>
        <div className='flex montserrat-thin tracking-[1vh] cursor-pointer justify-center items-center'><span>INSTAGRAM</span></div>
        <div className='flex montserrat-thin tracking-[1vh] cursor-pointer justify-center items-center'><span>TWITTER</span></div>
        <div className='flex montserrat-thin tracking-[1vh] cursor-pointer justify-center items-center'><span>YOUTUBE</span></div>
        <div className='flex montserrat-thin tracking-[1vh] cursor-pointer justify-center items-center'><span>GOOGLE MAP</span></div>
      </div>
    </div>
  )
}

