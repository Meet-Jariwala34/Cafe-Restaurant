import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { backendUrl } from '../../../cafe-frontend/src/App';
import {toast} from 'react-toastify'
import { useState } from 'react';

export default function CustomerList({token}) {

  const [list,setList] = useState([]);

  const fetchUsers = async () => {
    try {

      const res = await axios.get(backendUrl+'/api/user/list-users',{headers:{'token':token}});
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
        setList(res.data.users);
      }else{
        toast.error(res.data.message);
      }

      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  return (
    <div className='h-[90vh] w-[75vw] flex flex-nowrap gap-2 flex-col p-5 overflow-y-auto'>
      <p className='roboto 4xl text-center text-xl'>You have total : {list.length} Users</p>
      {
        list.map((user,index)=>(
          
          <div key={index} className='h-[12vh] w-full p-3 flex items-center bg-[#f4d59c] rounded-md justify-between'>
            <div ><p className='roboto font-bold tracking-widest text-3xl'>{user.name}</p></div>
            <div ><p className='text-xl roboto'>+91 {user.number}</p></div>
          </div>
        ))
      }
    </div>
  )
}
