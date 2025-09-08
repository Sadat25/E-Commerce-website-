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

const BestSelling = () => {

    const settings = {
        infinite: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='mt-17.5 font-[Poppins]'>
            <Container>
                <div className='flex items-center gap-4 mb-6'>
                    <div className=' bg-black w-5 h-10 relative'>
                        <div className='w-5 h-10 bg-red-500 rounded-md absolute top-0 left-0'></div>
                    </div>
                    <h2 className='text-[#DB4444] leading-4 font-semibold'>This Month</h2>
                </div>
                <div className='flex items-center justify-between mb-15'>
                    <h1 className='font-[Inter] font-semibold text-4xl leading-12 tracking-[4%]'>Best Selling Products</h1>
                    <Btn btn={"View All"} />
                </div>
                <Slider {...settings}>
                    <Card
                        cardimg={coat}
                        title={'The north coat'}
                        price={"$260"}
                        lessprice={"$360"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={bag}
                        title={'Gucci duffle bag'}
                        price={"$960"}
                        lessprice={"$1160"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(75)"}
                    />
                    <Card
                        cardimg={RGB}
                        title={'RGB liquid CPU Cooler'}
                        price={"$160"}
                        lessprice={"$170"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={BookSelf}
                        title={'Small BookSelf'}
                        price={"$360"}
                        lessprice={"$400"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                        rating={"(65)"}
                    />
                    <Card
                        cardimg={Canon}
                        title={'CANON EOS DSLR Camera'}
                        price={"$360"}
                        lessprice={"$400"}
                        className="hidden"
                        star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /> </>}
                        rating={"(95)"}
                    />
                    <Card
                        cardimg={laptop}
                        title={'ASUS FHD Gaming Laptop'}
                        price={"$675"}
                        lessprice={"$700"}
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