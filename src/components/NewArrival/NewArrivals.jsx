import React from 'react';
import './newArrival.css';

const NewArrivals = () => {
    return (
        <section className="new-arrivals">
            <div className="section-header">
                <h2>New Arrivals</h2>
                <a href="#">See more</a>
            </div>
            <div className="product-grid">
                <div className="product-card">
                    <img src="path/to/your/image1.jpg" alt="Dark Brown Dolce Bag Edition" />
                    <div className="product-info">
                        <h3>Dark Brown Dolce Bag Edition</h3>
                    </div>
                </div>
                <div className="product-card">
                    <img src="path/to/your/image2.jpg" alt="Pink Gucci Bag Blue Edition" />
                    <div className="product-info">
                        <h3>Pink Gucci Bag Blue Edition</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewArrivals;