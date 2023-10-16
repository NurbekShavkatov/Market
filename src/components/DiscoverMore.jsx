import React from "react";
import "./DiscoverMore.css";
import img from "../images/discover-img.png";
import dancer from "../images/dancer.png";
import d2 from "../images/d-c2.png";
import d3 from "../images/d-c3.png";
import bm from "../images/black-man.png";
import bw from "../images/black-woman.png";

const DiscoverMore = () => {
    return (
        <div className="discover-more">
            <div className="title">Discover More NFTs</div>
            <div className="d-btn-two">
                <div className=" explore">Explore new trending NFTs</div>
                <a href="#">
                    <button className="d-btn">
                        <i className="fa-solid fa-rocket"></i>See All
                    </button>
                </a>
            </div>
            <div className="discover-cards">
                <div className="discover-card">
                    <img src={img} alt="#" />
                    <div className="art">Distant Galaxy</div>
                    <div className="dancer">
                        <img src={dancer} alt="#" />
                        <div className="dancer-name">MoonDancer</div>
                    </div>
                    <div className="price-all">
                        <div className="price">Price</div>
                        <div className="price">Highest Bid</div>
                    </div>
                    <div className="price-all">
                        <div className="eth etherium">1.63 ETH</div>
                        <div className="eth etherium">0.33 wETH</div>
                    </div>
                </div>
                <div className="discover-card">
                    <img src={d2} alt="#" />
                    <div className="art">Life On Edena</div>
                    <div className="dancer">
                        <img src={bm} alt="#" />
                        <div className="dancer-name">NebulaKid</div>
                    </div>
                    <div className="price-all">
                        <div className="price">Price</div>
                        <div className="price">Highest Bid</div>
                    </div>
                    <div className="price-all">
                        <div className="eth etherium">1.63 ETH</div>
                        <div className="eth etherium">0.33 wETH</div>
                    </div>
                </div>
                <div className="discover-card d-n">
                    <img src={d3} alt="#" />
                    <div className="art">AstroFiction</div>
                    <div className="dancer">
                        <img src={bw} alt="#" />
                        <div className="dancer-name">Spaceone</div>
                    </div>
                    <div className="price-all">
                        <div className="price">Price</div>
                        <div className="price">Highest Bid</div>
                    </div>
                    <div className="price-all">
                        <div className="eth etherium">1.63 ETH</div>
                        <div className="eth etherium">0.33 wETH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
