import React, { useState } from 'react'
import Container from './Container'
import bdimg from '../assets/JBL_BOOMBOX_2.png'
import { countDownDateAndTime } from 'countdown-date-time';

const bg = {
    backgroundImage: `url(${bdimg})`,
}

const JBL = () => {

    const conduct_date = '2025-09-25 12:00:00';
    const [countDown, setCountDown] = useState({})

    useState(() => {
        const update = () => {
            const countDown = countDownDateAndTime(conduct_date);
            setCountDown(countDown);
        }
        update()
        const interval = setInterval(update, 1000)
    }, [])


    return (
        <Container>
            <div style={bg} className='lg:h-[500px] h-[360px] lg:pl-[56px] pl-8 lg:pt-[69px] pt-8 lg:mt-[140px] mt-10 bg-cover bg-no-repeat bg-center'>
                <p className='font-Poppins text-[#00FF66] font-semibold leading-[20px] lg:text-[16px] text-sm'>Categories</p>
                <h2 className='text-white font-Inter font-semibold lg:text-[50px] text-2xl lg:leading-[60px] py-8'>Enhance Your <br />Music Experience</h2>
                <div className='font-Poppins flex gap-6 mb-10'>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.days}</h2>
                        <p className='text-[11px] leading-[18px]'>Days</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.hours}</h2>
                        <p className='text-[11px] leading-[18px]'>Hours</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.minutes}</h2>
                        <p className='text-[11px] leading-[18px]'>Minutes</p>
                    </div>
                    <div className='h-[62px] w-[62px] rounded-full text-center bg-white text-black pt-[14px]'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.seconds}</h2>
                        <p className='text-[11px] leading-[18px]'>Seconds</p>
                    </div>
                </div>
                <button className='font-Inter bg-[#00FF66] text-black lg:px-12 px-6 lg:py-4 py-2 font-medium text-[16px] leading-[24px] rounded-sm cursor-pointer'>Shop Now</button>
            </div>
        </Container>
    )
}

export default JBL