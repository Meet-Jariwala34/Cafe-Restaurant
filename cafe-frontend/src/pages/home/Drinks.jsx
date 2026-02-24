import React , {useState,useEffect} from 'react'
import food1 from '../../assets/menu-image-4.jpg';
import food2 from '../../assets/menu-image-1.jpg';
import food3 from '../../assets/menu-image-2.jpg';
import food4 from '../../assets/menu-image-3.jpg';
import food5 from '../../assets/menu-image-6.png';
import food6 from '../../assets/menu-image-10.png';
import axios from 'axios';
import {toast} from 'react-toastify'
import {backendUrl} from '../../App';

export default function Drinks() {

  const [list,setList] = useState([]);

    const fetchItems = async () => {
      try {
        const res = await axios.get(backendUrl+'/api/product/listMenu?t='+new Date().getTime());
        if(res.data.success){
          setList(res.data.items);
        }else{
          toast.error("error from the else")
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error)
        toast.error("error fromm the catch")
        toast.error(error.message);
      }
    }

    useEffect(()=>{
      fetchItems();

      // Then fetch again every 30 seconds to keep it fresh
    const interval = setInterval(() => {
        fetchItems();
    }, 3000); // 30000ms = 30 seconds

    return () => clearInterval(interval); // Cleanup when user leaves page
    },[])

  return (
    <>
    <h2 className='roboto-condensed text-3xl text-center m-5'>Drinks</h2>
        <div className='md:h-[80vh] h-[100vh] ease-in w-[100%] md:p-[5vmax] justify-between flex flex-col md:flex-row'>
          {/* left side */}
          <div className='md:h-full h-[45%] w-[100%] md:w-[40%] flex flex-col justify-between'>
            {/* single food item */}
            {
          list.filter(item => item.category === "drink").filter(item => item.isAvailable === true).slice(0,3).map((item,index)=>
            <div className='h-25 w-full flex cursor-pointer'>
          {/* img  */}
          <div className='h-full'><img className='h-full w-25 rounded-md' src={item.image} alt="food1" /></div>
          {/* detail */}
          <div className='h-full w-75 flex flex-col ml-5'>
            <div className='h-30 pt-2 w-full roboto-condensed  text-white text-xl flex justify-between'><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
            <div className='h-40 w-full text-sm'>{item.description}</div>
          </div>
        </div>
          )
        }
    
            
          </div>
    
          {/* right side */}
          <div className='md:h-full h-[45%] w-[100%] md:w-[40%] flex flex-col justify-between'>
            {/* single food item */}
            {
          list.filter(item => item.category === "drink").filter(item => item.isAvailable === true).slice(3,6).map((item,index)=>
            <div className='h-25 w-full flex cursor-pointer'>
          {/* img  */}
          <div className='h-full'><img className='h-full w-25 rounded-md' src={item.image} alt="food1" /></div>
          {/* detail */}
          <div className='h-full w-75 flex flex-col ml-5'>
            <div className='h-30 pt-2 w-full roboto-condensed  text-white text-xl flex justify-between'><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
            <div className='h-40 w-full text-sm'>{item.description}</div>
          </div>
        </div>
          )
        }
    
            
          </div>
          <div></div>
        </div>
        
        </>
  )
}
