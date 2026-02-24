import React from 'react'
import p1 from '../../../assets/offer-img-1.jpg';
import p2 from '../../../assets/offer-img-2.jpg';
import p3 from '../../../assets/offer-img-3.jpg';
import p4 from '../../../assets/offer-img-4.jpg';

export default function Offers() {
  return (
    <div className='md:h-[150vh] h-[250vh] w-screen bg-transparent flex flex-col justify-between p-15'>
      {/*Offer 1 // row 1 */}
        <div className='h-[48%] w-full flex flex-col md:flex-row  justify-between'>
          {/* content */}
          <div id='offer-content' className='h-full flex flex-col justify-evenly text-center relative w-full md:w-[40%] px-10 py-12'>
            <div className='absolute top-0 left-0 offer-content-left'></div>

            <div><h2 className='roboto-condensed text-4xl'>Private Events</h2></div>
            <div><p className='text-sm w-70% opacity-40 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elii amet impedit doloremque distinctio, ea architecto reprehenderit eum obcaecati?</p></div>
            <div><p className='roboto-condensed text-xl'>Booking</p>
            <p className='montserrat text-2xl'>+91 9428867728</p></div>
            <div className='cursor-pointer active my-3 w-auto transition ease-in-out'><button id='table-btn' className=' h-15 w-50 text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Find Table</button></div>
          </div>
          {/* img 1 */}
          <div className='md:h-full text-center relative w-[27%]'>
            <img src={p2} alt=""  className='w-full hidden md:flex h-full object-cover'/>
          </div>
          {/* img 2 */}
          <div className='h-full hidden md:flex text-center relative w-[27%]'>
            <img src={p1} alt=""  className='h-full w-full object-cover'/>
          </div>
        </div>
        {/*Offer 2 // row 2 */}
        <div className='h-[48%] w-full flex justify-between'>
          
          {/* img 1 */}
          <div className='h-full hidden md:flex text-center relative w-[27%]'>
            <img src={p3} alt=""  className='w-full h-full object-cover'/>
          </div>
          {/* img 2 */}
          <div className='h-full hidden md:flex text-center relative w-[27%]'>
            <img src={p4} alt=""  className='h-full w-full object-cover'/>
          </div>

          {/* content */}
          <div id='offer-content' className='h-full flex flex-col justify-evenly text-center relative w-full md:w-[40%] px-10 py-12'>
            <div  className='absolute top-0 right-0 offer-content-right'></div>

            <div><h2 className='roboto-condensed text-4xl'>BANQUET HALL</h2></div>
            <div><p className='text-sm w-70% opacity-40 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elii amet impedit doloremque distinctio, ea architecto reprehenderit eum obcaecati?</p></div>
            <div>
              <p className='roboto-condensed text-xl'>Booking</p>
            <p className='montserrat text-2xl'>+91 9428867728</p>
            </div>
            <div className='cursor-pointer active my-3 w-auto transition ease-in-out'><button id='table-btn' className=' h-15 w-50 text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Find Table</button></div>
          </div>
        </div>
    </div>
  )
}
