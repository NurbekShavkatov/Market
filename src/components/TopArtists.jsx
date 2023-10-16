import React from "react";
import "./TopArtists.css";
import keep from "../images/keep.png";
import second from "../images/second.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import fifth from "../images/fifth.png";
import six from "../images/six.png";
import seven from "../images/seven.png";
import eight from "../images/eight.png";
import nine from "../images/nine.png";
import ten from "../images/ten.png";
import eleven from "../images/eleven.png";
import twelve from "../images/twelve.png";


const TopArtists = () => {
    return (
        <div className="top-artists">
            <div className="title">Top creators</div>
           <div className="title-bottom">
           <div className="description checkout">Checkout Top Rated Creators on the NFT Marketplace</div>
           <a href="#">
                <button  className="view">
                    <i className="fa-solid fa-rocket"></i>View Rangkings
                </button>
            </a>
           </div>

            <div className="artists">

                <div className="artist">
                    <img src={keep} alt="#" />
                    <div className="inform">
                        <div className="name">Keepitreal</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist">
                    <img src={second} alt="#" />
                    <div className="inform">
                        <div className="name">DigiLab</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
                <div className="artist">
                    <img src={third} alt="#" />
                    <div className="inform">
                        <div className="name">GravityOne</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist">
                    <img src={fourth} alt="#" />
                    <div className="inform">
                        <div className="name">Juanie</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
                <div className="artist">
                    <img src={fifth} alt="#" />
                    <div className="inform">
                        <div className="name">BlueWhale</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist seven">
                    <img src={six} alt="#" />
                    <div className="inform">
                        <div className="name">Mr Fox</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
                <div className="artist none">
                    <img src={seven} alt="#" />
                    <div className="inform">
                        <div className="name">Shroomie</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist none">
                    <img src={eight} alt="#" />
                    <div className="inform">
                        <div className="name">Robotica</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
                <div className="artist none">
                    <img src={nine} alt="#" />
                    <div className="inform">
                        <div className="name">RustyRobot</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist none">
                    <img src={ten} alt="#" />
                    <div className="inform">
                        <div className="name">Animakid</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
                <div className="artist none">
                    <img src={eleven} alt="#" />
                    <div className="inform">
                        <div className="name">Dotgu</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>                    
                </div>
                <div className="artist none">
                    <img src={twelve} alt="#" />
                    <div className="inform">
                        <div className="name">Ghiblier</div>
                        <div className="total-sale">Total Sales: <span className="eth">34.53 ETH</span></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopArtists;
