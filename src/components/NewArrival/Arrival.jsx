import React from 'react'


const Arrival = (props) => {
  return (
    <div className="arrival-card">
        <img src= {props.img} alt="Dark Brown Dolce Bag Edition" />
        <div className="arrival-info">
            <h3>{props.title}</h3>
        </div>
    </div>
   )
}

export default Arrival