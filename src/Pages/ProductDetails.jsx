import React, { useState } from 'react'
import Container from '../Component/Container'
import BreadCumb from '../Component/BreadCumb'
import pro1 from '../assets/pro-1.png'
import pro2 from '../assets/pro-2.png'
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import SecHeading from '../Component/SecHeading'
import Card from '../Component/Card';
import IPS from '../assets/IPS LCD Gaming Monitor.png'


const ProductDetails = () => {

    // colour part
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    function heandleActive() {
        setActive(!active)
        setActive1(false)
    }
    function heandleActive1() {
        setActive1(!active1)
        setActive(false)
    }

    //size part
    const [activexs, setActiveXS] = useState(false)
    const [actives, setActiveS] = useState(false)
    const [activem, setActiveM] = useState(false)
    const [activel, setActiveL] = useState(false)
    const [activexl, setActiveXL] = useState(false)

    function heandleActiveXS() {
        setActiveXS(!activexs)
        setActiveS(false)
        setActiveM(false)
        setActiveL(false)
        setActiveXL(false)
    }

    function heandleActiveS() {
        setActiveS(!actives)
        setActiveXS(false)
        setActiveM(false)
        setActiveL(false)
        setActiveXL(false)
    }

    function heandleActiveM() {
        setActiveM(!activem)
        setActiveS(false)
        setActiveXS(false)
        setActiveL(false)
        setActiveXL(false)
    }

    function heandleActiveL() {
        setActiveL(!activel)
        setActiveS(false)
        setActiveM(false)
        setActiveXS(false)
        setActiveXL(false)
    }

    function heandleActiveXL() {
        setActiveXL(!activexl)
        setActiveS(false)
        setActiveM(false)
        setActiveL(false)
        setActiveXS(false)
    }

    // quantity part
    const [quantity, setQuantity] = useState(1)

    function HeandleIncrement() {
        setQuantity(quantity + 1)
    }

    function HeandleDecrement() {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }



    return (
        <Container className="font-Poppins">
            <BreadCumb />
            <div className='flex gap-[70px] items-center'>
                <div className='flex gap-7.5 items-center'>
                    <div className='grid gap-4'>
                        <img src={pro1} />
                        <img src={pro1} />
                        <img src={pro1} />
                        <img src={pro1} />
                    </div>
                    <img src={pro2} />
                </div>
                <div className='w-100'>
                    <h2 className='font-Inter font-semibold text-2xl tracking-wide leading-6'>Havit HV G-92 Gamepad</h2>
                    <div className='flex items-center gap-4 my-4'>
                        <div className='flex gap-2 items-center'>
                            <div className='flex gap-[2px]'>
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-black/25' />
                            </div>
                            <p className='text-sm text-black/50 leading-5'>(150 Reviews)</p>
                        </div>
                        <p className='border-l-2 border-black pl-4 text-[#00FF66] text-sm leading-5'>In Stock</p>
                    </div>
                    <h2 className='font-Inter text-2xl tracking-wide leading-6'>$192.00</h2>
                    <h2 className='py-6 border-b border-black/50'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h2>
                    <div className='flex items-center gap-4 my-6'>
                        <h2 className='font-Inter text-xl tracking-wide leading-5'>Colours:</h2>
                        <div className='flex gap-1'>
                            <div onClick={heandleActive} className={`${active ? "border-2" : ""} h-6 w-6 rounded-full cursor-pointer flex items-center justify-center`}>
                                <div className='h-4 w-4 bg-[#A0BCE0] rounded-full'></div>
                            </div>
                            <div onClick={heandleActive1} className={`${active1 ? "border-2" : ""} h-6 w-6 rounded-full cursor-pointer flex items-center justify-center`}>
                                <div className='h-4 w-4 bg-primary rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 select-none'>
                        <h2 className='font-Inter text-xl tracking-wide leading-5'>Size:</h2>
                        <div className='flex gap-4 text-center'>
                            <p onClick={heandleActiveXS} className={`${activexs ? "text-white bg-primary border-transparent" : ""} font-medium text-sm leading-5 px-[7px] py-1.5 border border-black/50 rounded-sm cursor-pointer w-8 hover:text-white hover:bg-primary hover:border-transparent`}>XS</p>
                            <p onClick={heandleActiveS} className={`${actives ? "text-white bg-primary border-transparent" : ""} font-medium text-sm leading-5 px-[7px] py-1.5 border border-black/50 rounded-sm cursor-pointer w-8 hover:text-white hover:bg-primary hover:border-transparent`}>S</p>
                            <p onClick={heandleActiveM} className={`${activem ? "text-white bg-primary border-transparent" : ""} font-medium text-sm leading-5 px-[7px] py-1.5 border border-black/50 rounded-sm cursor-pointer w-8 hover:text-white hover:bg-primary hover:border-transparent`}>M</p>
                            <p onClick={heandleActiveL} className={`${activel ? "text-white bg-primary border-transparent" : ""} font-medium text-sm leading-5 px-[7px] py-1.5 border border-black/50 rounded-sm cursor-pointer w-8 hover:text-white hover:bg-primary hover:border-transparent`}>L</p>
                            <p onClick={heandleActiveXL} className={`${activexl ? "text-white bg-primary border-transparent" : ""} font-medium text-sm leading-5 px-[7px] py-1.5 border border-black/50 rounded-sm cursor-pointer w-8 hover:text-white hover:bg-primary hover:border-transparent`}>XL</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-6 mb-10 select-none'>
                        <div className='flex items-center border-2 border-black/50 rounded-md'>
                            <div onClick={HeandleDecrement} className='px-2.5 py-3.5 cursor-pointer hover:bg-primary hover:text-white border-r-2 border-black/50 hover:border-transparent'><FaMinus /></div>
                            <p className='font-medium text-xl leading-7 py-1.5 px-7.5'>{quantity}</p>
                            <div onClick={HeandleIncrement} className='px-2.5 py-3.5 cursor-pointer hover:bg-primary hover:text-white border-l-2 border-black/50 hover:border-transparent'><FaPlus /></div>
                        </div>
                        <button className='lg:px-11 px-5 lg:py-3 py-2 text-white bg-primary font-medium lg:text-[16px] text-sm leading-[24px] rounded-sm cursor-pointer'>Buy Now</button>
                        <div className='p-3 text-xl cursor-pointer border-2 border-black/50 rounded-md hover:bg-primary hover:text-white hover:border-transparent'>
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className='py-6 border border-black/50 rounded-md'>
                        <div className='flex gap-4 items-center pb-4 pl-4 border-b border-black/50'>
                            <TbTruckDelivery className='text-3xl' />
                            <div>
                                <p className='font-semibold text-[16px] leading-4'>Free Delivery</p>
                                <p className='font-medium text-[12px] underline cursor-pointer mt-2'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center pt-4 pl-4'>
                            <TfiReload className='text-2xl' />
                            <div>
                                <p className='font-semibold text-[16px] leading-4'>Return Delivery</p>
                                <p className='font-medium text-[12px] mt-2'>Free 30 Days Delivery Returns.
                                    <span className='cursor-pointer underline'>Details</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SecHeading heading={"Related Item"} className="mt-[140px]" />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-7'>
                <Card
                    cardimg={IPS}
                    title={'IPS LCD Gaming Monitor'}
                    price={"370"}
                    lessprice={"400"}
                    less={"30"}
                    star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                    rating={"(99)"}
                />
                <Card
                    cardimg={IPS}
                    title={'IPS LCD Gaming Monitor'}
                    price={"370"}
                    lessprice={"400"}
                    less={"30"}
                    star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                    rating={"(99)"}
                />
                <Card
                    cardimg={IPS}
                    title={'IPS LCD Gaming Monitor'}
                    price={"370"}
                    lessprice={"400"}
                    less={"30"}
                    star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                    rating={"(99)"}
                />
                <Card
                    cardimg={IPS}
                    title={'IPS LCD Gaming Monitor'}
                    price={"370"}
                    lessprice={"400"}
                    less={"30"}
                    star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                    rating={"(99)"}
                />
            </div>
        </Container>
    )
}

export default ProductDetails