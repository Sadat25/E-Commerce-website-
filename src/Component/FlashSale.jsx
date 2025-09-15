import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import hvg92 from '../assets/hv-g92.png'
import AK900 from '../assets/AK-900 Wired Keyboard.png'
import IPS from '../assets/IPS LCD Gaming Monitor.png'
import chair from '../assets/S-Series Comfort Chair.png'
import RGB from '../assets/RGB liquid CPU Cooler.png'
import Canon from '../assets/CANON EOS DSLR Camera.png'
import laptop from '../assets/ASUS FHD Gaming Laptop.png'
import Card from './Card';
import { FaStar } from "react-icons/fa6";
import Btn from './Btn';
import SecHeading from './SecHeading';
import CountDown from './CountDown';


const FlashSale = () => {

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute -top-22 right-0 cursor-pointer"
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
                className="absolute -top-22 right-15 cursor-pointer"
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='lg:mt-38.5 mt-10 ml-1.5 lg:ml-0'>
            <Container className="border-b-2 border-gray-200">
                <div className='lg:flex items-end gap-22 '>
                    <SecHeading heading={"Today’s"} Title={"Flash Sale"} className="ml-2 lg:ml-0" />
                    <div className='font-Poppins lg:mb-11 mb-3.5'>
                        <CountDown />
                    </div>
                </div>
                <Slider {...settings}>
                    <Card
                        cardimg={hvg92}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={"120"}
                        lessprice={"160"}
                        less={"40"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(88)"}
                    />
                    <Card
                        cardimg={AK900}
                        title={'AK-900 Wired Keyboard'}
                        price={"960"}
                        lessprice={"1160"}
                        less={"35"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(75)"}
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
                        cardimg={chair}
                        title={'S-Series Comfort Chair'}
                        price={"375"}
                        lessprice={"400"}
                        less={"25"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(99)"}
                    />
                    <Card
                        cardimg={RGB}
                        title={'RGB liquid CPU Cooler'}
                        price={"160"}
                        lessprice={"170"}
                        less={"30"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={Canon}
                        title={'CANON EOS DSLR Camera'}
                        price={"360"}
                        lessprice={"400"}
                        less={"25"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(95)"}
                    />
                    <Card
                        cardimg={laptop}
                        title={'ASUS FHD Gaming Laptop'}
                        price={"675"}
                        lessprice={"700"}
                        less={"35"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(325)"}
                    />
                </Slider>
                <Btn btn={"View All Products"} className={"mt-[37px] mb-15 m-auto block"} />
            </Container>
        </div>
    )
}

export default FlashSale