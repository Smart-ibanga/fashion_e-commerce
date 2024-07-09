import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
     <Header/>
     <Navbar />
     <Hero />
    </>
  )
}

export default App
