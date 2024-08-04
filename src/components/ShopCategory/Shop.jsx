import React from 'react'

const Shop = (props) => {
  return (
    <div className="category-card">
        <img src= {props.img} alt="Men" />
        {/* <div className="category-info" >
            <h3>{props.title}</h3>
        </div> */}
    </div>
  )
}

export default Shop