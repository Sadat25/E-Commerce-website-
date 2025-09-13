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
        <div className='flex gap-[17px] items-center'>
            <div>
                <h2 className='text-xs'>Days</h2>
                <h2 className='text-[32px] font-bold'>{countDown.days}</h2>
            </div>
            <h2 className='text-primary text-[40px] font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Hours</h2>
                <h2 className='text-[32px] font-bold'>{countDown.hours}</h2>
            </div>
            <h2 className='text-primary text-[40px] font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Minutes</h2>
                <h2 className='text-[32px] font-bold'>{countDown.minutes}</h2>
            </div>
            <h2 className='text-primary text-[40px] font-bold]'>:</h2>
            <div>
                <h2 className='text-xs'>Seconds</h2>
                <h2 className='text-[32px] font-bold'>{countDown.seconds}</h2>
            </div>
        </div>
    )
}

export default CountDown