import React from 'react';
import rectangleBack from '../assets/Rectangle 2.png';
import character3D from '../assets/Vector.png';
import frame1 from '../assets/Frame.png';
import frame2 from '../assets/Frame (1).png';
import frame3 from '../assets/Ball_muzo.png';
import '../style.css';
const Hero = () => {
  return (
    <section id='section' className={` bg-[#0D051F]  bg-[url('../assets/Rectangle 2.png')] w-full h-fit flex flex-col-reverse  lg:flex-row px-[10%] py-32 overflow-hidden`}>
            {/* <img className='w-[100% h-[100%] absolute left-0 top-0 select-none max-xl:hidden 2xl:hidden' src={rectangleBack}/> */}
            <img src={frame2} className='absolute left-[7%] w-[60px] bottom-20'/>
      <div className='w-[100%] h-[50%]  lg:w-[50%] lg:h-[100%] max-lg:text-center lg:pt-40 max-xl:mt-[100px] lg:mt-[10px] max-lg:flex max-lg:items-center max-lg:flex-col'>
      <h1 className='text-[#ffffff] text-[70px] w-full font-bold max-lg:text-[60px] lg:text-[60px] 2xl:text-[70px] max-md:text-[35px]'>Exclusive Muzo <br /> Collectible Arts.</h1>
      <p className=' text-neutral-300 lg:w-[70%] mt-5 font-extralight max-md:text-[12px]'>Integer quis auctor elit sed vulputate. Purus ut faucibus pulvinar elementum integer enim neque. </p>
      <a className='block mt-[20px] text-white text-center bg-[#7F1BFF] z-50 w-[150px]  py-3 rounded-lg relative before:bg-transparent before:w-[155px] before:rounded-[13px] before:border-t-transparent before:border-l-transparent  before:border-white before:border-2 before:top-[2px] before:pb-[47px] before:h-full before:-right-1 before:absolute before:border-r-[1px] before:border-b-[1px] hover:bg-white hover:text-pink-400 hover:font-bold transition-all duration-500 cursor-pointer'>Explore Now</a>
      <img src={frame1} className='absolute left-[7%] w-[50px] top-44'/>
      </div>
      <div className='w-[100%] h-[50%] relative lg:w-[50%] lg:h-[100%] flex justify-center items-center max-lg:pt-32'>
        <div className=' rounded-[60px] bg-gradient-to-b  mt-10 shadow-md  select-none '>
            <img className='w-[750px] relative  mx-auto top-[1%] select-none left-[3%]' src={character3D}/>
        </div>
      </div>
        <img src={frame3} className='absolute -right-[0%]  -bottom-[20%] mix-blend-hard-light'/>
    </section>
  )
}

export default Hero
