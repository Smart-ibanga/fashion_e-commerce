import React from 'react'
import './header.css'
import fashionLogo from "../../assets/images/fashion-logo.svg"

const Header = () => {
  return (
    <div>
        <div className="header-logo">
          <img src={fashionLogo} alt="Fashion-Logo" />
        </div>
    </div>
  )
}

export default Header