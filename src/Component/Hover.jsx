import React from 'react'

const Hover = ({ children, className }) => {
    return (
        <div className={`
            relative 
            before:content-[''] 
            before:absolute 
            before:bottom-0 
            before:left-0 
            before:w-0 
            before:h-[3px] 
            before:duration-400 
            before:linear 
            hover:before:w-full
            hover:before:bg-gray-500 ${className}`}>
            {children}
        </div>
    )
}

export default Hover