import React, { useState } from 'react';
import HeroSection from "../components/HeroSection";
import Login from "../components/Login";
import logo from "../images/Logo.png";
import './Navbar.css';

function Navbar({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-brand">
        <span className="navbar-title"><img src={logo} alt="#" /></span>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="navbar-links">
        <li><a href="#" className='nav'>Marketplace</a></li>
        <li><a href="#"  className='nav'>Connect a wallet</a></li>
        <li><a href="#"  className='nav'>Rankings</a></li>
        <li><a href={<Login />}>
          <button className='header-btn' onClick={onLoginClick}><i className="fa-regular fa-user"></i>Sign Up</button>
          </a></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
