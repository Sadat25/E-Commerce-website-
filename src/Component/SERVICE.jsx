import React from 'react'
import Container from './Container'
import DELIVERY from '../assets/FREE AND FAST DELIVERY.png'
import SERVICES from '../assets/SERVICE.png'
import MONEY from '../assets/MONEY BACK GUARANTEE.png'

const SERVICE = () => {
    return (
        <Container className='lg:mt-[136px] mt-10 flex justify-between items-center text-center lg:px-[113px]'>
            <div>
                <img src={DELIVERY} alt="" className='m-auto' />
                <h2 className='font-Poppins lg:text-xl text-[16px] leading-5 tracking-[3%] mt-6 mb-2'>FREE AND FAST DELIVERY</h2>
                <p className=' lg:text-sm text-[12px] leading-3.5'>Free delivery for all orders over $140</p>
            </div>
            <div>
                <img src={SERVICES} alt="" className='m-auto' />
                <h2 className='font-Poppins font-medium lg:text-xl text-[16px] leading-5 tracking-[3%] mt-6 mb-2'>24/7 CUSTOMER SERVICE</h2>
                <p className='font-Poppins lg:text-sm text-[12px] leading-3.5'>Friendly 24/7 customer support</p>
            </div>
            <div>
                <img src={MONEY} alt="" className='m-auto' />
                <h2 className='font-Poppins font-medium lg:text-xl text-[16px] leading-5 tracking-[3%] mt-6 mb-2'>MONEY BACK GUARANTEE</h2>
                <p className='font-Poppins lg:text-sm text-[12px] leading-3.5'>We reurn money within 30 days</p>
            </div>
        </Container>
    )
}

export default SERVICE