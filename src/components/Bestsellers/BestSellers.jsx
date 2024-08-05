import React from 'react';
import './bestsellers.css';                                                                                                                                                                                        
import Best from './Best';
import Whiteheels from "../../assets/images/popularprdt1.svg"
import LowFashion from "../../assets/images/popularprdt2.svg"


const BestSellers = () => {
    return (
        <section className="best-sellers">
            <div className="section-header">
                <h2>Best Sellers</h2>
                <a href="#">See more</a>
            </div>
            <div className="best-grid">
                < Best img={Whiteheels} stars="★★★★" star="★" />
                < Best img={LowFashion} stars="★★★★" star="★"/>
                < Best img={LowFashion} stars="★★★★" star="★"/>
                < Best img={LowFashion} stars="★★★★" star="★"/>
                < Best img={LowFashion} stars="★★★★" star="★"/>
                < Best img={LowFashion} stars="★★★★" star="★" />
                < Best img={LowFashion} stars="★★★★" star="★"/>
                < Best img={LowFashion} stars="★★★★" star="★"/>
                {/* <!-- Repeat product-card for more products --> */}
            </div>
        </section>
    );
}

export default BestSellers;