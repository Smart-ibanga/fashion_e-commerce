import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import Header from './components/Header/Navbar/Header'
import Hero from './components/Hero/Hero'
import PopularProducts from './components/Popular/PopularProducts'
import BestSellers from './components/Bestsellers/BestSellers'
import ShopByCategories from './components/ShopCategory/ShopByCategories'
import NewArrivals from './components/NewArrival/NewArrivals'
import DiscountedProducts from './components/Discount/DiscountedProducts'

function App() {
  return (
    <>
     <Header/>
     <Navbar />
     <Hero />
     <PopularProducts />
     <BestSellers />
     <ShopByCategories />
     <NewArrivals />
     <DiscountedProducts />
    </>
  )
}

export default App
