import React from 'react'
import './fotter.css'
import fotter_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const fotter = () => {
  return (
    <div className='fotter'>
      <div className='fotter-logo'>
        <img src={fotter_logo} alt=""></img>
        <p>HOPPER</p>
      </div>
      <ul className='fotter-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='fotter-social-icons'>
        <div className='fotter-icons-container'>
            <img src={instagram_icon} alt=""></img>
        </div>
        <div className='fotter-icons-container'>
            <img src={pintrest_icon} alt=""></img>
        </div>
        <div className='fotter-icons-container'>
            <img src={whatsapp_icon} alt=""></img>
        </div>
      </div>
      <div className='fotter-copyright'>
         <hr></hr>
         <p>Copyright @2023-All Right Reserved</p>
      </div>
    </div>
  )
}

export default fotter
