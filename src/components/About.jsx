import React from 'react';
import imageAbout from '../assets/Rectangle 8.png';
import backgroundAbout from '../assets/XMLID_2_.png';
import partyFrame from '../assets/party-frame.png';
const About = () => {
  return (
    <section  className={` pb-[300px] bg-[#110828] bg-im w-full h-fit flex flex-col relative lg:flex-row px-[10%] py-32`}>
    <img src={backgroundAbout} className='absolute w-full top-[340px] h-full right-0' />
      <div className='w-[100%] h-[50%]  lg:w-[50%] lg:h-[100%] max-lg:text-center  max-xl:mb-[100px] max-lg:flex max-lg:items-center max-lg:flex-col'>
      <h4 className='text-[#DEA719] lg:hidden text-[30px] mb-10'>About Mezo</h4>
      <img  src={imageAbout}/>
      </div>
      <div className='w-[100%] h-[60%]  lg:w-[60%] lg:h-[100%] max-lg:text-center text-white justify-center items-center max-lg:pt-12 lg:pl-[50px]'>
      <h4 className='text-[#DEA719] font-bold text-[1.5em] max-lg:hidden'>About Mezo</h4>
      <h1 className='max-lg:text-[40px] mb-6 lg:text-[50px] font-extrabold'>Explore Various Digital <br /> Art And NFT Collections</h1>
      <p className=' text-neutral-400 mb-12 lg:mb-20 font-thin'>Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Mattis enim ut tellus elementum sagittis. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Integer feugiat scelerisque varius morbi enim nunc faucibus a. </p>
      <p className=' text-neutral-400 mb-20 font-thin'>Quam viverra orci sagittis eu. Amet dictum sit amet justo donec. Cursus turpis massa tincidunt dui ut ornare lectus sit. At urna condimentum mattis.</p>
      <div className='flex justify-evenly flex-row flex-nowrap xl:justify-between'>
        <div className=' bg-gradient-to-r from-[#350377] to-[#ffffff06] rounded-lg py-2 px-5 w-[130px] xl:w-[28%] xl:h-[100px] text-center xl:text-[30px] whitespace-nowrap' >
            <h3>0.50 ETH</h3>
            <p className=' text-[#e5e3e3c0] font-extralight text-[11px] xl:text-[20px]'>Last Trade</p>
        </div>
        <div className=' bg-gradient-to-r from-[#350377] to-[#ffffff06] rounded-lg py-2 px-5 w-[130px] xl:w-[28%] xl:h-[100px] text-center xl:text-[30px] whitespace-nowrap'>
            <h3>0.99 ETH</h3>
            <p className=' text-[#e5e3e3c0] font-extralight text-[11px] xl:text-[20px]'>0. 89 ETH</p>
        </div>
        <div className=' bg-gradient-to-r from-[#350377] to-[#ffffff06] rounded-lg py-2 px-5 w-[130px] xl:w-[28%] xl:h-[100px] text-center xl:text-[30px] whitespace-nowrap'>
            <h3>150+</h3>
            <p className=' text-[#e5e3e3c0] font-extralight text-[11px] xl:text-[20px]'>Owners</p>
        </div>
    </div>
      </div>
      <img src={partyFrame} className='absolute left-[6%] bottom-[9%]' />
    </section>
  )
}

export default About
