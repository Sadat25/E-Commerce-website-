import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Container from '../Component/Container';
import Btn1 from '../Component/Btn1';
import SecHeading from '../Component/SecHeading';

const WishList = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-between mb-15 mt-20'>
          <h3 className='font-Poppins text-xl leading-6.5'>Wishlist (4)</h3>
          <Btn1 btn={"Move All To Bag"} />
        </div>
        <div>slick slider</div>
        <div className='flex items-center justify-between mt-20 mb-15'>
            <div className='flex items-center gap-4'>
              <div className=' bg-black w-5 h-10 relative'>
                <div className='w-5 h-10 bg-primary rounded-md absolute top-0 left-0'></div>
              </div>
              <h2 className="font-Poppins text-black leading-6.5 lg:text-[20px] ">Just For You</h2>
            </div>
          <Btn1 btn={"See All"} />
        </div>
        <div>slick slider</div>
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