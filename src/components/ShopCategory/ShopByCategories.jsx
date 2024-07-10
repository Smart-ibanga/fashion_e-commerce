import React from 'react';
import './shopCategory.css';

const ShopByCategories = () => {
    return (
        <section className="shop-by-categories">
            <div className="section-header">
                <h2>Shop by Categories</h2>
                <a href="#">See more</a>
            </div>
            <div className="category-grid">
                <div className="category-card">
                    <img src="path/to/your/image1.jpg" alt="Men" />
                    <div className="category-info">
                        <h3>Men</h3>
                    </div>
                </div>
                <div className="category-card">
                    <img src="path/to/your/image2.jpg" alt="Women" />
                    <div className="category-info">
                        <h3>Women</h3>
                    </div>
                </div>
                <div className="category-card">
                    <img src="path/to/your/image3.jpg" alt="Kids" />
                    <div className="category-info">
                        <h3>Kids</h3>
                    </div>
                </div>
                <div className="category-card">
                    <img src="path/to/your/image4.jpg" alt="Accessories" />
                    <div className="category-info">
                        <h3>Accessories</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopByCategories;