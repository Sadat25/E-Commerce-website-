import React from 'react'

const CategoryItem = ({ logo, title }) => {
    return (
        <div className='h-[145px] w-[170px]  border-2 border-gray-300 rounded-md text-center py-5 hover:bg-[#DB4444] hover:text-white hover:border-none cursor-pointer'>
            <div className='flex justify-center text-6xl'>
                {logo}
            </div>
            <h2 className='font-[Poppin] leading-[24px] text-[16px] mt-4'>{title}</h2>
        </div>
    )
}

export default CategoryItem