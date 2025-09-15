import React from 'react'

const Btn1 = ({ className, btn}) => {
  return (
    <button className={`lg:px-12 px-6 lg:py-4 py-2 text-black bg-transparent border-3 border-gray-300 hover:bg-primary hover:text-white hover:border-transparent font-Poppins font-medium lg:text-[16px] text-sm leading-[24px] rounded-sm cursor-pointer ${className}`}>{btn}</button>
  )
}

export default Btn1