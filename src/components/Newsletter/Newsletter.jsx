import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className='subscribe'>
        <form className='subscription-form'>
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <div className="input-group">
                <input type="email" name="email" id="email" placeholder='enter your email' required/>
                <button type="submit">Subscribe</button>
            </div>
        </form>
    </section>
    
  )
}

export default Newsletter