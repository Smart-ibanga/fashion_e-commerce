import React from 'react';
import './shopCategory.css';
import Men from "../../assets/images/menCategory.svg"
import Women from "../../assets/images/womenCategory.svg"
import Kids from "../../assets/images/kidsCategory.svg"
import Gym from "../../assets/images/gymCategory.svg"
import Shop from './Shop';

const ShopByCategories = () => {
    return (
        <section className="shop-by-categories">
            <div className="section-header">
                <h2>Shop by Categories</h2>
                <a href="#">See more</a>
            </div>
            <div className="category-grid">
                <Shop img={Men} />
                <Shop img={Women} />
                <Shop img={Kids} />
                <Shop img={Gym} />
            </div>
        </section>
    );
}

export default ShopByCategories;