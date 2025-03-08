import React, { useState } from 'react';
import './Login-SignUp.css';
import user_icon from '../../assets/user.jpg';
import email_icon from '../../assets/email.jpg';
import password_icon from '../../assets/password.jpg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (userType) => {
    if (!name || !email || !password || !userType) {
      alert('Please fill out all fields and select a role.');
      return;
    }

    setRole(userType);

    try {
      const response = await fetch('http://localhost:8000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username: name, password, email, role: userType }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Signed up as ${userType} successfully!`);
        localStorage.setItem('userRole', userType); // Store user role in localStorage
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        alert(data.error || 'Signup failed.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="containerback">
      <div className="container2">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="submit-container">
          <h3>as a Teacher</h3>
          <button className="submit" onClick={() => handleSubmit('Teacher')}>
            Sign Up
          </button>
        </div>

        <div className="submit-container2">
          <h3>as a Student</h3>
          <button className="submit" onClick={() => handleSubmit('Student')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;