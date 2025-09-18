import React, { useState } from 'react'
import Container from './Container'
import { ListItem } from './ListItem'
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../assets/banner.jpg'
import banner1 from '../assets/banner 1.jpg'
import banner2 from '../assets/banner 2.jpg'
import banner3 from '../assets/banner 3.jpg'
import banner4 from '../assets/banner 4.jpg'
import HeaderHover from './HeaderHover';
import { BiCategory } from "react-icons/bi";
import Hover from './Hover';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: dots => (
            <div>
                <ul className='absolute -top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-3 h-3 rounded-full bg-gray-500'></div>
        )
    }


    const [category, setCategory] = useState(false)
    function heandleCategory() {
        setCategory(!category)
    }

    return (
        <div>
            <Container className='font-Poppins lg:flex '>
                <div className='lg:hidden cursor-pointer mt-3 ml-3 inline-block' onClick={heandleCategory}>
                    <div className='flex items-center gap-3'>
                        <BiCategory />
                        <Hover>
                            <h2 className='flex gap-1 items-center'>Categories<IoIosArrowForward /></h2>
                        </Hover>
                    </div>
                </div>
                <ul className={` ${category ? 'block' : 'hidden'} lg:block lg:w-[20%] w-full lg:border-r-2 lg:border-gray-200 lg:pt-8 pt-2`}>
                    <div className='relative group'>
                        <HeaderHover className="pr-6 flex items-center justify-between">Woman’s Fashion<IoIosArrowForward /></HeaderHover>
                        <ul className='hidden lg:group-hover:block absolute top-0 left-[99%] bg-white border border-gray-200 p-2 space-y-2 rounded-xl z-10'>
                            <HeaderHover>Dresses</HeaderHover>
                            <HeaderHover>Bags</HeaderHover>
                            <HeaderHover>Jewelry</HeaderHover>
                            <HeaderHover>Footwear</HeaderHover>
                        </ul>
                    </div>
                    <div className='relative group'>
                        <HeaderHover className="pr-6 flex items-center justify-between">Men’s Fashion<IoIosArrowForward /></HeaderHover>
                        <ul className='hidden lg:group-hover:block absolute top-0 left-[99%] bg-white border border-gray-200 p-2 space-y-2 rounded-xl z-10'>
                            <HeaderHover>Shirts</HeaderHover>
                            <HeaderHover>Pants</HeaderHover>
                            <HeaderHover>T-shirts</HeaderHover>
                            <HeaderHover>Jackets</HeaderHover>
                            <HeaderHover>Shoes</HeaderHover>
                        </ul>
                    </div>
                    <HeaderHover>Electronics</HeaderHover>
                    <HeaderHover>Home & Lifestyle</HeaderHover>
                    <HeaderHover>Medicine</HeaderHover>
                    <HeaderHover>Sports & Outdoor</HeaderHover>
                    <HeaderHover>Baby’s & Toys</HeaderHover>
                    <HeaderHover>Groceries & Pets</HeaderHover>
                    <HeaderHover>Health & Beauty</HeaderHover>
                </ul>
                <div className='lg:w-[75%] w-full lg:mt-10 lg:ml-12.5 m-3'>
                    <Slider {...settings}>
                        <div>
                            <img src={banner} alt="" className='w-full lg:h-[344px] h-[214px]' />
                        </div>
                        <div>
                            <img src={banner1} alt="" className='w-full lg:h-[344px] h-[214px]' />
                        </div>
                        <div>
                            <img src={banner2} alt="" className='w-full lg:h-[344px] h-[214px]' />
                        </div>
                        <div>
                            <img src={banner3} alt="" className='w-full lg:h-[344px] h-[214px]' />
                        </div>
                        <div>
                            <img src={banner4} alt="" className='w-full lg:h-[344px] h-[214px]' />
                        </div>
                    </Slider>
                </div>
            </Container >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}

export default Header