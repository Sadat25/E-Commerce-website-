import React from 'react'
import Container from '../Component/Container';
import { ToastContainer, Bounce } from 'react-toastify';
import Card from '../Component/Card.jsx';
import hvg92 from '../assets/hv-g92.png'
import AK900 from '../assets/AK-900 Wired Keyboard.png'
import IPS from '../assets/IPS LCD Gaming Monitor.png'
import coat from '../assets/The north coat.png'
import RGB from '../assets/RGB liquid CPU Cooler.png'
import Canon from '../assets/CANON EOS DSLR Camera.png'
import laptop from '../assets/ASUS FHD Gaming Laptop.png'
import bag from '../assets/Gucci duffle bag.png'
import BookSelf from '../assets/Small BookSelf.png'
import { FaStar } from "react-icons/fa6";
import HeaderHover from '../Component/HeaderHover.jsx';
import { NavLink } from 'react-router-dom';

const ShopNow = () => {
  return (
    <Container className="font-Poppins flex">
      <div className='lg:w-[20%] w-full'>
        <div className='text-black/50 flex items-center gap-3 mt-20 mb-12.5 ml-2 text-sm leading-5'>
          <NavLink to={'/'}>
            <p className='cursor-pointer'>home</p>
          </NavLink>
          <p>/</p>
          <p className='cursor-pointer'>shop</p>
        </div>
        <ul>
          <p className="font-bold text-[#262626] text-xl m-2">Shop by Category</p>
          <HeaderHover>Woman’s Fashion</HeaderHover>
          <HeaderHover>Men’s Fashion</HeaderHover>
          <HeaderHover>Electronics</HeaderHover>
          <HeaderHover>Home & Lifestyle</HeaderHover>
          <HeaderHover>Medicine</HeaderHover>
          <HeaderHover>Sports & Outdoor</HeaderHover>
          <HeaderHover>Baby’s & Toys</HeaderHover>
          <HeaderHover>Groceries & Pets</HeaderHover>
          <HeaderHover>Health & Beauty</HeaderHover>
        </ul>
        <ul className='ml-2 mt-10'>
          <p className="font-bold text-[#262626] text-xl mb-4">Shop by Color</p>
          <div className='flex items-center gap-2.5 cursor-pointer'>
            <div className='h-3 w-3 rounded-full bg-black'></div>
            <p className='leading-8 text-black/50'>Color 1</p>
          </div>
          <div className='flex items-center gap-2.5 cursor-pointer my-4'>
            <div className='h-3 w-3 rounded-full bg-[#FF0000]'></div>
            <p className='leading-8 text-black/50'>Color 2</p>
          </div>
          <div className='flex items-center gap-2.5 cursor-pointer'>
            <div className='h-3 w-3 rounded-full bg-[#00FF38]'></div>
            <p className='leading-8 text-black/50'>Color 3</p>
          </div>
        </ul>
      </div>
      <div className='lg:mt-[151px] lg:w-[80%] w-full'>
        <div className='flex items-center justify-end gap-3 mb-7.5'>
          <p>Show:</p>
          <p className='border-2 border-[#D9D9D9] rounded-md px-11 py-1'>6</p>
        </div>
        <div className='flex flex-wrap gap-7.5 lg:ml-16'>
          <Card
            cardimg={AK900}
            title={'AK-900 Wired Keyboard'}
            price={"960"}
            lessprice={"1160"}
            less={"40"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(75)"}
          />
          <Card
            cardimg={IPS}
            title={'IPS LCD Gaming Monitor'}
            price={"370"}
            className="hidden" className2="hidden"
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(99)"}
          />
          <Card
            cardimg={RGB}
            title={'RGB liquid CPU Cooler'}
            price={"160"}
            lessprice={"170"}
            className="hidden"
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(65)"}
          />
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
            cardimg={hvg92}
            title={'HAVIT HV-G92 Gamepad'}
            price={"120"}
            lessprice={"160"}
            less={"40"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(88)"}
          />
          <Card
            cardimg={laptop}
            title={'ASUS FHD Gaming Laptop'}
            price={"700"}
            className="hidden" className2="hidden"
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(325)"}
          />
          <Card
            cardimg={Canon}
            title={'CANON EOS DSLR Camera'}
            price={"360"}
            lessprice={"400"}
            less={"40"}
            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
            rating={"(95)"}
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
            cardimg={BookSelf}
            title={'Small BookSelf'}
            price={"360"}
            className="hidden" className2="hidden"
            star={<> <FaStar /><FaStar /><FaStar /><FaStar className='text-gray-300' /><FaStar className='text-gray-300' /> </>}
            rating={"(65)"}
          />
          <div className='flex gap-2.5'>
            <p className='px-6.5 py-0.5 cursor-pointer rounded-sm bg-black text-white'>1</p>
            <p className='px-6.5 py-0.5 cursor-pointer rounded-sm bg-black text-white'>2</p>
            <p className='px-6.5 py-0.5 cursor-pointer rounded-sm bg-black text-white'>3</p>
            <p className='px-6.5 py-0.5 cursor-pointer rounded-sm bg-black text-white'>4</p>
          </div>
        </div>
      </div>
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
    </Container>
  )
}

export default ShopNow