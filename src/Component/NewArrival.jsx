import React from 'react'
import Container from './Container'
import playstationImg from '../assets/PlayStation.png'
import Women from '../assets/Women’s Collections.png'
import Speakers from '../assets/Speakers.png'
import Perfume from '../assets/Perfume.png'

const NewArrival = () => {
    return (
        <Container className='mt-[168px] font-[Poppins]'>
            <div className='flex items-center justify-center gap-4 mb-6 w-full'>
                <div className=' bg-black w-5 h-10 relative'>
                    <div className='w-5 h-10 bg-red-500 rounded-md absolute top-0 left-0'></div>
                </div>
                <h2 className='text-[#DB4444] leading-4 font-semibold'>Featured</h2>
            </div>
            <h1 className='font-[Inter] font-semibold text-4xl leading-12 tracking-[4%] mb-10 text-center'>New Arrival</h1>
            <div className='flex justify-between text-white'>
                <div style={{ backgroundImage: `url(${playstationImg})` }}
                    className='h-[600px] w-[570px] flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                    <div className='ml-8 mb-8'>
                        <h2 className='font-[Inter] text-[24px] font-semibold leading-6 tracking-[3%]'>PlayStation 5</h2>
                        <p className='text-[14px] leading-[21px] py-2'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${Women})` }}
                        className='h-[284px] w-[570px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                        <div className='ml-6 mb-6'>
                            <h2 className='font-[Inter] text-[24px] font-semibold leading-6 tracking-[3%]'>Women’s Collections</h2>
                            <p className='text-[14px] leading-[21px] py-2'>Featured woman collections that give you another vibe.</p>
                            <button className='font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                        </div>
                    </div>
                    <div className='flex justify-between mt-8'>
                        <div style={{ backgroundImage: `url(${Speakers})` }}
                            className='h-[284px] w-[270px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                            <div className='ml-6 mb-6'>
                                <h2 className='font-[Inter] text-[24px] font-semibold leading-6 tracking-[3%]'>Speakers</h2>
                                <p className='text-[14px] leading-[21px] py-2'>Amazon wireless speakers</p>
                                <button className='font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Perfume})` }}
                            className='h-[284px] w-[270px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                            <div className='ml-6 mb-6'>
                                <h2 className='font-[Inter] text-[24px] font-semibold leading-6 tracking-[3%]'>Perfume</h2>
                                <p className='text-[14px] leading-[21px] py-2'>GUCCI INTENSE OUD EDP</p>
                                <button className='font-medium leading-6 underline cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NewArrival