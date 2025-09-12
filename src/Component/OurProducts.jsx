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
import Breed from '../assets/Breed Dry Dog Food.png'
import Curology from '../assets/Curology Product Set.png'
import BookSelf from '../assets/Small BookSelf.png'
import Card from './Card';
import { FaStar } from "react-icons/fa6";
import Btn from './Btn';
import SecHeading from './SecHeading';


const OurProducts = () => {

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

    const settings = {
        infinite: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='mt-[71px] '>
            <Container className="change">
                <SecHeading heading={"Our Products"} Title={"Explore Our Products"} />
                <Slider {...settings}>
                    <Card
                        cardimg={Breed}
                        title={'Breed Dry Dog Food'}
                        price={"100"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /><FaStar className='text-gray-300' /> </>}
                        rating={"(35)"}
                    />
                    <Card
                        cardimg={IPS}
                        title={'IPS LCD Gaming Monitor'}
                        price={"370"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(99)"}
                    />
                    <Card
                        cardimg={Canon}
                        title={'CANON EOS DSLR Camera'}
                        price={"360"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(95)"}
                    />
                    <Card
                        cardimg={hvg92}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={"120"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(88)"}
                    />
                    <Card
                        cardimg={laptop}
                        title={'ASUS FHD Gaming Laptop'}
                        price={"675"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(325)"}
                    />
                    <Card
                        cardimg={AK900}
                        title={'AK-900 Wired Keyboard'}
                        price={"960"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(75)"}
                    />
                    <Card
                        cardimg={Curology}
                        title={'Curology Product Set'}
                        price={"500"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(145)"}
                    />
                    <Card
                        cardimg={RGB}
                        title={'RGB liquid CPU Cooler'}
                        price={"160"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={chair}
                        title={'S-Series Comfort Chair'}
                        price={"375"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(99)"}
                    />
                    <Card
                        cardimg={BookSelf}
                        title={'Small BookSelf'}
                        price={"360"}
                        className="hidden" className2="hidden"
                        flex={"flex items-center gap-2"}
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                </Slider>
                <Btn btn={"View All Products"} className={"mt-[37px] mb-15 m-auto block"} />
            </Container>
        </div>
    )
}

export default OurProducts