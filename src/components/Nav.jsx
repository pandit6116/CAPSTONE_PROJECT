import React from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

function Nav() {
  return (
    <div className='w-full h-[80px] bg-blue-400 flex justify-between items-center px-5 md:px-10'>
        <div className='w-[60px] h-[60px] rounded-md shadow-xl flex justify-center items-center'>
            <MdOutlineFastfood className='w-[30px] h-[30px] shadow-xl'/>
        </div>
        <form className='w-[40%] h-[50px] bg-white flex items-center px-5 gap-5 rounded-md md:w-[70%]'>
            <IoIosSearch className='w-[30px] h-[30px] shadow-xl'/>
            <input type="text" placeholder="Search for food..."
            className='w-[100%] outline-none' />
        </form>
        <div className='w-[60px] h-[60px] rounded-md shadow-xl flex justify-center items-center relative'>
            <span className='absolute top-0 right-2 font-semibold text-[18px]'>
                0
            </span>
            <FiShoppingBag className='w-[30px] h-[30px] shadow-xl'/>
        </div>
    </div>
  )
}

export default Nav