import React from 'react'

const Community = () => {
  return (
    <section className=' pb-[100px] bg-[#110828] bg-im w-full h-fit flex flex-col relative lg:flex-row px-[10%] py-32 text-white'>
      <div className='w-full rounded-[60px] h-fit bg-[#7F1BFF] text-center flex justify-center flex-col p-20'>
            <h3 className='mb-1 text-[#DEA719] font-bold text-lg'>
            More Experiences
            </h3>
            <h1 className='mb-5 text-[60px] font-bold max-lg:text-[30px]'>
            Join The Community
            </h1>
            <p className='mb-5 text-gray-200 text-sm max-lg:text-[10px]'>
            Porttitor massa the end id neque aliquam. At in tellus integer feugiat. Ut tellus <br /> elementum sagittis elementum tempus vitae.
            </p>
            <a className='mb-5 cursor-pointer rounded-lg bg-[#DEA719] w-[150px] p-3 mx-auto max-lg:p-1'> 
            Join now
            </a>
      </div>
    </section>
  )
}

export default Community
