import React from 'react';
import './discount.css';
import JEANS from "../../assets/images/jeans.svg"

const DiscountedProducts = () => {
    return (
        <section className="discounted-products">
            <div className="discount-card">
                <img src= {JEANS} alt="Fashion Low Belt Jeans" />
                <div className="discount-info">
                    <h2>Fashion Low Belt<br></br> 
                        Jeans
                    </h2>
                    <div className='rating'>
                        <span style={{color: "orange" , fontSize: 24}}>★★★★</span>
                        <span style={{color:"#D0D5DD", fontSize: 24}}>★</span>
                    </div>
                    <p>
                        The best jean collection of the summer! <br></br>
                        Get it for discount prices and enjoy all our best offers today.< br></br>
                        Hurry now!
                    </p>
                    <div className="price">
                        <span className="current-price">N80,000</span>
                        <span className="original-price">N120,000</span>
                        <span className="discount">Save 20%</span>
                    </div>
                    <div className="buttons">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="shop-now">Shop now!</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiscountedProducts;