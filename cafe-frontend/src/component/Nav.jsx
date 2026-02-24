import React, { useContext } from 'react'
import logo from '../assets/Logo.png';
import { useState, useEffect, useRef } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Sidebar from './Sidebar';
import {StoreDataContext} from '../../context/StoreDataContext';

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const {token} = useContext(StoreDataContext);
  const navigate = useNavigate();

  
  
  const sentinelRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // --- 1. Intersection Observer (Background Toggle) ---
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If entry is NOT intersecting, we've scrolled down
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    // --- 2. Scroll Listener (Hide/Show Toggle) ---
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling Down
        setIsHidden(true);
      } else {
        // Scrolling Up
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });


    // --- 3. Cleanup (CRITICAL FOR REACT) ---
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);


  



    return (
      <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: '1px', width: '100%' }} />
      {/* Nav-container */}
    <div id='navbar' className={`navbar h-25 w-screen flex p-5 items-center justify-between bg-black text-white ${isScrolled ? 'nav-scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
        
        {/* the logo */}
        <NavLink to={'/'} >
        <div className="left h-full items-center w-30 flex ">
            <img className='h-18  cursor-pointer' src={logo} alt='Logo'/>
            <span><p className='font-bold text-2xl ml-2 cursor-pointer'>365 Cafe</p></span>
        </div>
        </NavLink>
        <div className="right md:flex hidden h-full w-200 font-semibold justify-between items-center">
          <NavLink to={'/'} className={({isActive})=>isActive ? 'text-amber-400 underline decoration-yellow-400 underline-offset-15':'cursor-pointer active hover:text-amber-400 hover:underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out'}>
            <div>Home </div>
          </NavLink>

            <NavLink to={'/menu/menu1'} className={({isActive})=>isActive?'cursor-pointer active text-amber-400 underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out':'cursor-pointer active hover:text-amber-400 hover:underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out'} >
            <div >Menu</div>

            </NavLink>
          <NavLink to={'/Account/login'}   className={({isActive})=>isActive?'cursor-pointer active text-amber-400 underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out':'cursor-pointer active hover:text-amber-400 hover:underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out'}>
            <div  >Account</div>
          </NavLink>

          <NavLink to={'/contact'} className={({isActive})=>isActive?'cursor-pointer active text-amber-400 underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out':'cursor-pointer active hover:text-amber-400 hover:underline decoration-yellow-400 underline-offset-15 h-full pt-5 transition ease-in-out'} >
            <div >Contact</div>
          </NavLink>

          <Link to={'/reserve-table'}>
            <div className='cursor-pointer active mr-4  hover:bg-black underline-offset-8 h-full transition ease-in-out'><button id='table-btn' className=' h-15 w-50 text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Find Table</button></div>
          </Link>
            
        </div>
        <div className='md:hidden'>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </>
    )
}
