import React from 'react'
import Reserve from '../../component/Reserve'

export default function ReserveTable() {
  return (
    <div >
        <div id='reserve-hero' className='h-[70vh] w-screen p-15 flex justify-center items-end'>
            <div>
                <p className='roboto-condensed text-6xl'>Reserve Table </p>
            </div>
        </div>
        <Reserve/>
    </div>
  )
}
