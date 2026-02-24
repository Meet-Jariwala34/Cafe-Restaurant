import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

export default function Order({token}) {
  
  const [list, setList] = useState([]);
  const [editData , setEditData] = useState(null);
  const [tags,setTags] = useState([]);

  const fetchOrders = async () =>{
    try {

      const res = await axios.get(backendUrl+'/api/order/listOrders',{headers:{'token':token}});
      
      

      if(res.data.success){
        setList(res.data.orders);
        
      }else{
        toast.error(res.data.message);
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchOrders();
        console.log(list+"list");
        console.log(list[0]);
  },[]);

  const handleToggle = (option) => {
    setTags((prev) => 
  prev.includes(option) 
    ? prev.filter(item => item !== option) // Remove
    : [...prev, option]                    // Add
);
  };

  const handleEditSubmit = async () => {
    setEditData({...editData,tags : tags});

    try {

      const res = await axios.put(backendUrl+'/api/product/editItem',editData,{headers:{'token':token}})

      if(res.data.success){
        setList(prevList => 
          prevList.map(prevItem => {
            if(prevItem._id === editData._id) {
              return editData
            } else{
              return prevItem
            }
          })
      )
        setEditData(null);
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message);
        console.log(res)
      }
      
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  const handleDelet = async () => {
    try {

      const id = editData._id;
      const res = await axios.post(backendUrl+'/api/product/removeItem',{'_id':id},{headers:{'token':token}})

      if(res.data.success){
        setList((prevList) => prevList.filter((item) => item._id !== id));
        setEditData(null);
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message);
        toast.error("from else")
        console.log(res)
      }
      
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }
  return (
    <div className='h-[90vh] w-[75vw] px-5 gap-2 overflow-y-auto flex-nowrap z-0'>
      <p className='text-2xl text-center roboto'>You have total {list.length} Orders</p>
        {
          list.map((item,index)=>(
            <div key={index} className='my-4 h-[12vh] w-full p-1.5 flex items-center bg-[#1a1b1c] rounded-md justify-between'>
              <div className='h-full w-[20%]'>
                {/* {
                  item.items.map((i, idx)=>{
                    <div key={idx}>
                      <img src={i.menuItem.image} alt={i.menuItem.itemName} className='h-[10vh] w-[10vh] rounded-md'/>
                      </div>
                  })
                } */}
              </div>
              <div className='h-full w-[60%]'>
                <p className='roboto font-bold tracking-wider text-2xl text-left text-white'>{item.itemName}</p>
                <p className='text-xl font-light opacity-50 text-white'><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</p>
              </div>

              <div><i onClick={()=>setEditData(item)} class="fa-solid text-3xl text-white fa-pen-to-square cursor-pointer"></i></div>

              <div 
              onClick={()=> toggleAvailability(item,item.isAvailable)}
              className='h-full flex justify-center items-center  w-[20%]'>

                {
                  item.isAvailable
                  ? <i class="fa-solid text-6xl text-green-400 fa-toggle-on cursor-pointer"></i>
                  : <i class="fa-solid text-6xl text-red-400 fa-toggle-off cursor-pointer"></i>
                }
                
              </div>
              
              {editData && <div className='h-screen w-screen absolute bg-[rgba(255,255,255,0.8)] p-20 top-0 left-0'>
              <p className='roboto text-5xl font-bold tracking-wider'>Edit Dish : {editData.itemName}</p>
                <div>
                  <p className='text-sm opacity-50'>Enter your Dish Name</p>
                  <input type="text" value={editData.itemName} onChange={(e)=>setEditData({...editData,itemName:e.target.value})} className='h-[8vh] w-full text-center p-3 roboto bg-gray-400 font-bold rounded-md' placeholder='Enter your dishname'/>
                </div>

                <div>
                  <p className='text-sm opacity-50'>Enter your Dish Price</p>
                  <input type="text" value={editData.price} onChange={(e)=>setEditData({...editData,price:e.target.value})} className='h-[8vh] w-full text-center p-3 roboto bg-gray-400 font-bold rounded-md' placeholder='Enter your dishPrice'/>
                </div>

                <div>
                  <p className='text-sm opacity-50'>Enter your Dish Description</p>
                  <input type="text" value={editData.description} onChange={(e)=>setEditData({...editData,description:e.target.value})} className='h-[8vh] w-full text-center p-3 roboto bg-gray-400 font-bold rounded-md' placeholder='Enter your Description'/>
                </div>


                <div className=' mt-3 flex gap-1.5 justify-between'>
                <div  onClick={()=>handleToggle("Chef Special")} className={`h-[8vh] w-[15vw] text-center p-3 rounded-md cursor-pointer ${tags.includes("Chef Special")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold `}>Chef Special</div>
                <div  onClick={()=>handleToggle("Bestseller")} className={`h-[8vh] w-[15vw] text-center p-3 rounded-md cursor-pointer ${tags.includes("Bestseller")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>Bestseller</div>
                <div  onClick={()=>handleToggle("New")} className={`h-[8vh] w-[15vw] text-center p-3 rounded-md cursor-pointer ${tags.includes("New")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>New</div>
                <div  onClick={()=>handleToggle("Spicy")} className={`h-[8vh] w-[15vw] text-center p-3 rounded-md cursor-pointer ${tags.includes("Spicy")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`} >Spicy</div>
                <div  onClick={()=>handleToggle("Sugar-Free")} className={`h-[8vh] w-[15vw] text-center p-3 rounded-md cursor-pointer ${tags.includes("Sugar-Free")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>Sugar-Free</div>
                </div>
                <div className='m-5 h-[12vh] w-full flex items-center justify-center'>
                  
                  <button onClick={()=> setEditData(null)} className='h-full w-[15vw] p-3 mx-5 bg-gray-500 font-bold rounded-md cursor-pointer'>Cancle</button>
                  <button onClick={()=>handleDelet()} className='h-full w-[15vw] p-3 mx-5 bg-red-400 font-bold text-white rounded-md cursor-pointer'>Delet</button>
                  <button onClick={()=>handleEditSubmit()} className='h-full w-[15vw] p-3 mx-5 bg-green-400 font-bold text-white rounded-md cursor-pointer'>Submit</button>
                </div>
              </div>}
      
            </div>            
          ))
        }

    </div>
  )
}
