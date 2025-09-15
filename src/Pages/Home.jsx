import React from 'react'
import Header from '../Component/Header'
import FlashSale from '../Component/FlashSale'
import Category from '../Component/Category'
import BestSelling from '../Component/BestSelling'
import JBL from '../Component/JBL'
import OurProducts from '../Component/OurProducts'
import NewArrival from '../Component/NewArrival'
import SERVICE from '../Component/SERVICE'


const Home = () => {
  return (
    <>
      <Header />
      <FlashSale />
      <Category/>
      <BestSelling/>
      <JBL/>
      <OurProducts/>
      <NewArrival/>
      <SERVICE/>
    </>
  )
}

export default Home