import React from 'react'
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

const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div>
                <ul className='absolute -top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-3 h-3 rounded-full bg-gray-500'></div>
        )
    }

    return (
        <Container>
            <div className='flex'>
                <ul className='w-[20%] border-r-2 border-gray-200 pt-8'>
                    <div className='relative' id='header'>
                        <ListItem className="py-2 pl-3 pr-6 hover:bg-gray-100 rounded-md flex items-center justify-between">Woman’s Fashion<IoIosArrowForward /></ListItem>
                        <ul className='absolute top-0 left-[99%] bg-white border border-gray-200 p-2 space-y-2 rounded-xl z-1'>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Dresses</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Bags</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Jewelry</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Footwear</ListItem>
                        </ul>
                    </div>
                    <div className='relative' id='header2'>
                        <ListItem className="py-2 pl-3 pr-6 hover:bg-gray-100 rounded-md flex items-center justify-between">Men’s Fashion<IoIosArrowForward /></ListItem>
                        <ul className='absolute top-0 left-[99%] bg-white border border-gray-200 p-2 space-y-2 rounded-xl z-1'>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Shirts</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Pants</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">T-shirts</ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Jackets </ListItem>
                            <ListItem className="py-1.5 w-20 text-center hover:bg-gray-100 rounded-md">Shoes </ListItem>
                        </ul>
                    </div>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Electronics</ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Home & Lifestyle</ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Medicine</ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Sports & Outdoor</ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Baby’s & Toys</ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Groceries &  </ListItem>
                    <ListItem className="py-2 pl-3 hover:bg-gray-100 rounded-md">Health & Beauty</ListItem>
                </ul>
                <div className='w-[75%] mt-10 ml-12.5'>
                    <Slider {...settings}>
                        <div>
                            <img src={banner} alt="" className='w-full h-[344px]' />
                        </div>
                        <div>
                            <img src={banner1} alt="" className='w-full h-[344px]' />
                        </div>
                        <div>
                            <img src={banner2} alt="" className='w-full h-[344px]' />
                        </div>
                        <div>
                            <img src={banner3} alt="" className='w-full h-[344px]' />
                        </div>
                        <div>
                            <img src={banner4} alt="" className='w-full h-[344px]' />
                        </div>
                    </Slider>
                </div>
            </div>
        </Container >
    )
}

export default Header