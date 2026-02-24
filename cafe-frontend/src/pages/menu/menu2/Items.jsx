import React,{useState,useEffect} from 'react'
import img1 from '../../../assets/menu-image-1.jpg'
import img2 from '../../../assets/menu-image-2.jpg'
import img3 from '../../../assets/menu-image-3.jpg'
import img4 from '../../../assets/menu-image-4.jpg'
import img5 from '../../../assets/menu-image-5.png'
import img6 from '../../../assets/menu-image-6.png'
import img7 from '../../../assets/menu-image-10.png'
import img8 from '../../../assets/menu-image-11.jpg'
import img9 from '../../../assets/menu-image-12.jpg'
import img10 from '../../../assets/menu-image-13.jpg'
import img11 from '../../../assets/menu-image-14.jpg'
import axios from 'axios';
import {toast} from 'react-toastify'
import {backendUrl} from '../../../App';

export default function Items({a,b}) {

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
    }, 8000); // 30000ms = 30 seconds

    return () => clearInterval(interval); // Cleanup when user leaves page
    },[])


    return (
    <div className='md:h-[200vh] h-[450vh] w-screen md:p-15 p-5 bg-[#1a1b1c]'>
        <p className='dancing-script topic text-cente text-xl  mb-2'>Menu Gallery</p>
        <p className='roboto-condensed my-15 text-5xl'>Best Special Dishes</p>

        {/* items box */}
        <div className='h-[80%] w-full flex flex-col items-center gap-2'>
            {/* row 1 */}
            <div className='md:h-[50%] h-auto w-full flex flex-col md:flex-row items-center justify-between' >
                {/* Cards */}
                {
                    list.filter(item => item.isAvailable === true).splice(a,b).map((item,index)=>
                        <div key={index} className='md:h-[65vh] h-[50vh] mb-5 md:justify-between justify-evenly w-full md:w-[22vw]  flex flex-col items-center cursor-pointer'>
                    {/* img */}
                    <div className='md:h-[50vh] h-[30vh] justify-center flex w-full'><img className='h-full w-full obejct-cover' src={item.image} alt="" /></div>
                    {/* details */}
                    <div className='text-center'>
                        <div className='pt-2 -mt-8 w-full roboto-condensed  text-white text-xl flex justify-evenly'><span>{item.itemName}</span></div>
                        <div className='w-full text-sm opacity-40'>{item.description}</div>
                        <span className='montserrat text-xl'> Rs.{item.price} </span>
                    </div>
                </div>
                    )
                }
            </div>
            {/* row 2 */}
            <div className='md:h-[50%] h-auto w-full flex flex-col md:flex-row items-center justify-between'> 
                {
                    list.filter(item => item.isAvailable === true).splice(a,b).map((item,index)=>
                        <div key={index} className='md:h-[65vh] h-[50vh] mb-5 md:justify-between justify-evenly w-full md:w-[22vw]  flex flex-col items-center cursor-pointer'>
                    {/* img */}
                    <div className='md:h-[50vh] h-[30vh] justify-center flex w-full'><img className='h-full w-full obejct-cover' src={item.image} alt="" /></div>
                    {/* details */}
                    <div className='text-center'>
                        <div className='pt-2 -mt-8 w-full roboto-condensed  text-white text-xl flex justify-evenly'><span>{item.itemName}</span></div>
                        <div className='w-full text-sm opacity-40'>{item.description}</div>
                        <span className='montserrat text-xl'> Rs.{item.price} </span>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    </div>
    )
}
