import React from 'react'

const Btn = ({btn, className}) => {
  return (
    <button className={`px-12 py-4 text-white bg-[#DB4444] font-[Poppins] font-medium text-[16px] leading-[24px] rounded-sm cursor-pointer ${className}`}>{btn}</button>
  )
}

export default Btn