import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ListItem } from './ListItem';
import Hover from './Hover';


const NavBar = () => {
    return (
        <div className='border-b-2 border-gray-200 '>
            <Container className="mt-10 mb-5 flex justify-between items-center">
                <img src={Logo} alt="" />
                <ul className='flex gap-12'>
                    <ListItem><Hover>Home</Hover></ListItem>
                    <ListItem><Hover>Contact</Hover></ListItem>
                    <ListItem><Hover>About</Hover></ListItem>
                    <ListItem><Hover>Sign In</Hover></ListItem>
                </ul>
                <div className='flex items-center'>
                    <div className='relative'>
                        <input type="email" placeholder='What are you looking for?' className='w-[250px] px-5 py-2.5 rounded-sm bg-[#F5F5F5] text-[14px]' />
                        <GoSearch className='absolute top-2 right-3 text-2xl cursor-pointer' />
                    </div>
                    <div className='flex text-2xl gap-4 ml-6 '>
                        <FaRegHeart className='cursor-pointer' />
                        <BsCart3 className='cursor-pointer' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar