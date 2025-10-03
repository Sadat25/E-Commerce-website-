import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const BreadCumb = () => {

    let location = useLocation().pathname;
    const path = location.split('/')[1]

    return (
        <div className='text-black/50 flex items-center gap-3 mt-20 mb-12.5 ml-2 text-sm leading-5'>
            <NavLink to={'/'}>
                <p className='cursor-pointer'>home</p>
            </NavLink>
            <p>/</p>
            <p className='cursor-pointer'>{path}</p>
        </div>
    )
}

export default BreadCumb