import React, { useContext, useRef, useState } from 'react' 
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { shopcontext } from '../../context/shopcontext'
import nav_dropdown from '../assets/dropdown_icon.png'
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const{gettotalitem}=useContext(shopcontext);
    const menuref=useRef();
    const dropdown_toggle = (e) => {
        menuref.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo}alt=""></img>
        <p>Hopper</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />

      <ul ref={menuref} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
        
        <div className='nav-cart-count'>{gettotalitem()}</div>
      </div>
    </div>
  )
}

export default Navbar
