import React from 'react';
import './bestsellers.css';

const BestSellers = () => {
    return (
        <section className="best-sellers">
            <div className="section-header">
                <h2>Best Sellers</h2>
                <a href="#">See more</a>
            </div>
            <div className="best-grid">
                <div className="best-card">
                    <img src="path/to/your/image.jpg" alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>N180,000 <span>NGN</span></p>
                    <button>Buy Now</button>
                </div>
                <div className="best-card">
                    <img src="path/to/your/image.jpg" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>N180,000 <span>NGN</span></p>
                    <button>Buy Now</button>
                </div>
                {/* <!-- Repeat product-card for more products --> */}
            </div>
        </section>
    );
}

export default BestSellers;