import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero-banner">
        <div className="hero-banner-text">
            <h1>Fashion Hub - Home of <span>Everything!</span></h1>
            <p>Get the best qualities of sneakers starting from $40.00</p>
        <button>Explore more...</button>
        </div>
        <div className="hero-banner-image">
            <img src="path/to/your/image.jpg" alt="Fashion Banner"/>
        </div>
    </section>
  )
}

export default Hero