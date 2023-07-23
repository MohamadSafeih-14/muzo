import React from 'react';
import imageAbout from '../assets/Rectangle 8.png';
import backgroundAbout from '../assets/XMLID_2_.png';
import plantFrame from '../assets/Group 66.svg';
import oceanImage from '../assets/Rectangle 11.svg';
const Roadmap = () => {
  return (
    <section  className={`pt-[200px] pb-[150px] bg-[#110828] bg-im w-full h-fit flex flex-col relative lg:flex-row-reverse px-[10%] py-32 `}>
      <div className='w-[100%] h-[60%]  lg:w-[60%] lg:h-[100%] max-lg:text-center  max-xl:mb-[100px] max-lg:flex max-lg:items-center max-lg:flex-col -mt-20'>
      <h4 className='text-[#DEA719] lg:hidden text-[30px] mb-10'>ROADMAP</h4>
      <img className='lg:mx-auto lg:pl-[150px]' src={oceanImage}/>
      </div>
      <div className='w-[100%] h-[50%]  lg:w-[50%] lg:h-[100%] max-lg:text-center text-white justify-center items-center max-lg:pt-12 '>
      <h4 className='text-[#DEA719] font-bold text-[1.5em] max-lg:hidden'>ROADMAP</h4>
      <h1 className='max-lg:text-[40px] mb-6 lg:text-[50px] font-extrabold'>Explore Thousands 
Of Digital Art And Collectibles.</h1>
      <p className=' text-neutral-400 mb-10 font-thin'>Quam viverra orci sagittis eu. Amet dictum sit amet justo donec. Cursus turpis massa tincidunt dui ut ornare lectus sit. At urna condimentum mattis.</p>
      <a className='block mt-[20px] text-white text-center bg-[#DEA719] z-50 w-[150px] max-lg:mx-auto py-4 rounded-lg relative before:bg-transparent before:w-[155px] before:rounded-[13px] before:border-t-transparent before:border-l-transparent  before:border-white before:border-2 before:top-[2px] before:pb-[55px] before:h-full before:-right-1 before:absolute before:border-r-[1px] before:border-b-[1px] hover:bg-white hover:text-pink-400 hover:font-bold transition-all duration-500 cursor-pointer'>Explore Now</a>

      </div>
      <img src={plantFrame} className='absolute left-[10%] -top-[5%] z-[6]' />
    </section>
  )
}

export default Roadmap
