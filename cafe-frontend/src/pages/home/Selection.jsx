import React, { useState } from 'react'
import Morning from './Morning';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Drink from './Drinks';
import bg1 from '../../assets/bg-4.png';
import bg2 from '../../assets/bg-5.png';



export default function Selection() {
    const [select, setSelect] = useState('morning');


    const displayMenu = () =>{
        switch (select) {
            case 'lunch':
                console.log('lunch');
                return <Lunch/>
                break;
            case 'dinner':
                console.log('dinner');
                return <Dinner/>
                break;
            case 'drink':
                console.log('drink');
                return <Drink/>
                break;
            default:
                console.log('morning');
                return <Morning/>
                break;
        }
    }


  return (
    <>
    
    {/* content */}
    <div className='h-[180vh] md:h-[160vh] w-screen bg-[#171819] md:py-[20vh] px-[5vw] ease-in relative'>
        {/* background */}

    <img id='bg-animation' src={bg1} alt="" className='hidden md:flex absolute bottom-[20vh] right-1' />
    <img id='bg-animation' src={bg2} alt="" className='hidden md:flex h-[70vh] opacity-50 absolute bottom-0 left-1' />

        <p className='dancing-script text-[#f3d590] text-center tracking-[10px] text-2xl underline underline-offset-25  md:mb-6 sm:mb-14'>Special Selction </p>
        <p  style={{textAlign:'center'}}  className='special-p text-5xl  roboto-condensed md:mb-6  md:my-[10vh] sm:my-[30vh] '>Delicious Menu</p>
        <div className='z-1 md:h-[15vh] h-[45vh] w-full border-t-1 border-b-1 mt-4 border-white flex justify-center'>
            <ul className='flex flex-col md:flex-row h-full pt-8 w-auto list-none gap-15 montserrat text-xl'>
                <li onClick={()=>{
                    setSelect('morning');
                }} className='md:border-x-2 cursor-pointer sm:border-y-2 active:text-2xl md:border-y-0 border-[#f3d590] h-10 px-4 py-1'>Morning</li>
                <li onClick={()=>{
                    setSelect('lunch');
                }} className='md:border-x-2 cursor-pointer sm:border-y-2 active:text-2xl  md:border-y-0 border-[#f3d590] h-10 px-4 py-1'>Weekday Lunch</li>
                <li onClick={()=>{
                    setSelect('dinner');
                }} className='md:border-x-2 cursor-pointer sm:border-y-2  active:text-2xl md:border-y-0 border-[#f3d590] h-10 px-4 py-1'>Dinner</li>
                <li onClick={()=>{
                    setSelect('drink');
                }} className='md:border-x-2 cursor-pointer sm:border-y-2  active:text-2xl md:border-y-0 border-[#f3d590] h-10 px-4 py-1'>Drinks</li>
            </ul>
        </div>
        {displayMenu()}
    </div>
    </>
  )
}
