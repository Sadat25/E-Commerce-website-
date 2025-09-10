import React from 'react'

const SecHeading = ({ heading, Title, className }) => {
    return (
        <div className={`mb-10 ${className}`}>
            <div className='flex items-center gap-4 mb-6'>
                <div className=' bg-black w-5 h-10 relative'>
                    <div className='w-5 h-10 bg-red-500 rounded-md absolute top-0 left-0'></div>
                </div>
                <h2 className='text-[#DB4444] leading-4 font-semibold'>{heading}</h2>
            </div>
            <h1 className='font-[Inter] font-semibold text-4xl leading-12 tracking-[4%]'>{Title}</h1>
        </div>
    )
}

export default SecHeading