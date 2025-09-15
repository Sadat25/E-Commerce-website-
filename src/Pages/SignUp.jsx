import React, { useState } from 'react'
import singin from '../assets/singin.png'
import Btn from '../Component/Btn'
import Google from '../assets/Google.png'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';


const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function heandleClick() {
    if (!name || !email || !password) {
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
      toast.success('Sign up successfully!', {
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
    <div className='mt-14.5 md:flex gap-[130px] font-Poppins'>
      <div className='md:w-[50%] hidden md:block'><img src={singin} alt="" className='w-full' /></div>
      <div className='md:w-[50%] flex flex-col md:mt-[130px] mt-10 md:px-0 px-5'>
        <h2 className='font-Inter font-medium text-4xl text-black leading-7.5 tracking-[4%] '>Create an account</h2>
        <p className='md:mt-6 mt-3'>Enter your details below</p>
        <div className='md:w-[370px] w-full'>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='block w-full border-b md:mt-12 mt-6 md:py-3 py-1 focus:outline-none' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='block w-full border-b md:mt-10 mt-5 md:py-3 py-1 focus:outline-none' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='block w-full border-b md:mt-10 mt-5 md:py-3 py-1 focus:outline-none' />
          <button onClick={heandleClick} className="w-full mt-10 lg:px-12 px-6 lg:py-4 py-2 text-white bg-primary font-Poppins font-medium lg:text-[16px] text-sm leading-[24px] rounded-sm cursor-pointer">Create Account</button>
          <div className='md:py-4 py-2 flex md:gap-4 gap-2 justify-center border-2 border-gray-300 mt-4 md:mb-8 mb-4 rounded-sm cursor-pointer'>
            <img src={Google} alt="" />
            <p>Sign up with Google</p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <p>Already have account?</p>
            <NavLink to={"/login"} className="block border-b"><p>Log in</p></NavLink>
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
      </div>
    </div>
  )
}

export default SignUp