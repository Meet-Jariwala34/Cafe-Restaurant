import React from 'react'

export default function Reserve() {
  return (
    // background
    <div id='reserve' className='h-screen w-screen  bg-transparent p-15'>
        {/* inner box */}
        <div className='h-full w-full  flex flex-col md:flex-row '>
            {/* Upper box */}
            <div className='h-full  w-full md:w-[65%] flex flex-col md:px-15 md:py-10 p-5 bg-[#0e0d0c]'>
                <p className='roboto-condensed text-4xl  text-center '>ONLINE RESERVATION</p>
                <p>Booking request <span className='text-[#f3d590]'>+91 9428867728</span> or fillout the form</p>

                {/* Form */}
                <form methos='GET' action="" className='mt-10 md:h-[60vh] h-[85vh] md:justify-normal justify-between w-full flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row md:h-[10vh] h-[12vh] gap-2 w-full justify-evenly items-center'>
                        <input type="text" placeholder='Your Name' className='h-full w-full md:w-[45%] bg-[#1a1b1c] p-2'/>
                        <input type="text" placeholder='Phone Number' className='h-full w-full md:w-[45%] bg-[#1a1b1c] p-2'/>
                    </div>
                    <div className='flex md:h-[8vh] h-[20vh] w-full flex-col md:flex-row gap-3 justify-between md:justify-evenly items-center'>
                        <input type="number" placeholder='person' className='md:h-full h-[30%] w-full md:w-[30%] bg-[#1a1b1c] p-2'/>
                        <input type="date" placeholder='Phone Number' className='md:h-full h-[30%] w-full md:w-[30%] bg-[#1a1b1c] p-2'/>
                        <input type="time" placeholder='Phone Number' className='md:h-full h-[30%] w-full md:w-[30%] bg-[#1a1b1c] p-2'/>
                    </div>
                    <div className='flex h-[15vh] w-full px-5 justify-evenly items-center'>
                        <textarea  placeholder='Message' rows='6' cols={500} className='h-full w-full bg-[#1a1b1c] p-2 resize-none'/>
                    </div>
                    <div className='cursor-pointer active mt-3 ml-4 hover:bg-black underline-offset-8 md:h-full h-[10vh] transition ease-in-out'><button id='table-btn' className='roboto-condensed tracking-[3px] h-15 w-full text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Book A Table</button></div>
                </form>
            </div>


            {/* Offer */}
            <div id='reserve-inner' className='h-full hidden md:flex w-[35%] p-10 flex-col '>
                <p className='dancing-script topic text-cente text-xl  mb-2'>HOT DEALS</p>
        <p className='roboto-condensed mb-15 text-2xl'>LUNCH & DINNER SPECIAL </p>

            <div className='relative mt-10 h-[60vh] w-full'>
                <div id='spin' className="absolute h-[12vmax] z-0 w-[12vmax] rounded-xl bg-black animation-[spin] right-25 top-0 "></div>
                <div className="absolute h-[12vmax] z-1 w-[12vmax] rounded-xl bg-[#1a1b1c] border-3 border-black right-25 top-0 p-5">
                    <p className='montserrat text-sm'>UPTO</p>
                    <p className='text-5xl py-2'>45%</p>
                    <p className='montserrat text-sm'>Discount</p>
                </div>
            </div>

            <div className='cursor-pointer active mt-3 ml-4 hover:bg-black underline-offset-8 transition ease-in-out'><button id='table-btn' className='roboto-condensed tracking-[3px] h-15 w-full text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Book NOW</button></div>

            </div>

        </div>
    </div>
  )
}
