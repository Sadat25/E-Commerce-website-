import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";


const Card = ({ cardimg, title, price, lessprice, less, star, rating, className, className2, flex }) => {
    return (
        <div className='font-Poppins font-medium text-[16px] leading-[24px] w-[270px] hover:shadow-lg rounded-sm mb-2.5 group'>
            <div className='relative overflow-hidden'>
                <img src={cardimg} alt="" className='cursor-pointer' />
                <p className='bg-black text-white font-medium leading-10.5 text-center h-[41px] w-[262px] rounded-b-md cursor-pointer duration-300 ease-in-out absolute -bottom-11 group-hover:bottom-0'>Add To Cart</p>
                <p className={`px-3 py-1 bg-[#DB4444] rounded-sm text-white text-[12px] leading-[18px] block absolute top-3 left-3 ${className}`}>- {less}%</p>
                <div className='absolute top-3 right-3 text-xl'>
                    <div className='p-2 rounded-full bg-white cursor-pointer'>
                        <MdFavoriteBorder />
                    </div>
                    <div className='p-2 rounded-full bg-white mt-2 cursor-pointer'>
                        <FiEye />
                    </div>
                </div>
            </div>
            <h1 className=' mt-4 mb-2 cursor-pointer'>{title}</h1>
            <div className={flex}>
                <div className='flex gap-3 '>
                    <p className='text-[#DB4444]'>${price}</p>
                    <p className={`text-gray-500 line-through ${className2}`}>${lessprice}</p>
                </div>
                <div className='flex items-center gap-2 mt-1 pb-2'>
                    <div className='flex gap-1 text-[#FFAD33]'>{star}</div>
                    <p className='text-gray-500 font-semibold text-sm leading-5.5'>{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default Card