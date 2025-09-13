import React from 'react'
import Container from './Container'
import playstationImg from '../assets/PlayStation.png'
import Women from '../assets/Women’s Collections.png'
import Speakers from '../assets/Speakers.png'
import Perfume from '../assets/Perfume.png'
import SecHeading from './SecHeading'

const NewArrival = () => {
    return (
        <Container className='lg:mt-[168px] lg:ml-auto ml-1'>
            <div className="text-center">
                <SecHeading heading={'Featured'} Title={'New Arrival'} className="inline-block" />
            </div>
            <div className='flex justify-between text-white'>
                <div style={{ backgroundImage: `url(${playstationImg})` }}
                    className='lg:h-[600px] h-[300px] lg:w-[570px] w-[200px] flex items-end hover:scale-[1.01] cursor-pointer duration-200 bg-cover bg-center'>
                    <div className='lg:ml-8 ml-2 lg:mb-8 mb-3 lg:mr-0 mr-1'>
                        <h2 className='font-Inter lg:text-[24px] text-[16px] font-semibold lg:leading-6 leading-3 tracking-[3%]'>PlayStation 5</h2>
                        <p className='font-Poppins lg:text-[14px] text-[12px]  lg:leading-[21px] leading-[16px] lg:py-2 py-1'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='font-Poppins font-medium lg:leading-6 leading-3 lg:text-[16px] text-[12px] underline cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(${Women})` }}
                        className='lg:h-[284px] h-[150px] lg:w-[570px] w-[195px] flex items-end hover:scale-[1.01] cursor-pointer duration-200 bg-cover bg-center'>
                        <div className='lg:ml-6 lg:mb-6 ml-2 mb-3'>
                            <h2 className='font-Inter lg:text-[24px] text-[16px] font-semibold lg:leading-6 leading-3 tracking-[3%]'>Women’s Collections</h2>
                            <p className='font-Poppins lg:text-[14px] text-[12px]  lg:leading-[21px] leading-[16px] lg:py-2 py-1'>Featured woman collections that give you another vibe.</p>
                            <button className='font-Poppins font-medium lg:leading-6 leading-3 lg:text-[16px] text-[12px] underline cursor-pointer'>Shop Now</button>
                        </div>
                    </div>
                    <div className='flex justify-between lg:mt-8 mt-1'>
                        <div style={{ backgroundImage: `url(${Speakers})` }}
                            className='lg:h-[284px] h-[145px] lg:w-[270px] w-[195px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200 bg-cover bg-center'>
                            <div className='lg:ml-6 lg:mb-6 ml-2 mb-3'>
                                <h2 className='font-Inter lg:text-[24px] text-[16px] font-semibold lg:leading-6 leading-3 tracking-[3%]'>Speakers</h2>
                                <p className='font-Poppins lg:text-[14px] text-[12px]  lg:leading-[21px] leading-[16px] lg:py-2 py-1'>Amazon wireless speakers</p>
                                <button className='font-Poppins font-medium lg:leading-6 leading-3 lg:text-[16px] text-[12px] underline cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div style={{ backgroundImage: `url(${Perfume})` }}
                                className='h-[284px] w-[270px]  flex items-end hover:scale-[1.01] cursor-pointer duration-200'>
                                <div className='lg:ml-6 lg:mb-6 ml-2 mb-3'>
                                    <h2 className='font-Inter lg:text-[24px] text-[16px] font-semibold lg:leading-6 leading-3 tracking-[3%]'>Perfume</h2>
                                    <p className='font-Poppins lg:text-[14px] text-[12px]  lg:leading-[21px] leading-[16px] lg:py-2 py-1'>GUCCI INTENSE OUD EDP</p>
                                    <button className='font-Poppins font-medium lg:leading-6 leading-3 lg:text-[16px] text-[12px] underline cursor-pointer'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NewArrival