import React, { useState } from 'react'
import Container from '../Component/Container'
import phone from '../assets/by phone.png'
import start from '../assets/Start .png'
import chat from '../assets/Live Chat.png'
import { NavLink } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Contact = () => {

  const [caseNumber, setCaseNumber] = useState("")
  const [email, setEmail] = useState("")
  function heandleClick() {
    if (!caseNumber || !email) {
      toast.error('Please fill in all fields!', {
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
      toast.success('Case Updated Successfully!', {
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


  return (
    <div>
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
      <Container>
        <div className='text-center w-full py-20 bg-[#ededed] rounded-xl my-5 '>
          <h1 className='text-black text-2xl lg:text-5xl font-bold'>Contact Us</h1>
        </div>
      </Container>
      <div className='bg-[#ededed] py-17 border border-gray-300'>
        <Container className="lg:flex justify-between items-center">
          <div className='sm:w-[310px] w-full px-10 sm:px-0 text-center m-auto'>
            <img src={phone} alt="" className='mx-auto' />
            <h2 className='text-black tracking-[4px] text-2xl font-bold leading-7 mt-7'>By Phone</h2>
            <h2 className='text-[#606060] text-2xl font-bold leading-7 my-5'>Get telephone support by signing into your account.</h2>
            <button className='py-4 bg-white w-full text-[18px] border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300'>Log In</button>
          </div>
          <div className='sm:w-[310px] w-full px-10 sm:px-0 text-center m-auto mt-10 lg:mt-0'>
            <img src={start} alt="" className='mx-auto' />
            <h2 className='text-black tracking-[4px] text-2xl font-bold leading-7 mt-10'>Start a new case</h2>
            <h2 className='text-[#606060] text-2xl font-bold leading-8 my-5'>Just send us your questions or concerns by starting a new case and we will give you the help you need.</h2>
            <button className='py-4 bg-white w-full text-[18px] border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300'>START HERE</button>
          </div>
          <div className='sm:w-[310px] w-full px-10 sm:px-0 text-center m-auto mt-10 lg:mt-0'>
            <img src={chat} alt="" className='mx-auto' />
            <h2 className='text-black tracking-[4px] text-2xl font-bold leading-7 mt-10'>Live Chat</h2>
            <h2 className='text-[#606060] text-2xl font-bold leading-7 my-5'>Chat with a member of our in-house team.</h2>
            <button className='py-4 bg-white w-full text-[18px] border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300'>Start Chat</button>
          </div>
        </Container>
      </div>
      <Container className="py-20 text-center">
        <h2 className='text-2xl lg:text-5xl font-bold text-black leading-14'>Track a Case</h2>
        <h2 className='text-[16px] lg:text-xl font-bold text-[#606060] leading-8 my-5'>View your thread of messages with our support team.</h2>
        <div className='sm:w-[360px] w-full px-6 sm:px-0 m-auto my-12'>
          <label className='block text-start'>Case</label>
          <input value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} type="text" placeholder='Case' className='block w-full mb-4 mt-2 p-4 border border-gray-300 rounded-sm focus:outline-none' />
          <label className='block text-start'>Email Address</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address' className='block w-full mb-6 mt-2 p-4 border border-gray-300 rounded-sm focus:outline-none' />
          <button className='py-4 w-full bg-[#929292] hover:bg-[#818181] rounded-sm text-white font-bold cursor-pointer mt-8 ease-in-out duration-300' onClick={heandleClick}>GO</button>
        </div>
      </Container>
      <div className='bg-[#ededed] py-17 border border-gray-300'>
        <Container>
          <h2 className='text-center mb-12 text-black text-2xl lg:text-5xl font-bold leading-13'>Need Instant Help?</h2>
          <div className='sm:flex justify-between items-center w-full'>
            <button className='py-4 bg-white w-[310px] text-xl border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300 m-auto block'>Video Tutorials</button>
            <button className='py-4 bg-white w-[310px] text-xl border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300 m-auto block'>Knowledge Base</button>
            <button className='py-4 bg-white w-[310px] text-xl border border-gray-300 rounded-sm text-[#606060] font-bold cursor-pointer hover:text-black hover:bg-[#ededed] mt-2 ease-in-out duration-300 m-auto block'>Resources</button>
          </div>
        </Container>
      </div>
      <div className='bg-[#96aebe] hover:bg-[#a7bfcf] ease-in-out duration-300 py-10'>
        <Container>
          <NavLink to="/sign-up" >
            <button className='m-auto block text-white text-2xl font-bold uppercase leading-8 tracking-[4.8px] cursor-pointer p-7'>Sign Up now</button>
          </NavLink>
        </Container>
      </div>
    </div>
  )
}

export default Contact