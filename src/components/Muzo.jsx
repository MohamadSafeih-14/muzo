import React from 'react';
import Muzo1 from '../assets/Group 43.png';
import image1 from '../assets/Group 5.png';
import image2 from '../assets/Vector (7).png';
import image3 from '../assets/Vector (8).png';
import image4 from '../assets/Vector (9).png';
import image5 from '../assets/Vector (10).png';
import image6 from '../assets/Vector (11).png';
import image7 from '../assets/Vector (12).png';
import image8 from '../assets/Vector (13).png';
import backgroundMuzo from '../assets/muzo-background.png'
const Muzo = () => {
  return (
    <section className='bg-[#110828] px-[10%] relative'>
     <div className='flex justify-center flex-col items-center pb-12'>
        <h1><img src={Muzo1}/></h1>
        <p className='text-gray-300 w-[50%] text-center my-10 text-lg'>Quis varius quam quisque id diam. Justo laoreet sit amet cursus sit amet dictum. ullamcorper eget facilisi dignissim diam quis. </p>
        <div className='flex flex-row justify-center flex-wrap  w-[100%] max-lg:flex-wrap max-lg:justify-center'>
            <div className='flex flex-row mx-4 justify-center w-[100%] max-lg:my-3 flex-wrap'>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-auto' src={image1}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-auto' src={image2}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-auto' src={image3}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-4 ' src={image4}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-4' src={image5}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-4' src={image6}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-4' src={image7}/></div>
                <div className='mx-3 my-3 bg-gradient-to-r from-[#29045a] to-[#ffffff06] rounded-2xl w-[70px] h-[70px] flex justify-center'><img  className='py-6 px-4' src={image8}/></div>
            </div>

        </div>
     </div>
     <img src={backgroundMuzo} className='absolute w-full top-[0px] h-full right-0 xl:block hidden' />

    </section>
  )
}

export default Muzo
