import React from 'react'

export const ListItem = ({ children, className }) => {
    return (
        <li className={`font-[Poppins] leading-6 cursor-pointer ${className}`}>{children}</li>
    )
}
