import React,{useState,useEffect} from 'react'
import food1 from '../../../assets/food-item-3.jpeg';
import food2 from '../../../assets/Food-item-2.avif';
import food3 from '../../../assets/drinks.jpg';
import Offers from './Offers';
import axios from 'axios';
import {toast} from 'react-toastify'
import {backendUrl} from '../../../App';

export default function Items() {

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
    <div className='h-[550vh] w-screen md:p-10 p-5 bg-[#1a1b1c] flex flex-col items-center'>
        <p className='dancing-script topic text-cente text-xl  mb-2'>STARTER MENU</p>
        <p className='roboto-condensed my-15 text-5xl'>Appetizers</p>


        <div  className='md:h-[60vh] h-[80vh] w-full flex flex-col md:flex-row justify-between py-3 mb-25'>
            <div className='flex justify-center'><img src={food1} alt="food-1" className='md:h-[60vh] h-[20vh]' /></div>

            <div className='flex flex-col h-full md:w-[50vw]'>
                {
                    list.filter(item => item.category === "breakfast").filter(item => item.isAvailable === true).slice(0,4).map((item,index)=>
                        <div key={index} className='h-[15vh] w-full flex flex-col ml-5 cursor-pointer'>
                <div className='h-30 pt-2 w-[80%] roboto-condensed  text-white text-xl flex justify-between '><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
                <div className='h-40 w-full text-sm'>{item.description}</div>
                </div>
                    )
                }

            </div>
        </div>

        <p className='dancing-script topic text-cente text-xl  mb-2'>DELICIOUS</p>
        <p className='roboto-condensed mb-15 text-5xl'>MAIN DISH</p>

        <div  className='md:h-[60vh] h-[80vh] w-full flex flex-col-reverse md:flex-row justify-between py-3 mb-25'>
            

            <div className='flex flex-col h-full md:w-[50vw]'>
                {
                    list.filter(item => item.category === "dinner").filter(item => item.isAvailable === true).slice(0,4).map((item,index)=>
                        <div key={index} className='h-[15vh] w-full flex flex-col ml-5 cursor-pointer'>
                <div className='h-30 pt-2 w-[80%] roboto-condensed  text-white text-xl flex justify-between '><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
                <div className='h-40 w-full text-sm'>{item.description}</div>
                </div>
                    )
                }

            </div>

            <div><img src={food2} alt="food-1" className='md:w-[50vw] w-full mt-8' /></div>
        </div>

        <Offers/>

        <p className='dancing-script topic text-cente text-xl  mb-2'>SWEET & SWEET</p>
        <p className='roboto-condensed mb-15 text-5xl'>DESSERTS </p>

        <div  className='md:h-[60vh] h-[80vh] w-full flex flex-col items-center md:flex-row justify-between py-3 mb-25'>
            <div className='flex flex-col items-center w-[35%] h-full'><img src={food3} alt="food-1" className='md:h-[60vh] h-[20vh]' /></div>

            <div className='flex flex-col h-full w-[60vw] pr-6'>
                {
                    list.filter(item => item.category === "desert").filter(item => item.isAvailable === true).slice(0,4).map((item,index)=>
                        <div key={index} className='h-[15vh] w-full flex flex-col ml-5 cursor-pointer'>
                <div className='h-30 pt-2 w-[80%] roboto-condensed  text-white text-xl flex justify-between '><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
                <div className='h-40 w-full text-sm'>{item.description}</div>
                </div>
                    )
                }

            </div>
        </div>

        <p className='dancing-script topic text-cente text-xl  mb-2'>HOT & COLD</p>
        <p className='roboto-condensed mb-15 text-5xl'>DRINKS MENU </p>

        <div  className='md:h-[60vh] h-[80vh] w-full items-center flex flex-col-reverse md:flex-row justify-between py-3 mb-25'>
            

            <div className='flex flex-col px-5 h-full md:w-[50vw]'>
                {
                    list.filter(item => item.category === "drink").filter(item => item.isAvailable === true).slice(0,4).map((item,index)=>
                        <div key={index} className='h-[15vh] w-full flex flex-col ml-5 cursor-pointer'>
                <div className='h-30 pt-2 w-[80%] roboto-condensed  text-white text-xl flex justify-between '><span>{item.itemName}</span><span className='montserrat text-xl'> Rs.{item.price} </span> </div>
                <div className='h-40 w-full text-sm'>{item.description}</div>
                </div>
                    )
                }

            </div>

            <div><img src={food1} alt="food-1" className='w-[50vw]' /></div>
        </div>
    </div>
  )
}
