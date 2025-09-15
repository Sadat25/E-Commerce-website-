import React, { useState } from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ListItem } from './ListItem';
import Hover from './Hover';
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';


const NavBar = () => {

    const [show, setShow] = useState(false)
    function heandleshow() {
        setShow(!show)
    }

    const [search, setSearch] = useState("")
    function heandleSearch() {
        if (!search) {
            toast.error('Please Search Something!', {
                position: "top-right",
                autoClose: 4000,
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
        <div className='border-b-2 border-gray-200 font-Poppins'>
            <Container className="lg:mt-10 mt-5 mb-5 ml-3 lg:ml-auto lg:flex items-center gap-[190px] w-full">
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
                <div className='flex items-center justify-between'>
                    <NavLink to="/" >
                        <img src={Logo} alt="" className='lg:w-[145px] ' />
                    </NavLink>
                    <FaBars className='text-2xl cursor-pointer block lg:hidden mr-10' onClick={heandleshow} />
                </div>
                <div className={` ${show ? 'block' : 'hidden'} lg:block w-full`}>
                    <div className='lg:flex items-center justify-between w-full'>
                        <ul className='lg:flex gap-12 inline-block mt-5 lg:mt-0'>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md">
                                <NavLink to="/" >
                                    {({ isActive }) => (
                                        <Hover className={isActive ? "before:w-full before:bg-gray-900" : ""}>Home</Hover>
                                    )}
                                </NavLink>
                            </ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md">
                                <NavLink to="/contact" >
                                    {({ isActive }) => (
                                        <Hover className={isActive ? "before:w-full before:bg-gray-900" : ""}>Contact</Hover>
                                    )}
                                </NavLink>
                            </ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md">
                                <NavLink to="/about" >
                                    {({ isActive }) => (
                                        <Hover className={isActive ? "before:w-full before:bg-gray-900" : ""}>About</Hover>
                                    )}
                                </NavLink>
                            </ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md">
                                <NavLink to="/sign-up" >
                                    {({ isActive }) => (
                                        <Hover className={isActive ? "before:w-full before:bg-gray-900" : ""}>Sign Up</Hover>
                                    )}
                                </NavLink>
                            </ListItem>
                        </ul>
                        <div className='flex items-center mt-3 lg:mt-0'>
                            <div className='relative'>
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="email" placeholder='What are you looking for?' className='w-[250px] px-5 py-2.5 rounded-sm bg-[#F5F5F5] text-[14px]' />
                                <GoSearch className='absolute top-2 right-3 text-2xl cursor-pointer' onClick={heandleSearch} />
                            </div>
                            <div className='flex text-2xl gap-4 ml-6 '>
                                <FaRegHeart className='cursor-pointer' />
                                <BsCart3 className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar