import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PopularProducts from './components/Popular/PopularProducts'
import BestSellers from './components/Bestsellers/BestSellers'

function App() {
  return (
    <>
     <Header/>
     <Navbar />
     <Hero />
     <PopularProducts />
     <BestSellers />
    </>
  )
}

export default App
