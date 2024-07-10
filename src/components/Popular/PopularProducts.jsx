import React from 'react';
import './popularprdts.css';

const PopularProducts = () => {
    return (
        <section className="popular-products">
            <div className="section-header">
                <h2>Popular Products</h2>
                <a href="#">See more</a>
            </div>
            <div className="product-grid">
                <div className="product-card">
                    <img src="path/to/your/image.jpg" alt="White High Heels" />
                    <h3>White High Heels</h3>
                    <p>N180,000 <span>NGN</span></p>
                    <button>Buy Now</button>
                </div>
                <div className="product-card">
                    <img src="path/to/your/image.jpg" alt="Low Fashion doll shoes" />
                    <h3>Low Fashion doll shoes</h3>
                    <p>N180,000 <span>NGN</span></p>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>
    );
}

export default PopularProducts;