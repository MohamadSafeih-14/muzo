import React from 'react';
import nft1 from '../assets/Rectangle 19.svg';
import nft2 from '../assets/Rectangle 20.svg';
import nft3 from '../assets/Rectangle 21.svg';
import nft4 from '../assets/Rectangle 22.svg';
import nft5 from '../assets/Rectangle 23.svg';
import nft6 from '../assets/Rectangle 24.svg';
import backgroundCollections from '../assets/XMLID_17_ (1).png';
import partyFrame from '../assets/Frame.svg';
import '../style.css';
const Collections = () => {
  return (  
    <section className='w-full h-fit bg-[#110828] px-[10%] py-20 relative z-[1]' id='section2'>
        <img src={backgroundCollections} className='absolute w-full -top-[100px] z-[2]  right-0' />
        <h3 className='text-[#DEA719] text-center text-[18px] font-bold mb-3'>OUR COLLECTION</h3>
        <h1 className='text-white font-bold text-[50px] text-center'>Latest Sales Listings</h1>
        <div className='w-full  pt-10 grid max-md:gird-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 place-items-center gap-y-7 relative z-[3]'>
            <div className='min-w-[300px] text-center text-white max-md:w-[100%]]'>
                <img src={nft1}/>
                <h1 className='m-3 text-[20px] '>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
            <div className=' min-w-[300px] text-center text-white max-md:w-[100%]'>
                <img src={nft2}/>
                <h1 className='m-3 text-[20px]'>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
            <div className='min-w-[300px] text-center text-white max-md:w-[100%]'>
                <img src={nft3}/>
                <h1 className='m-3 text-[20px]'>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
            <div className='min-w-[300px] text-center text-white max-md:w-[100%]'>
                <img src={nft4}/>
                <h1 className='m-3 text-[20px]'>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
            <div className='min-w-[300px] text-center text-white max-md:w-[100%]'>
                <img src={nft5}/>
                <h1 className='m-3 text-[20px]'>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
            <div className='min-w-[300px] text-center text-white max-md:w-[100%]'>
                <img src={nft6}/>
                <h1 className='m-3 text-[20px]'>Antique bust</h1>
                <p className='text-[#ffffffb4]'>Muzo #455</p>
            </div>
        </div>
        <img src={partyFrame} className='absolute  top-[60px]  right-[245px] opacity-60' />

    </section>
  )
}

export default Collections
