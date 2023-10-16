import React from 'react'
import './Footer.css'
import logo from "../images/Logo.png";
import icons from "../images/Icons.png";

const Footer = () => {
  return (
  <div className='fotter'>
    <div className='footer'>
      <div className="footer-first">
        <img src={logo} alt="#" />
        <div className="nft-market">NFT marketplace UI created with Anima for Figma.</div>
        <div className="nft-market">Join our community</div>
        <div className="img"><img src={icons} alt="#" /></div>
      </div>
      <div className="footer-first f-second">
        <div className="explore">Explore</div>
        <div className="nft-market">MarketPlace</div>
        <div className="nft-market">Rankings</div>
       <div className="nft-market">Connect a wallet</div>
      </div>
      <div className="footer-s">
            <div className="f-join">Join our weekly digest</div>
            <div className="f-get">Get exclusive promotions & updates straight to your inbox.</div>
            <div className="f-btn">
                <input type="text" placeholder="Enter your email here"/>
                <button className="f-email"><i className="fa-regular fa-envelope"></i><span>Subscribe</span></button>
            </div>
        </div>
    </div>
    <hr />
        <div className=" last">Ⓒ NFT Market. Use this template freely.</div>
    </div>
  )
}

export default Footer
