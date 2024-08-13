import React from 'react'
import Hero from '../components/Hero/Hero'
import PopularProducts from '../components/Popular/PopularProducts'
import BestSellers from '../components/Bestsellers/BestSellers'
import ShopByCategories from '../components/ShopCategory/ShopByCategories'
import NewArrivals from '../components/NewArrival/NewArrivals'
import DiscountedProducts from '../components/Discount/DiscountedProducts'
import Hotdeals from '../components/HotDeals/Hotdeals'
import Newsletter from '../components/Newsletter/Newsletter'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <PopularProducts />
        <BestSellers />
        <ShopByCategories />
        <NewArrivals />
        <DiscountedProducts />
        <Hotdeals />
        <Newsletter />
    </div>
  )
}

export default HomePage