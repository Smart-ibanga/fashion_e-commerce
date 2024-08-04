import React from 'react';
import './popularprdts.css';
import WhiteHeels from "../../assets/images/popularprdt1.svg"
import LowFashion from "../../assets/images/popularprdt2.svg"
import Popular from './Popular';

const PopularProducts = () => {
    return (
        <section className="popular-products">
            <div className="section-header">
                <h2>Popular Products</h2>
                <a href="#">See more</a>
            </div>
            <div className="product-grid">
               <Popular img={WhiteHeels} name="White High Heels" stars="★★★★" star="★" buy="Buy Now" NewPrice="N180,000" OldPrice='N280,000' />
               <Popular img={LowFashion} name="Low fasion dullhill" stars="★★★★" star="★" buy="Buy Now" NewPrice="N180,000" OldPrice='N280,000' />
            </div>
        </section>
    );
}

export default PopularProducts;