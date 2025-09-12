import React from 'react'
import Container from './Container'
import playstationImg from '../assets/PlayStation.png'
import Women from '../assets/Women’s Collections.png'
import Speakers from '../assets/Speakers.png'
import Perfume from '../assets/Perfume.png'
import SecHeading from './SecHeading'

const NewArrival = () => {
    return (
        <Container className='mt-[168px]'>
            <div className="text-center">
                <SecHeading heading={'Featured'} Title={'New Arrival'} className="inline-block" />
            </div>
            <div className='flex justify-between text-white'>
                <div style={{ backgroundImage: `url(${playstationImg})` }}
                    className='h-[600px] w-[570px] flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                    <div className='ml-8 mb-8'>
                        <h2 className='font-Inter text-[24px] font-semibold leading-6 tracking-[3%]'>PlayStation 5</h2>
                        <p className='font-Poppins text-[14px] leading-[21px] py-2'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='font-Poppins font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${Women})` }}
                        className='h-[284px] w-[570px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                        <div className='ml-6 mb-6'>
                            <h2 className='font-Inter text-[24px] font-semibold leading-6 tracking-[3%]'>Women’s Collections</h2>
                            <p className='font-Poppins text-[14px] leading-[21px] py-2'>Featured woman collections that give you another vibe.</p>
                            <button className='font-Poppins font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                        </div>
                    </div>
                    <div className='flex justify-between mt-8'>
                        <div style={{ backgroundImage: `url(${Speakers})` }}
                            className='h-[284px] w-[270px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                            <div className='ml-6 mb-6'>
                                <h2 className='font-Inter text-[24px] font-semibold leading-6 tracking-[3%]'>Speakers</h2>
                                <p className='font-Poppins text-[14px] leading-[21px] py-2'>Amazon wireless speakers</p>
                                <button className='font-Poppins font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Perfume})` }}
                            className='h-[284px] w-[270px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                            <div className='ml-6 mb-6'>
                                <h2 className='font-Inter text-[24px] font-semibold leading-6 tracking-[3%]'>Perfume</h2>
                                <p className='font-Poppins text-[14px] leading-[21px] py-2'>GUCCI INTENSE OUD EDP</p>
                                <button className='font-Poppins font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NewArrival