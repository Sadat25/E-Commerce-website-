import React, { useState } from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time';

const JBL = () => {

    const conduct_date = '2025-10-25 12:00:00';
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
            <div className='bg-[url(assets/JBL_BOOMBOX_2.png)] w-full lg:px-[56px] lg:py-[69px] p-6 lg:mt-[140px] mt-10 bg-cover bg-no-repeat bg-center'>
                <p className='font-Poppins text-[#00FF66] font-semibold lg:text-[16px] text-sm'>Categories</p>
                <h2 className='text-white font-Inter font-semibold lg:text-[50px] text-2xl lg:leading-[60px] lg:my-8 my-4'>Enhance Your <br />Music Experience</h2>
                <div className='font-Poppins flex lg:gap-6 gap-3 lg:mb-10 mb-4'>
                    <div className='lg:h-[62px] h-12 lg:w-[62px] w-12 rounded-full text-center bg-white text-black lg:pt-[14px] pt-1.5'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.days}</h2>
                        <p className='text-[11px] leading-[18px]'>Days</p>
                    </div>
                    <div className='lg:h-[62px] h-12 lg:w-[62px] w-12 rounded-full text-center bg-white text-black lg:pt-[14px] pt-1.5'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.hours}</h2>
                        <p className='text-[11px] leading-[18px]'>Hours</p>
                    </div>
                    <div className='lg:h-[62px] h-12 lg:w-[62px] w-12 rounded-full text-center bg-white text-black lg:pt-[14px] pt-1.5'>
                        <h2 className='font-semibold text-[16px] leading-[20px]'>{countDown.minutes}</h2>
                        <p className='text-[11px] leading-[18px]'>Minutes</p>
                    </div>
                    <div className='lg:h-[62px] h-12 lg:w-[62px] w-12 rounded-full text-center bg-white text-black lg:pt-[14px] pt-1.5'>
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