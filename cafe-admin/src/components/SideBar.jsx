import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='h-full w-[25VW] flex flex-col items-center gap-3 py-8 border-r-2'>
      {/* <NavLink className='w-full' to={'/'} ><div className='h-8vh w-full p-3 border-y-2 cursor-pointer text-2xl text-center'><i class="fa-regular fa-house"></i>DASHBOARD</div></NavLink> */}
      {/* <NavLink className='w-full' to={'/order'} ><div className='h-8vh w-full p-3 border-y-2 cursor-pointer text-2xl text-center'><i class="fa-solid fa-bell"></i>LIVE ORDER</div></NavLink> */}
      <NavLink className='w-full' to={'/'} ><div className='h-8vh w-full p-3 border-y-2 cursor-pointer text-2xl text-center'><i class="fa-solid fa-burger"></i>MENU MANAGER</div></NavLink>
      <NavLink className='w-full' to={'/add'} ><div className='h-8vh w-full p-3 border-y-2 cursor-pointer text-2xl text-center'><i class="fa-solid fa-plus"></i>ADD</div></NavLink>
      <NavLink className='w-full' to={'/customer-list'} ><div className='h-8vh p-3 w-full border-y-2 cursor-pointer text-2xl text-center'><i class="fa-solid fa-user-group"></i>CUSTOMER LIST</div></NavLink>
    </div>
  )
}
