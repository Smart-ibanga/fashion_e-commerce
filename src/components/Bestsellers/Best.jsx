import React from 'react'


const Best = (props) => {
  return (
    <div className="best-card">
        <img src={props.img} alt="Product 1" />
        <h3>White High heels</h3>
        <span style={{color: "orange" , fontSize: 24}}>
            {props.stars}
            <span  style={{color:"#D0D5DD", fontSize: 24}} >{props.star}</span>
        </span>
        <span className='total-sales'>23 sold</span>
        <br></br>
        <span className='present-cost'>N180,000 </span>
        <span className='previous-cost'>N120,000</span>
        <br></br>
        <button>Add to cart</button>
    </div>
  )
}

export default Best