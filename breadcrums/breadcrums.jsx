import React from 'react'
import './breadcrums.css';
import arrow_icon from '../assets/breadcrum_arrow.png'
const breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt=""></img>SHOP<img src={arrow_icon} alt=""></img>{product.category} <img src={arrow_icon} alt=""></img> {product.name}
    </div>
  )
}

export default breadcrums
