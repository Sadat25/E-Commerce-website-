import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";
import { TbDeviceGamepad } from "react-icons/tb";
import { MdLaptop } from "react-icons/md";
import { MdSpeaker } from "react-icons/md";
import CategoryItem from './CategoryItem';
import SecHeading from './SecHeading';


const Category = () => {

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute -top-25 right-0 cursor-pointer"
                style={{ ...style }}
                onClick={onClick}
            >
                <div className='bg-gray-100 rounded-full h-[46px] w-[46px] flex items-center'>
                    <FaArrowRight className='text-black text-2xl m-auto' />
                </div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute -top-25 right-15 cursor-pointer"
                style={{ ...style }}
                onClick={onClick}
            >
                <div className='bg-gray-100 rounded-full h-[46px] w-[46px] flex items-center'>
                    <FaArrowLeft className='text-black text-2xl m-auto' />
                </div>
            </div>
        );
    }

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Container className="mt-20  border-b-2 border-gray-200">
            <SecHeading heading={"Categories"} Title={"Browse By Category"} className="ml-2 lg:ml-0" />
            <div className='mb-[70px]'>
                <Slider {...settings}>
                    <CategoryItem logo={<GiSmartphone />} title={"Phones"} />
                    <CategoryItem logo={<HiOutlineComputerDesktop />} title={"Computers"} />
                    <CategoryItem logo={<BsSmartwatch />} title={"Smart Watch"} />
                    <CategoryItem logo={<MdOutlinePhotoCamera />} title={"Camera"} />
                    <CategoryItem logo={<MdOutlineHeadphones />} title={"HeadPhones"} />
                    <CategoryItem logo={<TbDeviceGamepad />} title={"Gaming"} />
                    <CategoryItem logo={<MdLaptop />} title={"Laptops"} />
                    <CategoryItem logo={<MdSpeaker />} title={"Speakers"} />
                </Slider>
            </div>
        </Container>
    )
}

export default Category