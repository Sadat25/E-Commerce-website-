import React from 'react'
import x from '../assets/x.png'

const CartItem = ({ img, name, Price, Subtotal, className }) => {
    return (
        <div className='grid grid-cols-4 items-center px-10 py-6 mt-10 rounded-md shadow-[0_-4px_15px,0_10px_15px] shadow-gray-100/50'>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <img src={img} alt="" />
                    <img src={x} className={`absolute -top-1 -left-3 ${className}`} alt="" />
                </div>
                <p>{name}</p>
            </div>
            <div className='text-center'>${Price}</div>
            <div className='text-center'>
                <input type="number" placeholder='00' className='h-11 w-[72px] px-3 py-1.5 border rounded-sm' />
            </div>
            <div className='text-center'>${Subtotal}</div>
        </div>
    )
}

export default CartItem