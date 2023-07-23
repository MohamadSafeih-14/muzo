import React from 'react';
import Image1 from '../assets/paint-kit-dynamic-premium.svg';
import Image2 from '../assets/picture-dynamic-premium.svg';
import Image3 from '../assets/bucket-dynamic-premium.svg';
import Image4 from '../assets/eth-dynamic-premium.svg';
const Introduce = () => {
  return (
    <section className='px-[10%] h-fit text-center bg-[#110828] w-full pb-[200px]'>
    <h4 className='text-orange-500 mb-3 relative z-50'>INTRODUCE</h4>
    <h1 className='text-white mb-12 text-[40px] relative z-50 '>Muzo Introducing</h1>
    <div className='flex flex-wrap justify-between  text-white  w-full mx-auto'>
        <div className='bg-gradient-to-r from-[#250351] to-[#ffffff06] w-[300px] text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image1} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[18px]'>Creative Artwork</h1>
            <p className='text-[13px] mt-3 font-thin text-[#ffffffda] tracking-widest'> Neque ornare aenean euismod <br /> elementum quis eleifend.</p>
        </div>
        <div className='bg-gradient-to-r from-[#250351] to-[#ffffff06] w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image2} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[18px]'>High Quality</h1>
            <p className='text-[13px] mt-3 font-thin text-[#ffffffda] tracking-widest'> Neque ornare aenean euismod elementum quis eleifend.</p>
        </div>
        <div className='bg-gradient-to-r from-[#250351] to-[#ffffff06] w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image3} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[18px]'>awesome Creator </h1>
            <p className='text-[13px] mt-3 font-thin text-[#ffffffda] tracking-widest'> Neque ornare aenean euismod elementum quis eleifend.</p>
        </div>
        <div className='bg-gradient-to-r from-[#250351] to-[#ffffff06] w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image4} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[18px]'>Affordable Price</h1>
            <p className='text-[13px] mt-3 font-thin text-[#ffffffda] tracking-widest'> Neque ornare aenean euismod elementum quis eleifend.</p>
        </div>
    </div>
    </section>
  )
}

export default Introduce
