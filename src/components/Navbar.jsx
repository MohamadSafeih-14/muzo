import {React, useState} from 'react';
import headerIMG from '../assets/Group 4.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex flex-row justify-between  px-[10%] h-[150px] bg-transparent pt-[55px] pb-[10px] absolute z-50'>
        <img src={headerIMG}  className=' w-[150px] h-[70px] max-lg:w-[120px] max-lg:h-[60px]'/>
        <ul className=' hidden md:flex max-lg:text-[13px] flex-grow-10 w-[50%] justify-between mt-5 text-[#ffffffd3] font-extralight '>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Home</a></li>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>About Us</a></li>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Readmap</a></li>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>NFT</a></li>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Pages</a></li>
            <li className='cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Contact Us</a></li>
        </ul>
        {toggle ?         <ul className='md:hidden w-[300px] h-fit p-4 text-white absolute bg-[#110828] top-44 bg- right-10 shadow-lg shadow-black'>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Home</a></li>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>About Us</a></li>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Readmap</a></li>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>NFT</a></li>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Pages</a></li>
            <li className='my-2 p-5 cursor-pointer hover:text-pink-400 transition-all duration-400'><a>Contact Us</a></li>
            <AiFillCaretUp className='text-[#110828] text-[45px] absolute top-[-6.5%] -right-[7px]'/>
        </ul> 
        : <></>}

        <a className=' hidden md:block max-lg:text-[13px] max-lg:w-[120px] p-4 max-lg:p-1 max-lg:mt-2  w-[200px] text-center rounded-xl border-[#DEA719] text-[#DEA719] border-solid border-2 h-fit cursor-pointer hover:text-pink-400 hover:border-pink-400 transition-all duration-400'>
            Join Discord
        </a>
        {toggle ? <AiOutlineClose className='text-white text-4xl md:hidden' onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white md:hidden text-4xl'/>}
    </nav>
  )
}

export default Navbar
