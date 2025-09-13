import React, { useState } from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ListItem } from './ListItem';
import Hover from './Hover';
import { FaBars } from "react-icons/fa6";


const NavBar = () => {

    const [show, setShow] = useState(false)
    function heandleshow() {
        setShow(!show)
    }

    return (
        <div className='border-b-2 border-gray-200 font-Poppins'>
            <Container className="lg:mt-10 mt-5 mb-5 ml-3 lg:ml-auto lg:flex items-center gap-[190px] w-full">
                <div className='flex items-center justify-between'>
                    <img src={Logo} alt="" className='lg:w-[145px] '/>
                    <FaBars className='text-2xl cursor-pointer block lg:hidden mr-10' onClick={heandleshow} />
                </div>
                <div className={` ${show ? 'block' : 'hidden'} lg:block w-full`}>
                    <div className='lg:flex items-center justify-between w-full'>
                        <ul className='lg:flex gap-12 inline-block mt-5 lg:mt-0'>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md"><Hover>Home</Hover></ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md"><Hover>Contact</Hover></ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 mb-1 lg:mb-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md"><Hover>About</Hover></ListItem>
                            <ListItem className="py-1 lg:py-0 px-3 lg:px-0 w-62 lg:w-auto bg-gray-300 lg:bg-transparent rounded-md"><Hover>Sign In</Hover></ListItem>
                        </ul>
                        <div className='flex items-center mt-3 lg:mt-0'>
                            <div className='relative'>
                                <input type="email" placeholder='What are you looking for?' className='w-[250px] px-5 py-2.5 rounded-sm bg-[#F5F5F5] text-[14px]' />
                                <GoSearch className='absolute top-2 right-3 text-2xl cursor-pointer' />
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