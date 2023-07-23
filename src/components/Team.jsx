import React from 'react';
import Image1 from '../assets/Frame 9.svg';
import Image2 from '../assets/Frame 10.svg';
import Image3 from '../assets/Frame 11.svg';
import Image4 from '../assets/Frame 12.svg';
import icon1 from '../assets/Vector.svg';
import icon2 from '../assets/Vector (1).svg';
import icon3 from '../assets/Group 26.svg';
import plantFrame from '../assets/Frame.svg';
const Team = () => {
  return (
    <section className='px-[10%] h-fit text-center bg-[#110828] w-full relative'>
    <h4 className='text-[#DEA719] mb-3 relative z-50'>MEET OUR TEAM</h4>
    <h1 className='text-white mb-12 text-[40px] relative z-50 '>MEET OUR Creator</h1>
    <div className='flex flex-wrap justify-between  text-white  w-full mx-auto'>
        <div className=' w-[300px] text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image1} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[22px]'>Wade Warren</h1>
            <p className='text-[13px] mt-2 mb-2 font-thin text-[#ffffffda] tracking-widest'>The Artist</p>
            <div className='w-full h-fit flex justify-center text-white'>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon1}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon2}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon3}/>
                    </div>
            </div>
        </div>
        <div className=' w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image2} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[22px]'>Esther Howard</h1>
            <p className='text-[13px] mt-2 mb-2 font-thin text-[#ffffffda] tracking-widest'>The Artist</p>
            <div className='w-full h-fit flex justify-center text-white'>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon1}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon2}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon3}/>
                    </div>
            </div>
        </div>
        <div className=' w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image3} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[22px]'>Bessie Cooper</h1>
            <p className='text-[13px] mt-2 mb-2 font-thin text-[#ffffffda] tracking-widest'>The Artist</p>
            <div className='w-full h-fit flex justify-center text-white'>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon1}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon2}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon3}/>
                    </div>
            </div>
        </div>
        <div className=' w-[300px]  text-center rounded-xl h-[300px] my-4 p-5 max-lg:mx-auto'>
            <img src={Image4} className='p-3 w-[60%] mx-auto'/>
            <h1 className='font-bold text-[22px]'>Annette Black</h1>
            <p className='text-[13px] mt-2 mb-2 font-thin text-[#ffffffda] tracking-widest'>The Artist</p>
            <div className='w-full h-fit flex justify-center text-white'>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon1}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon2}/>
                    </div>
                    <div className='bg-gradient-to-r from-[#32046d] to-[#ffffff06] p-2 m-2 rounded-md'>
                        <img className='w-full' src={icon3}/>
                    </div>
            </div>
        </div>
    </div>
    <img src={plantFrame} className='absolute right-[13%] -top-[5%]' />

    </section>
  )
}

export default Team