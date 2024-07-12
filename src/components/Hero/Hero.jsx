import React from 'react'
import './hero.css'
import HeroImg from "../../assets/images/hero-image.svg"

const Hero = () => {
  return (
    <section className="hero-banner">
        <div className="hero-banner-text">
            <h1>Fashion <br/>
            Hub - Home of 
            <br/> <span>Everything!</span></h1>
            <br/>
            <br />
            <br/>
            <p>Get the best qualities of sneakers starting from $40.00</p>
        <button>Explore more...</button>
        </div>
    </section>
  )
}

export default Hero