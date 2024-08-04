import React from 'react';
import './newArrival.css';
import Darkbrown from "../../assets/images/Darkbrown.svg"
import Pinkbag from "../../assets/images/pinkbag.svg"
import Arrival from './Arrival';

const NewArrivals = () => {
    return (
        <section className="new-arrivals">
            <div className="section-header">
                <h2>New Arrivals</h2>
                <a href="#">See more</a>
            </div>
            <div className="arrival-grid">
                <Arrival img={Darkbrown} title="Dark Brown Dolce Bag Edition" />
                <Arrival img={Pinkbag} title="Pink Gucci Bag Blue Edition" />
            </div>
        </section>
    );
}

export default NewArrivals;