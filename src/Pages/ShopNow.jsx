import React, { useEffect, useState } from 'react'
import Container from '../Component/Container';
import { ToastContainer, Bounce } from 'react-toastify';
import HeaderHover from '../Component/HeaderHover.jsx';
import Pagination from '../Component/Pagination.jsx';
import axios from 'axios';
import Scalation from '../Component/Scalation.jsx';
import BreadCumb from '../Component/BreadCumb.jsx';
import { useDispatch } from 'react-redux'
import { FilterReducer, ProductReducer } from '../Slices/ProductSlices.jsx';

const ShopNow = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(6)
  const dispatch = useDispatch()
  const [category, setCategory] = useState([])


  async function grtAllProducts() {
    const items = await axios.get('https://dummyjson.com/products')
    setProducts(items.data.products)
    dispatch(ProductReducer(items.data.products))
    setLoading(true)
  }

  useEffect(() => {
    grtAllProducts()
  }, [])

  useEffect(() => {
    const uniqueProducts = [...new Set(products.map(item => item.category))]
    setCategory(uniqueProducts)
  }, [products])
  // console.log(products)

  function handleFilter(item) {
    const filterItem = products.filter((categoryItem) => categoryItem.category == item)
    dispatch(FilterReducer(filterItem))
  }

  function handleAll() {
    dispatch(ProductReducer(products))
  }


  return (
    <Container className="font-Poppins flex">
      <div className='lg:w-[25%] w-full'>
        <BreadCumb />
        <ul>
          <p className="font-bold text-[#262626] text-xl m-2">Shop by Category</p>
          <HeaderHover onClick={handleAll} className="select-none">All Products</HeaderHover>
          {category.map((item, index) => (
            <HeaderHover onClick={() => handleFilter(item)} key={index} className="capitalize select-none">{item}</HeaderHover>
          ))}
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
          <select
            onChange={(e) => setPage(Number(e.target.value))}
            className='border-2 border-[#D9D9D9] cursor-pointer rounded-md px-5 py-1 ml-2'>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className='flex flex-wrap gap-7.5'>
          {
            loading ?
              <Pagination itemsPerPage={page} />
              : <>
                <Scalation />
                <Scalation />
                <Scalation />
                <Scalation />
                <Scalation />
                <Scalation />
              </>
          }
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