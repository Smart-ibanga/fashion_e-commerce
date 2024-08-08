import React from 'react'
import './Hotdeals.css';    
import Hot from './Hot';
import BrownBoots from "../../assets/images/brownboots.svg"
import Whiteheels from "../../assets/images/popularprdt1.svg"
import Pinksneakers from "../../assets/images/pinksneakers.svg"
import Femalewhite from "../../assets/images/Femalewhite.svg"


const Hotdeals = () => {
  return (
    <section className="hot-sellers">
        <div className="hot-header">
            <h2>HotDeals</h2>
            <a href="#">See more</a>
        </div>
        <div className="hot-grid">
            < Hot img={Whiteheels} stars="★★★★" star="★" />
            < Hot img={BrownBoots} stars="★★★★" star="★"/>
            < Hot img={Pinksneakers} stars="★★★★" star="★"/>
            < Hot img={Femalewhite } stars="★★★★" star="★"/>
            < Hot img={BrownBoots} stars="★★★★" star="★"/>
            < Hot img={Pinksneakers} stars="★★★★" star="★"/>
            < Hot img={Femalewhite } stars="★★★★" star="★"/>
            < Hot img={Whiteheels} stars="★★★★" star="★" />
            
            {/* <!-- Repeat product-card for more products --> */}
        </div>
    </section>
  )
}

export default Hotdeals