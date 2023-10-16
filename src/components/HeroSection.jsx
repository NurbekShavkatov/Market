import React, {useState} from "react";
import Login  from "../components/Login";
import Navbar from "../components/Navbar";
import "./HeroSection.css";
import High from "../images/High.png";

const HeroSection = () => {

    const [open, setOpen] = useState(true);

    const  onLoginClick = () => {
        setOpen(false);
    }
    
    return (
        <>
       {
        open ? (
            <div className="hero-section">
         <div className="left-hero-section">
            <div className="discover"> Discover digital art & Collect NFTs </div>
            <div className="nft">
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                artists.
            </div>
            <a href="#">
                <button  className="hero-btn">
                    <i className="fa-solid fa-rocket"></i>Get Started
                </button>
            </a>

            <div className="sales">
               <div className="sale1">
                240k+ <br /> <span className="span">Total Sale</span>
               </div>
               <div className="sale1">
                100k+ <br /> <span className="span">Auctions</span>
               </div>
               <div className="sale1">
                240k+ <br /> <span className="span">Artists</span>
               </div>
            </div>
        </div>
        <div className="right-hero-section">
            <div className="right-hero"><img src={High} alt="#" /></div>
        </div>
       </div>
        ) :
            'Hello'
       }
       </>
    );
};

export default HeroSection;
