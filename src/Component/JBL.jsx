import React from 'react'
import Container from './Container'
import bdimg from '../assets/JBL_BOOMBOX_2.png'
import Btn from './Btn'



const bg = {
    backgroundImage: `url(${bdimg})`,
}

const JBL = () => {

    return (
        <Container>
            <div style={bg} className='h-[500px]  pl-[56px] pt-[69px] mt-[140px]'>
                <p className='font-Poppins text-[#00FF66] font-semibold leading-[20px] text-[16px]'>Categories</p>
                <h2 className='text-white font-Inter font-semibold text-[50px] leading-[60px] py-8'>Enhance Your <br />Music Experience</h2>
                <div className='font-Poppins flex gap-6 mb-10'>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>05</h2>
                        <p className='text-[11px] leading-[18px]'>Days</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>23</h2>
                        <p className='text-[11px] leading-[18px]'>Hours</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>59</h2>
                        <p className='text-[11px] leading-[18px]'>Minutes</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>35</h2>
                        <p className='text-[11px] leading-[18px]'>Seconds</p>
                    </div>
                </div>
                <button className='font-Inter bg-[#00FF66] text-black px-12 py-4 font-medium text-[16px] leading-[24px] rounded-sm cursor-pointer'>Shop Now</button>
            </div>
        </Container>
    )
}

export default JBL