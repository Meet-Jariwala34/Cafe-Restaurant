import React from 'react'
import pattern1 from '../../assets/pattern-1.svg';
import food1 from '../../assets/Food-item-1.avif';
import food2 from '../../assets/Breakfast.jpg';
import food3 from '../../assets/drinks.jpg';
import bg1 from '../../assets/bg-1.png';
import bg2 from '../../assets/bg-2.png';
import Reveal from '../../component/Reveal';
import {NavLink, Link} from 'react-router-dom';

export default function Royalty() {

    
  return (
    <div id='royalty' className='h-[150vh] w-screen items-center bg-[#0e0d0c] py-20 px-10 flex flex-col relative'>

{/* Background dynamic img */}
        <img id='bg-animation' src={bg1} className='absolute bottom-[10vh] left-[1vw]' />
        <img id='bg-animation' src={bg2} className='absolute top-[10vh] right-[1vw]' />

        <div className=' border-b-2 border-[#f3d590] pb-[5vh] w-[40vw]'>
            <p  className='dancing-script ml-10 text-4xl text-[#f3d590] text-cente  mb-2'>Flavour for royalty</p>
            
        </div>

        <div className='m-4'><h2 className='roboto-condensed text-6xl'>We offer Top-Notch</h2></div>

        {/* Top 3 items div */}

        <div id='top3' className='h-[80vh] w-full justify-between px-2 gap-5 flex '>

            {/* left */}
            <Reveal direction='up' delay={0.3}>
            <Link to={'/menu/menu1'}>
            <div id='outter-food-item' className='royalty-scroll transition-[0.3s] h-[80vh] w-[25vw] relative'>
                <div id='food-item' className='h-[60vh] w-full'><img className='h-[60vh] w-full' src={food1}/></div>
                <span className='text-4xl'><h2 className='mt-[10vh] text-center'>Breakfast</h2></span>
                <span className='text-2xl'><h2 className='mt-[2vh] text-center roboto-condensed cursor-pointer text-[#f3d590]'>view Menu</h2></span>
            </div>
            </Link>
            </Reveal>

            {/* mid */}
            <Reveal direction='up' delay={0.5}>
            <Link to={'/menu/menu2'}>
            <div id='outter-food-item' className='h-[80vh] w-[25vw] relative'>
                <p className='mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quidem nulla earum nobis reprehenderit?</p>
                <div id='food-item' className='h-[60vh] w-full'><img className='h-[60vh] w-full' src={food2}/></div>
                <span className='text-4xl'><h2 className='mt-[10vh] text-center'>Appetizers</h2></span>
                <span className='text-2xl'><h2 className='mt-[2vh] text-center roboto-condensed cursor-pointer text-[#f3d590]'>view Menu</h2></span>
            </div>
            </Link>
            </Reveal>

            {/* right */}
            <Reveal direction='up' delay={0.7}>
            <Link to={'menu/menu3'}>
            <div id='outter-food-item' className='h-[80vh] w-[25vw] relative'>
                <div id='food-item' className='h-[60vh] w-full'><img className='h-[60vh] w-full' src={food3}/></div>
                <span className='text-4xl'><h2 className='mt-[10vh] text-center'>Drinks</h2></span>
                <span className='text-2xl'><h2 className='mt-[2vh] text-center roboto-condensed cursor-pointer text-[#f3d590]'>view Menu</h2></span>
            </div>
            </Link>
            </Reveal>
        </div>
        
    </div>
  )
}
