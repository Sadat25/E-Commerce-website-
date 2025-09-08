import React, { Children } from 'react'

const Para = ({ children, className }) => {
  return (
    <div className={`font-[Poppins] font-normal text-[16px] leading-[24px] ${className}`}>{children}</div>
  )
}

export default Para