import React from 'react'
import img from '../../assets/offer-img-4.jpg';

export default function Middle() {
  return (
    <div className='h-[160vh] w-screen bg-[#1a1b1c] flex flex-col items-center p-10'>
        <div className='h-[25%] w-full flex items-center justify-evenly p-10'>
            <div className='h-full w-[33%] p-2.5 '>
                <p className='text-3xl roboto-condensed'>Lunch Time</p>
                <p className='text-sm mt-2 text-gray-500'>
                    <p>Monday to Sunday </p>
                    <p>11 AM to 2:30 PM</p>
                </p>
            </div>
            <div className='h-full w-[33%] p-2.5 '>
                <p className='text-3xl roboto-condensed'>Contact Info</p>
                <p className='text-sm mt-2 text-gray-500'>
                    <p>365 CAFE , piplod , Surat</p>
                    <p className='montserrat mt-3'>BOOKING : +91 9428867728</p>
                </p>
            </div>
            <div className='h-full w-[33%] p-2.5 '>
                <p className='text-3xl roboto-condensed'>Dinner Time</p>
                <p className='text-sm mt-2 text-gray-500'>
                    <p>Monday to Sunday </p>
                    <p>4 PM to 11 PM</p>
                </p>
            </div>
        </div>

        {/* msg us */}
        <div className='h-[75%] w-full bg-[rgb(14,13,12)] p-3 justify-center md:p-8 gap-8 flex items-center'>
            <div className="flex flex-col h-full justify-center w-full md:w-[55%] gap-3 items-center py-15">
                <p className='text-5xl my-2 text-center roboto-condensed'>Message Us !</p>
                <input type="text" placeholder='YOUR NAME' className='h-[8vh] w-[75%] p-8 active:outline-none border-none bg-[#1a1b1c]' />
                <input type="email" placeholder='YOUR EMAIL' className='h-[8vh] w-[75%] p-8 active:outline-none border-none bg-[#1a1b1c]'/>
                <input type="number" placeholder='YOUR PHONE NUMBER' className='h-[8vh] w-[75%] p-8 active:outline-none border-none bg-[#1a1b1c]' />
                <textarea name="query" placeholder='YOUR QUERY' id="" className='h-[25vh] w-[75%] p-8 active:outline-none border-none bg-[#1a1b1c] resize-none'></textarea>
                <button id='table-btn' className=' h-[8vh] w-[75%] text-black border-4 cursor-pointer hover:bg-black hover:text-white' >SEND YOUR MESSAGE</button>
            </div>
            <div className='h-full hidden md:flex w-[40%] '>
                <img src={img} alt="" className='h-full w-full object-cover'/>
            </div>
        </div>

    </div>
  )
}
