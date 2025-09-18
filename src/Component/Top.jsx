import React from 'react'
import Container from './Container'
import { NavLink } from "react-router-dom";

const Top = () => {
    return (
        <div className='font-Poppins bg-black w-full py-3 lg:px-0 px-2 text-white  text-[14px]'>
            <Container className="flex w-full justify-between items-center">
                <div className='flex items-center justify-center lg:w-full lg:gap-2 w-75'>
                    <p className='leading-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <NavLink to="/shop-now">
                        <button className='underline cursor-pointer leading-6 font-semibold'>ShopNow</button>
                    </NavLink>
                </div>
                <select name="" id="" className='bg-black text-[#F9F9F9]'>
                    <option value="EN">English</option>
                    <option value="BN">Bangla</option>
                </select>
            </Container>
        </div>
    )
}

export default Top