import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logobook from '../../assets/book logo.png';
import search_icon from '../../assets/search icon.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status when the component mounts
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Handle logout and update the state
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/home');
  };

  return (
    <div className='navbar'>
      <img src={logobook} alt='Logo' className='logo' />
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
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/categories'>Categories</NavLink></li>
        <li><NavLink to='/courses'>Courses</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {isLoggedIn && <li><NavLink to='/profile'>Profile</NavLink></li>}
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={search_icon} alt='Search Icon' />
      </div>

      <div className='sign'>
        {!isLoggedIn ? (
          <>
            <NavLink to='/signup' className='sign-link'>Sign Up</NavLink>
            <span> | </span>
            <NavLink to='/login' className='sign-link'>Log In</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className='sign-link'>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
