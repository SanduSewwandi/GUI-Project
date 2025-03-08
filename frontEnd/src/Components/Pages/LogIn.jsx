import React, { useState } from 'react';
import './Login-SignUp.css';
import user_icon from '../../assets/user.jpg';
import password_icon from '../../assets/password.jpg';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsLoggedIn(true);
      alert('Logged in successfully!');

      const userRole = localStorage.getItem('userRole');
      if (userRole === 'Teacher') {
        navigate('/admin');
      } else if (userRole === 'Student') {
        navigate('/profile');
      } else {
        alert('User role not recognized.');
      }
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className='containerback'>
      <div className='container2'>
        <div className='header'>
          <div className='text'>Log In</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          <div className='input'>
            <img src={user_icon} alt='User' />
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt='Password' />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='forgot-password'>
          Forgot Password <span>Click Here</span>
        </div>

        <div className='submit-container'>
          <div className='submit' onClick={handleLogin}>
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
