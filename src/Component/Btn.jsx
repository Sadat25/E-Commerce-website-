import React from 'react'

const Btn = ({btn, className}) => {
  return (
    <button className={`lg:px-12 px-6 lg:py-4 py-2 text-white bg-primary hover:bg-[#E07575] hover:text-black font-Poppins font-medium lg:text-[16px] text-sm leading-[24px] rounded-sm cursor-pointer ${className}`}>{btn}</button>
  )
}

export default Btn