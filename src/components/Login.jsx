import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Login.css'
import login from "../images/login.png";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-page">
        <img src={login} alt="#" />
        <div className="details">
            <div className="create-l">Create account</div>
            <div className="welcome">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
            <input className='inn' type="text" placeholder='Username'/>
            <input className='inn' type="text" placeholder='Email Address'/>
            <input className='inn' type="text" placeholder='Password'/>
            <button className='ll-btn'>Create Account</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
