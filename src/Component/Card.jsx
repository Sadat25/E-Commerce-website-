import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";


const Card = ({ cardimg, title, price, lessprice, less, star, rating, className, flex }) => {
    return (
        <div className=' font-medium text-[16px] leading-[24px] w-[270px] hover:shadow-lg px-1 rounded-sm relative mb-2.5' id='card'>
            <img src={cardimg} alt="" className='cursor-pointer' />
            <h1 className=' mt-4 mb-2 cursor-pointer'>{title}</h1>
            <div className={flex}>
                <div className='flex gap-3 '>
                    <p className='text-[#DB4444]'>{price}</p>
                    <p className='text-gray-500 line-through'>{lessprice}</p>
                </div>
                <div className='flex items-center gap-2 mt-1 pb-2'>
                    <div className='flex gap-1 text-[#FFAD33]'>{star}</div>
                    <p className='text-gray-500 font-semibold text-sm leading-5.5'>{rating}</p>
                </div>
            </div>
            <p className={`px-3 py-1 bg-[#DB4444] rounded-sm text-white text-[12px] leading-[18px] block absolute top-3 left-4 ${className}`}>{less}</p>
            <div className='absolute top-3 right-4 text-xl'>
                <div className='p-2 rounded-full bg-white cursor-pointer'>
                    <MdFavoriteBorder />
                </div>
                <div className='p-2 rounded-full bg-white mt-2 cursor-pointer'>
                    <FiEye />
                </div>
            </div>
            <div className='absolute bottom-27 card'>
                <p className='bg-black text-white font-medium leading-10.5 text-center h-[0px] w-[262px] rounded-b-md cursor-pointer duration-300 ease-in-out'>Add To Cart</p>
            </div>
        </div>
    )
}

export default Card