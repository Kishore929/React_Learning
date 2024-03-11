import React, { useState } from 'react'
import './LoginSignup.css';
import email from '../Images/email.jpg'
import password from '../Images/password.jpg'
import username from '../Images/username.jpg'

const LoginSignUp = () => {

  const [action,setAction] = useState("Sign Up")

  return (
   <div className='container'>
    <div className="header">
      <div className="text">{action}</div>
      <div className="underine"><hr></hr></div>
    </div>
    <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
        <img src={username} alt="" height={30} />
        <input type="text" name="" id="" placeholder='username' />
      </div>}
      
      <div className="input">
        <img src={email} alt="" height={30} />
        <input type="email" name="" id="" placeholder='email' />
      </div>
      <div className="input">
        <img src={password} alt="" height={30} />
        <input type="password" name="" id="" placeholder='password' />
      </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password"> Forgot Password ? <span> <a href="#" >Click here!</a></span> </div>}
    
    <div className="submit-container">
      <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
   </div>
  )
}

export default LoginSignUp
