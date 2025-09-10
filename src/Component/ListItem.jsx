import React from 'react'

export const ListItem = ({ children, className }) => {
    return (
        <li className={` leading-6 cursor-pointer ${className}`}>{children}</li>
    )
}
