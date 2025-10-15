import React from 'react'
import { ToastContainer, Bounce } from 'react-toastify';
import Container from '../Component/Container';
import Btn1 from '../Component/Btn1';
import CardWish from '../Component/CardWish';
import ak from '../assets/AK-900 Wired Keyboard.png'
import hv from '../assets/hv-g92.png'
import ips from '../assets/IPS LCD Gaming Monitor.png'
import laptop from '../assets/ASUS FHD Gaming Laptop.png'
import { FaStar } from "react-icons/fa6";
import { useSelector } from 'react-redux';


const WishList = () => {

  const hart = useSelector((state) => state.AllProducts.hart)

  return (
    <div>
      <Container>
        <div className='flex items-center justify-between mb-15 mt-20'>
          <h3 className='font-Poppins text-xl leading-6.5'>Wishlist (4)</h3>
          <Btn1 btn={"Move All To Bag"} />
        </div>
        <div className='flex flex-wrap gap-7.5'>
          {
            hart.map((item) => (
              <CardWish
                cardimg={item.thumbnail}
                eye={"hidden"}
                title={item.title}
                price={item.price}
              />
            ))
          }
        </div>
        <div className='flex items-center justify-between mt-20 mb-15'>
          <div className='flex items-center gap-4'>
            <div className=' bg-black w-5 h-10 relative'>
              <div className='w-5 h-10 bg-primary rounded-md absolute top-0 left-0'></div>
            </div>
            <h2 className="font-Poppins text-black leading-6.5 lg:text-[20px] ">Just For You</h2>
          </div>
          <Btn1 btn={"See All"} />
        </div>
        <div className='flex flex-wrap gap-7.5'>
          <CardWish
            cardimg={laptop}
            less={"NEW"}
            className={"bg-[#00FF66]"}
            delet={"hidden"}
            title={'ASUS FHD Gaming Laptop'}
            price={"1160"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(99)"}
          />
          <CardWish
            cardimg={ips}
            delet={"hidden"}
            title={'IPS LCD Gaming Monitor'}
            price={"960"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(65)"}
          />
          <CardWish
            cardimg={hv}
            less={"- 35%"}
            className={"bg-primary"}
            delet={"hidden"}
            title={'HAVIT HV-G92 Gamepad'}
            price={"560"}
            lessprice={"$600"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(65)"}
          />
          <CardWish
            cardimg={ak}
            delet={"hidden"}
            title={'AK-900 Wired Keyboard'}
            price={"960"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(99)"}
          />
        </div>
      </Container>
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

export default WishList