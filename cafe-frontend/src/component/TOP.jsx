import React from 'react'

export default function TOP() {
  return (
    <div className='top h-10 z-50 border-b-1 border-b-amber-10 absolute top-0 p-2 hidden md:flex w-screen background text-sm bg-transparent text-white md:flex-row items-center justify-evenly'>
        <div className="left flex gap-15">
            <div><span><i class="fa-solid fa-location-dot"></i></span>City Light Town, Citylight, Surat</div>
            <div><span><i class="fa-regular fa-clock"></i></span>11 AM to 11 PM</div>
        </div>
        <div className="right flex gap-15">
            <div><spna><i class="fa-solid fa-phone"></i></spna>+91 9428867728</div>
            <div><span><i class="fa-regular fa-envelope"></i></span>officialmeetjariwala</div>
        </div>
    </div>
  )
}
