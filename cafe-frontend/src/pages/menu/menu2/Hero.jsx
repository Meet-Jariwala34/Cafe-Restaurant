import React from 'react'
import bg from '../../../assets/food-item-3.jpeg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='relative h-[80vh] w-screen bg-[#0e0d0c] flex justify-center items-center'>

    <div id='menu-hero' className='h-[80vh] w-screen absolute top-0 left-0 z-0 opacity-40'></div>

    <div className='dancing-script text-[#f3d590] text-center z-1'>
        DELECIOUS & AMAZING
        <p className='montserrat-thin text-white text-6xl mt-8'>OUR MENU 2</p>
    </div>

    <Link to={'/menu/menu1'} className='h-[8vmax] w-[8vmax] rounded-full absolute top-[50%] bg-white text-black font-bold left-[10%]  p-5 text-5xl flex justify-center items-center'><div><i class="fa-solid fa-left-long"></i></div></Link>
<Link to={'/menu/menu3'} className='h-[8vmax] w-[8vmax] rounded-full absolute top-[50%] bg-white text-black font-bold right-[10%] p-5 text-5xl flex justify-center items-center'><i class="fa-solid fa-right-long"></i></Link>

    </div>
  )
}
