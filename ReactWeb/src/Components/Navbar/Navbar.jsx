import React from 'react'
import './Navbar.css'
import logobook from '../../assets/book logo.png'
import search_icon from '../../assets/search icon.png'
import{ Link ,NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src ={logobook} alt="" className='logo'/>

        <div className='title'>
      <h1>TuTorial</h1>
      </div>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        
      </ul>


      <div className ='search-box'>
        <input type ="text" placeholder='Search'/>
        <img src={search_icon} alt=""/>
      </div>

      <div className='sign'>
      <NavLink to="/signup" className='sign-link'>Sign Up</NavLink>
        <span> | </span>
        <NavLink to="/login" className='sign-link'>Log In</NavLink>
      
      </div>
    </div>
  )
}

export default Navbar
