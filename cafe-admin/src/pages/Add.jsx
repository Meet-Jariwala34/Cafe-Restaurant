import React, { use, useState } from 'react'
import add from '../assets/add.avif';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

export default function Add({token}) {
  const [img , setImg ] = useState(false)
  const [itemName,setItemName] = useState('')
  const [price,setPrice] = useState(0);
  const [category,setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isVeg, setIsVeg] = useState(true);
  const [tags,setTags] = useState([]);

  const handleToggle = (option) => {
    setTags((prev) => 
  prev.includes(option) 
    ? prev.filter(item => item !== option) // Remove
    : [...prev, option]                    // Add
);
  };

  const onSubmitHandle = async (e) => {
    
    e.preventDefault();
      
      const fd = new FormData();

      fd.append("itemName",itemName);
      fd.append("price",price);
      fd.append("category",category);
      fd.append("description",description);
      fd.append("isVeg", isVeg);
      tags.forEach(tag => fd.append("tags[]",tag));
      fd.append("image",img);
    
    try {
    
      const res = await axios.post(backendUrl+'/api/product/addItem',fd,{headers:{
        'token':token,
        'Content-Type': 'multipart/form-data'
      }});
      if(res.data.success){
        toast.success(res.data.message);
      }
      console.log(res.data.message);

      setImg(false);
      setItemName('')
      setPrice(0);
      setDescription('');
      setCategory('');
      setIsVeg(true);
      setTags([]);

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  return (
    <div className='h-[90vh] w-[75vw] flex justify-center items-center'>
        <form className='flex flex-col items-center' onSubmit={onSubmitHandle} action="">
          <div className='h-[80vh] w-[75vw] flex flex-row items-center justify-center bg-gray-200 rounded-md p-5' >
        <div className='h-full w-[40%] flex  items-center'>
          <label htmlFor="image" className='w-full'>
            <input onChange={(e)=>{setImg(e.target.files[0])}} type="file" id='image' hidden/>
            <img src={!img?add:URL.createObjectURL(img)} className='w-full cursor-pointer' alt="Add img" />
          </label>
          </div>
        <div className='h-full w-[60%] flex flex-col px-5 py-3'>
          <p className='text-2xl font-bold tracking-wider mb-5'>ADD ITEMS DETAILS</p>
          <div>
            <div>
              <p className='text-sm text-gray-600'>Items Name</p>
              <input onChange={(e)=>{setItemName(e.target.value)}} value={itemName} className='h-[8vh] w-full p-2 bg-white outline-0' type="text" placeholder='Enter the name of the Itemes'/>
            </div>
            <div>
              <p className='text-sm text-gray-600'>Price</p>
              <input onChange={(e)=>{setPrice(e.target.value)}} value={price} className='h-[8vh] w-full p-2 bg-white outline-0' type="text" placeholder='Enter the name of the Itemes'/>
            </div>
            <div className=' mt-3 flex gap-1.5 justify-between'>
                <div onDoubleClick={()=>{setCategory('')}} onClick={(e)=>{setCategory('breakfast')}} className={`h-[5vh] ${category=='breakfast'?'bg-green-300  text-black':'text-white bg-gray-400'} w-auto px-3 py-1 rounded-md cursor-pointer  font-bold `}>Breakfast</div>
                <div  onDoubleClick={()=>{setCategory('')}} onClick={(e)=>{setCategory('lunch')}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer  ${category=='lunch'?'bg-green-400 text-black':'text-white bg-gray-400'} font-bold `}>Lunch</div>
                <div  onDoubleClick={()=>{setCategory('')}} onClick={(e)=>{setCategory('dinner')}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${category=='dinner'?'bg-green-400  text-black':'text-white bg-gray-400'} font-bold`}>Dinner</div>
                <div  onDoubleClick={()=>{setCategory('')}} onClick={(e)=>{setCategory('drink')}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer  ${category=='drink'?'bg-green-400 text-black':'text-white bg-gray-400'} font-bold `}>Drinks</div>
                <div  onDoubleClick={()=>{setCategory('')}} onClick={(e)=>{setCategory('desert')}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${category=='desert'?'bg-green-400  text-black':'text-white bg-gray-400'} font-bold`}>Deserts</div>
            </div>
            <div>
              <p className='text-sm text-gray-600'>Description</p>
              <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} className='h-[10vh] resize-none w-full p-2 bg-white outline-0' type="text" placeholder='Enter the name of the Itemes'/>
            </div>
            <div className=' mt-3 flex gap-2 items-center'>
              <div onClick={(e)=>{setIsVeg(true)}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${isVeg?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold `}>Veg</div>
                <div onClick={(e)=>{setIsVeg(false)}} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${isVeg?'bg-gray-400 text-black':'bg-red-400 text-white'} font-bold`}>non-Veg</div>
            </div>
            <div className=' mt-3 flex gap-1.5 justify-between'>
                <div  onClick={()=>handleToggle("Chef Special")} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${tags.includes("Chef Special")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold `}>Chef Special</div>
                <div  onClick={()=>handleToggle("Bestseller")} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${tags.includes("Bestseller")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>Bestseller</div>
                <div  onClick={()=>handleToggle("New")} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${tags.includes("New")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>New</div>
                <div  onClick={()=>handleToggle("Spicy")} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${tags.includes("Spicy")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`} >Spicy</div>
                <div  onClick={()=>handleToggle("Sugar-Free")} className={`h-[5vh] w-auto px-3 py-1 rounded-md cursor-pointer ${tags.includes("Sugar-Free")?'bg-green-400 text-black':'bg-gray-400 text-white'} font-bold`}>Sugar-Free</div>
            </div>

          </div>
        </div>
        </div>
        <button  className='h-[8vh] w-[8vw] p-2 cursor-pointer rounded-md m-1.5 bg-green-400 text-white font-bold '>ADD</button>
        </form>
    </div>
  )
}
