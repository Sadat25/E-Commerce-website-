import React, { useState } from 'react'
import Container from './Container'
import { AiOutlineCopyright } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Title20Md from './Title20Md';
import Qr from '../assets/Qr Code.png'
import Frame from '../assets/Frame.png'
import { ListItem } from './ListItem';
import { FaArrowUp } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Footer = () => {


  const [email, setEmail] = useState("")
  function heandleEmail() {
    if (!email) {
      toast.error('Please Enter Your Email!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success('Email Sent Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  function heandleRefresh() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  return (
    <div className='font-Poppins bg-black text-white lg:mt-[140px] mt-10 relative'>
      <Container>
        <div className='py-20 grid grid-cols-5 gap-5'>
          <div>
            <h2 className='font-Inter font-bold text-[24px] leading-[24px]'>Exclusive</h2>
            <Title20Md className="my-6">Subscribe</Title20Md>
            <p className=' leading-[24px]'>Get 10% off your first order</p>
            <div className='relative'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' className='border px-4 py-3 mt-4 rounded-sm w-full' />
              <VscSend className='absolute top-7 right-4 text-2xl cursor-pointer' onClick={heandleEmail} />
            </div>
          </div>
          <div className='ml-14'>
            <Title20Md className="mb-6">Support</Title20Md>
            <p className='leading-[24px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='my-4 leading-[24px]'>exclusive@gmail.com</p>
            <p className='leading-[24px]'>+88015-88888-9999</p>
          </div>
          <ul className='ml-14'>
            <Title20Md className="mb-6">Account</Title20Md>
            <ListItem>My Account</ListItem>
            <ListItem className="my-4">Login / Register</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem className="my-4">Wishlist</ListItem>
            <ListItem>Shop</ListItem>
          </ul>
          <ul className='ml-10'>
            <Title20Md className="mb-6">Quick Link</Title20Md>
            <ListItem>Privacy Policy</ListItem>
            <ListItem className="my-4">Terms Of Use</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem className="mt-4">Contact</ListItem>
          </ul>
          <div>
            <Title20Md className="mb-6">Download App</Title20Md>
            <p className=' font-medium text-[12px] leading-[18px]'>Save $3 with App New User Only</p>
            <div className='grid grid-cols-2 mt-2 mb-6'>
              <img src={Qr} alt="" />
              <img src={Frame} alt="" className='-ml-5 cursor-pointer' />
            </div>
            <div className='flex gap-6 text-xl'>
              <FaFacebookF className='cursor-pointer' />
              <FiTwitter className='cursor-pointer' />
              <FaInstagram className='cursor-pointer' />
              <FaLinkedinIn className='cursor-pointer' />
            </div>
          </div>
        </div>
        <p className='flex items-center justify-center gap-[6px] pb-6 laeding-[24px] text-[#999999]'>
          <AiOutlineCopyright />
          Copyright Rimel 2022. All right reserved
        </p>
        <div className='bg-gray-100 rounded-full h-[50px] w-[50px] flex items-center absolute lg:top-[-77px] top-2 lg:right-[51px] right-2 cursor-pointer' onClick={heandleRefresh}>
          <FaArrowUp className='text-black text-2xl m-auto' />
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

export default Footer