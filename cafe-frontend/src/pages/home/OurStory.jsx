import React from 'react'
import sideImg1 from '../../assets/Cafe-with-people.jpg';
import sideImg2 from '../../assets/Food-item-2.avif';
import Reveal from '../../component/Reveal';
import {Link} from 'react-router-dom';

export default function OurStory() {
  return (
    // left

    
    <div className='md:h-[140vh] sm:h-auto w-screen bg-[#171819] p-5 md:py-[20vh] md:px-[5vw] flex flex-col md:flex-row justify-between gap-10'>
        <Reveal direction='right' delay={0.3}>
        <div className="left flex flex-col items-center md:w-[30vw]">
            <div className="our-story-topic">
                <p className='dancing-script text-[#f3d590] text-center text-2xl  md:mb-6 sm:mb-14'> Our Story </p>
                <p className='text-5xl w-full roboto-condensed md:mb-6 sm:mb-14'>Every Flavour Tells A Story</p>
                <p className='md:mb-6 sm:mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur aliquid? Pariatur nesciunt molestiae exercitationem maxime, quo ea quia corporis labore quod architecto laudantium cupiditate at dolorem, officiis ex magni!
                Ipsam nemo consequatur laudantium suscipit praesentium nisi quaerat accusantium nobis delectus libero nulla doloremque nihil inventore rem laboriosam sapiente labore amet eligendi rerum, ratione dignissimos accusamus possimus commodi mollitia. Eius.</p>
            </div>
            <div>
                <p className='text-xl roboto-condensed mb-6'>Book Through a Call</p>
                <p className='dancing-script text-[#f3d590] text-center text-2xl  mb-6'>+91 9428867728</p>
            </div>
            <div className='cursor-pointer active  hover:bg-black underline-offset-8 h-15 transition ease-in-out montserrat'>
                <Link to={'/reserve-table'}>
                <button id='table-btn' className=' h-15 w-50 text-black border-4 cursor-pointer hover:bg-black hover:text-white' > Find Table</button>
                </Link>
            </div>
        </div>
        </Reveal>

        {/* right */}
        <Reveal direction='left' delay={0.45}>
        <div className="right relative p-1 md:py-[15vmin]">
            <img src={sideImg1} className='h-90 relative'/>
            <img src={sideImg2} alt="" className='h-40 absolute md:bottom-[20%] md:-left-15 hidden md:flex'/>
        </div>
        </Reveal>
    </div>
  )
}
