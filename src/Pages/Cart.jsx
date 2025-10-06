import React from 'react'
import Container from '../Component/Container'
import BreadCumb from '../Component/BreadCumb'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Btn1 from '../Component/Btn1';
import Btn from '../Component/Btn';
import { NavLink } from 'react-router-dom';
import CartItem from '../Component/CartItem'
import lcd from '../assets/LCD.png'
import h1 from '../assets/H1.png'

const Cart = () => {
    return (
        <Container>
            <BreadCumb />
            <div className='mt-20 font-Poppins'>
                <div className='grid grid-cols-4 px-10 py-6 rounded-md shadow-[0_-4px_15px,0_10px_15px] shadow-gray-100/50'>
                    <div>Product</div>
                    <div className='text-center'>Price</div>
                    <div className='text-center'>Quantity</div>
                    <div className='text-center'>Subtotal</div>
                </div>
                <CartItem
                    img={lcd}
                    name={"LCD Monitor"}
                    Price={"650"}
                    Subtotal={"650"}
                />
                <CartItem
                    img={h1}
                    name={"H1 Gamepad"}
                    Price={"550"}
                    Subtotal={"1100"}
                    className={"hidden"}
                />
                <div className='mt-6 flex justify-between items-center'>
                    <NavLink to={"/shop-now"} >
                        <Btn1 className="border-[2px] border-gray-400" btn={"Return To Shop"} />
                    </NavLink>
                    <Btn1 className="border-[2px] border-gray-400" btn={"Update Cart"} />
                </div>
                <div className='mt-20 flex justify-between'>
                    <div>
                        <div className='flex gap-4'>
                            <input type="text" className='lg:w-[300px] py-4 px-6 border rounded-sm' placeholder='Coupon Code' name="" id="" />
                            <Btn btn={"Apply Coupon"} />
                        </div>
                    </div>
                    <div className='px-6 py-8 border-2 border-gray-400 rounded-sm'>
                        <p className='text-[20px] font-medium leading-7'>Cart Total</p>
                        <div className='w-[422px] mt-2'>
                            <div className='flex justify-between py-4 border-b-[2px] border-gray-300'>
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div className='flex justify-between py-4 border-b-[2px] border-gray-300'>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className='flex justify-between py-4'>
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>
                        </div>
                        <Btn className="m-auto block" btn={"Procees to Checkout"} />
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

export default Cart