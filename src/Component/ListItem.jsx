import React from 'react'

export const ListItem = ({ children, className, onClick }) => {
    return (
        <li className={` leading-6 cursor-pointer ${className}`} onClick={onClick}>{children}</li>
    )
}
