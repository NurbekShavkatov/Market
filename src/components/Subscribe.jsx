import React from "react";
import './Subscribe.css'
import Photo from "../images/Photo.png";

const Subscribe = () => {
    return( <div className="subscribe">
        <img src={Photo} alt="#" />
        <div className="footer-s">
            <div className="join">Join our weekly digest</div>
            <div className="get">Get exclusive promotions & updates straight to your inbox.</div>
            <div className="btn-section">
                <input type="text" placeholder="Enter your email here"/>
                <button className="email"><i className="fa-regular fa-envelope"></i><span>Subscribe</span></button>
            </div>
        </div>
    </div>
    )
};

export default Subscribe;
