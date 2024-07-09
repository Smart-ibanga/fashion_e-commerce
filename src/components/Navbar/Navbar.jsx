import React from 'react'
import SearchIcon from "../../assets/icon/search-outline.svg"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <ul className="navbar-links">
                <li><a href="#categories">All Categories</a></li>
                <li><a href="#men">Men</a></li>
                <li><a href="#kids">Kids</a></li>
            </ul>
      </div>
      <div className="navbar-center">
        
        <input type="text" className="search-bar" placeholder="Search..." />
        <button>
          <img src={SearchIcon} alt="Search Icon" className="search-icon" />
        </button>
        
      </div>
      <div className="navbar-right">
        <img src="/path/to/flag.png" alt="Country Flag" className="icon" />
        <img src="/path/to/user.png" alt="User Login" className="icon" />
        <img src="/path/to/cart.png" alt="Cart" className="icon" />
      </div>

    </nav>
  )
}

export default Navbar
