import React from 'react'

const Popular = (props) => {
  return (
    <div className="product-card">
        <img src={props.img} alt="White High Heels" />
        <div className="product-details">
            <div className="product-name">
                <h3>{props.name}</h3>
                <span style={{color: "orange" , fontSize: 24}}>
                  {props.stars}
                  <span  style={{color:"#D0D5DD", fontSize: 24}} >{props.star}</span>
                </span>
                <button>{props.buy}</button>
            </div>
            <div className="product-price">
                <p>{props.price}<span>{props.currency}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Popular