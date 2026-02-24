import React from 'react'
import photo1 from '../../assets/Animation-image-1.jpg';
import photo2 from '../../assets/Animation-image-2.jpg';
import photo3 from '../../assets/Animation-image-3.jpg';
import border from '../../assets/separator.svg';
import table from '../../assets/table.png';
import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';


const slides = [
  { image: photo1, caption: ["TRADITIONAL & HYGINE","For the love of Delecious test"] },
  { image: photo2 , caption: ["Delightfull Experience","Flavour inspired by the future"] },
  { image: photo3 , caption: ["Amazing & Delisious", "WHERE EVERY FLAVOUR TELLS A STORY"] }
];


export default function Slide() {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);


    return (
    <>
    <div class="slideshow">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide z-0 ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={`Slide ${index}`} />
          <div className="caption">
            <p className='dancing-script topic text-cente text-xl  mb-2'>{slide.caption[0]}</p>
      <h2 className='text-8xl roboto-condensed'>{slide.caption[1]}</h2>
          </div>
        </div>
      ))}



  

  {/* Reserve table  */}
<Link to={'/reserve-table'}>
<div id='reserve-table' className='z-1 cursor-pointer h-20 w-20 absolute p-4 bg-amber-400'>
    <img src={table} alt="" className='cursor-pointer'/>
</div>
</Link>
  <div id='outter-reserve-table' className='h-21 w-21 border absolute  bg-transparent '></div>
</div>
    </>
    )
}
