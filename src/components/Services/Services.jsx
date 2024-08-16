import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <div className="features-section">
        <div className="feature">
            <img src="fast-delivery-icon.png" alt="Fast Delivery Icon" />
            <h3>Fast Delivery</h3>
            <p>
                Get the fastest delivery in the country. We have done over 24000 deliveries worldwide.
            </p>
        </div>
        <div className="feature">
            <img src="customer-support-icon.png" alt="Customer Support Icon" />
            <h3>24/7 Customer support</h3>
            <p>
                Get customer support from the most expert and friendly support. Your needs are our priority!
            </p>
        </div>
        <div className="feature">
            <img src="all-locations-icon.png" alt="All Locations Icon" />
            <h3>All locations</h3>
            <p>
                Get the deliveries anywhere across the globe!
            </p>
        </div>
  </div>
  )
}

export default Services