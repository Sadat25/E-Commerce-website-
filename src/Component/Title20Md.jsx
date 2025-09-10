import React from 'react'

const Title20Md = ({ children, className }) => {
    return (
        <div className={` font-medium text-[20px] leading-[28px] ${className}`}>{children}</div>
    )
}

export default Title20Md