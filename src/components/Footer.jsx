import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#170B37] w-full shadow p-4 py-5 px-[10%]">
    <div className="w-full flex justify-between max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0 relative justify-between w-[35%]">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Privacy Policy</a>
        </li>

        <li className='relative'>
        <span className='absolute text-[25px] -top-1 -left-8 hidden xl:block'>
            .
        </span>
            <a href="#" className="mr-4 hover:underline md:mr-6 text-center">Terms & Conditions</a>
            <span className='absolute text-[25px] -top-1 -right-2 hidden xl:block'>
            .
             </span>
        </li>

        <li >
            <a href="#" className="mr-6 hover:underline md:mr-8">Contact Us</a>
        </li>

    </ul>
      <span className="text-sm text-white sm:text-center dark:text-gray-400 -mr-12">©2022 <a href="https://flowbite.com/" className="hover:underline">Muzo</a>. All Rights Reserved.
    </span>

    </div>
</footer>
  )
}

export default Footer
