import React from 'react';
import imageFAQ from '../assets/Rectangle 12.svg';
import backgroundFAQ from '../assets/Rectangle 12.svg';
import partyFrame from '../assets/party-frame.png';
import Accordin from './Accordin';
const FAQ = () => {
  return (
    <section  className={` pb-[100px] bg-[#110828] bg-im w-full h-fit flex flex-col relative lg:flex-row px-[10%] py-32`}>
      <div className='w-[100%] h-[50%]  lg:w-[50%] lg:h-[100%] max-lg:text-center  max-xl:mb-[100px] max-lg:flex max-lg:items-center max-lg:flex-col'>
      <h4 className='text-[#DEA719] lg:hidden text-[30px] mb-10'>POPULAR QUESTIONS</h4>
      <img  src={imageFAQ}/>
      </div>
      <div className='w-[100%] h-[60%]  lg:w-[60%] lg:h-[100%] max-lg:text-center text-white justify-center items-center max-lg:pt-12 lg:pl-[50px]'>
      <h4 className='text-[#DEA719] font-bold text-[1.5em] max-lg:hidden'>POPULAR QUESTIONS</h4>
      <h1 className='max-lg:text-[40px] mb-6 lg:text-[50px] font-extrabold'>Frequently Asked <br /> Questions</h1>
        <Accordin />
      </div>
    </section>
  )
}

export default FAQ
