import React from 'react'
import user_icon from'../../assets/user.jpg'
import password_icon from'../../assets/password.jpg'

const LogIn = () => {
  return (
    <div className='container2'>
         < div className='header'>
          <div className='text'>Log In </div>
          <div className='underline'></div>
          </div>
          <div className='inputs'>
          <div className="input">
            <img src={user_icon}  alt=""  />
            <input type="text"  placeholder='Name'/>
          </div>
          <div className="input">
                  <img src={password_icon}  alt=""  />
                  <input type="password"  placeholder='Password'/>
                </div>
                </div>
                <div className="forgot-password">Forgot Password    <span>Click Here</span></div>
                <div className="submit-container">
                  <div className="submit">Log In</div>
                

      
    </div>
    </div>
  )
}

export default LogIn
