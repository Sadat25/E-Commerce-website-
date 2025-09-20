import React, { useEffect, useState } from 'react'
import Container from '../Component/Container';
import { ToastContainer, Bounce } from 'react-toastify';
import HeaderHover from '../Component/HeaderHover.jsx';
import { NavLink } from 'react-router-dom';
import Pagination from '../Component/Pagination.jsx';

const ShopNow = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setProducts(data.products));
  }, [])
  // console.log(products)

  const [page, setPage] = useState("")

  function heandlePage(e) {
    setPage(e.target.value)
    console.log(page)
  }


  return (
    <Container className="font-Poppins flex">
      <div className='lg:w-[25%] w-full'>
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
      <div className='lg:mt-[151px] lg:w-[75%] w-full'>
        <div className='flex items-center justify-end gap-1 mb-7.5'>
          <p>Show</p>
          <p className='text-2xl'>:</p>
          <select name="" id="" onChange={heandlePage} className='border-2 border-[#D9D9D9] rounded-md px-5 py-1 ml-2'>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className='flex flex-wrap gap-7.5'>
          <Pagination itemsPerPage={6} products={products} />
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