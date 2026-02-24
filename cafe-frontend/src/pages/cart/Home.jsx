import React,{ useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

  const [menuItems, setMenuItems] = useState([]); 

  const fetchCartItems = async () => {
    // Fetch cart items from backend or local storage
    try {
      const response = await axios.get('http://localhost:4000/api/product/listMenu');
      console.log(response.data.success);
      setMenuItems(response.data.items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className='h-screen w-screen p-5 gap-5 overflow-y-auto mt-10 bg-gray-950'>
      {
        menuItems.map((item) => (
          <div key={item._id} className="border h-[20vh] w-full p-1 rounded shadow text-white flex bg-[#3e3d3c]">
            <div style={{backgroundImage: `url(${item.image})`}} className='w-1/8 h-full bg-cover bg-center'></div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{item.itemName}</h2>
              <p className="">{item.description}</p>
              <p className="font-semibold">₹{item.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
