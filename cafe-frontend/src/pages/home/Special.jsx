import React from 'react'
import photo from '../../assets/food-item-3.jpeg';
import Reveal from '../../component/Reveal';
import {Link} from 'react-router-dom';
export default function Special() {
  return (
    <div className='bg-[#0e0d0c] h-[135vh] w-screen flex flex-col md:flex-row'>
      <Reveal direction='right' delay={0.3}>
        <div className='h-full w-screen md:w-[50vw]'>
            <img src={photo} className='h-full w-full object-cover' />
        </div>
        </Reveal>

        <Reveal direction='left' delay={0.5}>
        <div className='h-full w-screen md:w-[50vw] py-[10vh] px-[10vw] md:py-[25vh] md:px-[5vw] text-left'>
            <p  style={{textAlign:'left'}}  className='special-p dancing-script text-[#f3d590] text-center  text-2xl underline underline-offset-25 md:mb-6'>Special Dish </p>
            <p  style={{textAlign:'left'}}  className='special-p text-5xl roboto-condensed md:mb-6  md:my-[10vh] sm:my-[30vh] '>Black Forest Gateau</p>
            <p style={{textAlign:'left'}} className='special-p md:mb-6 sm:mb-14 leading-[4vh] text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur aliquid? Pariatur nesciunt molestiae exercitationem maxime, quo ea quia corporis labore quod architecto laudantium cupiditate at dolorem, officiis ex magni!
              Ipsam nemo consequatur laudantium suscipit</p>
            <p className='special-p my-[5vh] flex'><span className='roboto-condensed text-3xl opacity-40 line-through'>Rs.230.00</span><span  className='roboto-condensed text-3xl opacity-100 md:ml-[5vw] text-[#f3d590] sm:ml-[2vw]'>Rs.130.00</span></p>
            <Link to={'/reserve-table'}>
            <button id='table-btn' className=' h-15 w-[25vw] text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Find Table</button>
            </Link>
        </div>
        </Reveal>
    </div>
  )
}
