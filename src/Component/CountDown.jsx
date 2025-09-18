import React, { useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const CountDown = () => {

    const conduct_date = '2025-12-20 12:00:00';
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
        <div className='flex lg:gap-[17px] gap-2 items-center'>
            <div>
                <h2 className='text-xs'>Days</h2>
                <h2 className='lg:text-[32px] text-xl font-bold text-center'>{countDown.days}</h2>
            </div>
            <h2 className='text-primary lg:text-[40px] text-3xl font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Hours</h2>
                <h2 className='lg:text-[32px] text-xl font-bold text-center'>{countDown.hours}</h2>
            </div>
            <h2 className='text-primary lg:text-[40px] text-3xl font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Minutes</h2>
                <h2 className='lg:text-[32px] text-xl font-bold text-center'>{countDown.minutes}</h2>
            </div>
            <h2 className='text-primary lg:text-[40px] text-3xl font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Seconds</h2>
                <h2 className='lg:text-[32px] text-xl font-bold text-center'>{countDown.seconds}</h2>
            </div>
        </div>
    )
}

export default CountDown