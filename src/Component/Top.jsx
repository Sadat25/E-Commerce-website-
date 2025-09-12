import React from 'react'
import Container from './Container'

const Top = () => {
    return (
        <div className='font-Poppins bg-black w-full py-3 text-white  text-[14px]'>
            <Container className="flex">
                <div className='flex items-center justify-center w-full gap-2'>
                    <p className='leading-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <button className='underline cursor-pointer leading-6 font-semibold'>ShopNow</button>
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