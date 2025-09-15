import React from 'react'

const SecHeading = ({ heading, Title, className, headingClassName }) => {
    return (
        <div className={`lg:mb-10 mb-3.5 ${className}`}>
            <div className='flex items-center gap-4 lg:mb-6'>
                <div className=' bg-black w-5 h-10 relative'>
                    <div className='w-5 h-10 bg-primary rounded-md absolute top-0 left-0'></div>
                </div>
                <h2 className={`font-Poppins text-primary leading-4 font-semibold lg:text-[16px] text-sm ${headingClassName}`}>{heading}</h2>
            </div>
            <h1 className='font-Inter font-semibold lg:text-4xl text-2xl leading-12 tracking-[4%]'>{Title}</h1>
        </div>
    )
}

export default SecHeading