import React from 'react'
import Container from './Container'
import playstation from '../assets/PlayStation.png'
import Women from '../assets/Women’s Collections.png'
import Speakers from '../assets/Speakers.png'
import Perfume from '../assets/Perfume.png'
import SecHeading from './SecHeading'

const NewArrival = () => {
    return (
        <Container className='lg:mt-[168px] mt-10 lg:mx-auto mx-5'>
            <div className="text-center">
                <SecHeading heading={'Featured'} Title={'New Arrival'} className="inline-block" />
            </div>
            <div className='lg:flex justify-between text-white'>
                <img src={playstation} alt="" className='hover:scale-[1.01] cursor-pointer' />
                <div className='mt-5 lg:mt-0'>
                    <img src={Women} alt="" className='hover:scale-[1.01] cursor-pointer w-full' />
                    <div className='flex gap-5 lg:gap-8 lg:mt-8 mt-5 w-44 sm:w-70 md:w-auto'>
                        <img src={Speakers} alt="" className='hover:scale-[1.01] cursor-pointer' />
                        <img src={Perfume} alt="" className='hover:scale-[1.01] cursor-pointer' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NewArrival