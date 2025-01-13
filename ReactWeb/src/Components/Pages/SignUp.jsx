import React from 'react'
import './Login-SignUp.css'
import user_icon from'../../assets/user.jpg'
import email_icon from'../../assets/email.jpg'
import password_icon from'../../assets/password.jpg'


const SignUp = () => {
  return (
    <div className='container2'>
     < div className='header'>
      <div className='text'>Sign Up </div>
      <div className='underline'></div>
      </div>
      <div className='inputs'>
      <div className="input">
        <img src={user_icon}  alt=""  />
        <input type="text"  placeholder='Name'/>
      </div>
      <div className="input">
        <img src={email_icon}  alt="" />
        <input type="email"  placeholder='Email Id'/>
      </div>
      <div className="input">
        <img src={password_icon}  alt=""  />
        <input type="password"  placeholder='Password'/>
      </div>
      </div>
      
      <div className="submit-container">
        <div className="submit">Sign Up</div>
      </div>
      
    </div>
  )
} 

export default SignUp
