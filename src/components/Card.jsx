import React from 'react'
import image1 from "../assets/image1.jpg"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";




function Card({name,image, price,type, id }) {
  return (
    <div className='w-[280px] h-[350px] bg-white p-3 rounded-lg shadow-lg flex flex-col gap-3 hover:border-2 border-green-500 '>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
<img src={image} alt={name}  className='w-full h-full object-cover'/>
        </div>
        <div className='text-2xl font-semibold'>
{name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-lg font-bold '>₹{price}</div>
            <div className='flex justify-center items-center gap-2 text-lg font-semibold'>
                {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
                <span>{type}</span>
            </div>
        </div>
        <button className='bg-green-300 w-full text-white py-2 px-4 rounded-lg hover:bg-green-600'>Add to cart</button>
    </div>
  )
}

export default Card