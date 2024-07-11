import React from 'react'
import './header.css'
import fashionLogo from "../../assets/images/fashionLogo.svg"
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
        <div className="header-logo">
          <img src={fashionLogo} alt="Fashion-Logo" />
        </div>
        <Navbar />
    </div>
  )
}

export default Header