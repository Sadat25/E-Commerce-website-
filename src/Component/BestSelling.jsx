import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import coat from '../assets/The north coat.png'
import bag from '../assets/Gucci duffle bag.png'
import RGB from '../assets/RGB liquid CPU Cooler.png'
import BookSelf from '../assets/Small BookSelf.png'
import Canon from '../assets/CANON EOS DSLR Camera.png'
import laptop from '../assets/ASUS FHD Gaming Laptop.png'
import Card from './Card';
import { FaStar } from "react-icons/fa6";
import Btn from './Btn';
import SecHeading from './SecHeading';

const BestSelling = () => {

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className='mt-17.5'>
            <Container>
                <div className='flex justify-between items-end '>
                    <SecHeading heading={"This Month"} Title={"Best Selling Products"} className="ml-2 lg:ml-0" />
                    <div className='lg:mb-11 mb-7'>
                        <Btn btn={"View All"} />
                    </div>
                </div>
                <Slider {...settings}>
                    <Card
                        cardimg={coat}
                        title={'The north coat'}
                        price={"260"}
                        lessprice={"360"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={bag}
                        title={'Gucci duffle bag'}
                        price={"960"}
                        lessprice={"1160"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(75)"}
                    />
                    <Card
                        cardimg={RGB}
                        title={'RGB liquid CPU Cooler'}
                        price={"160"}
                        lessprice={"170"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={BookSelf}
                        title={'Small BookSelf'}
                        price={"360"}
                        lessprice={"400"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={Canon}
                        title={'CANON EOS DSLR Camera'}
                        price={"360"}
                        lessprice={"400"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(95)"}
                    />
                    <Card
                        cardimg={laptop}
                        title={'ASUS FHD Gaming Laptop'}
                        price={"675"}
                        lessprice={"700"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(325)"}
                    />
                </Slider>
            </Container>
        </div>
    )
}

export default BestSelling