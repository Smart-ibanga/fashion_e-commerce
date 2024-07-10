import React from 'react';
import './discount.css';

const DiscountedProducts = () => {
    return (
        <section className="discounted-products">
            <div className="product-card">
                <img src="path/to/your/image.jpg" alt="Fashion Low Belt Jeans" />
                <div className="product-info">
                    <h2>Fashion Low Belt Jeans</h2>
                    <div className="rating">
                        <span>★★★★☆</span>
                    </div>
                    <p>The best jean collection of the summer! Get it for discount prices and enjoy all our best offers today. Hurry now!</p>
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