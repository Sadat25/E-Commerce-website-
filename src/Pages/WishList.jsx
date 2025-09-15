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
        <div></div>
        <div className='flex items-center justify-between'>
          <SecHeading heading={"Just For You"} headingClassName="text-black" />
          <SecHeading Title={"Just For You"} />
          <Btn1 btn={"See All"} />
        </div>
        <div></div>
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