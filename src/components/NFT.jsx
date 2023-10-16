import React from "react";
import Timer from "../components/Timer";
import "./NFT.css";
import Asset from "../images/Asset.png";
import { useEffect } from "react";

const NFT = () => {
    const ny24 = new Date("2024-01-01");

    return (
        <div className="nft-highlight in">
            <div className="shroo">
                <img src={Asset} alt="#" />
                <div className="shroomie">Shroomie</div>
            </div>
            <div className="magic">Magic Mashrooms</div>
            <div className="time">
                <div>
                    
                    <button className="see">
                        <i className="fa-regular fa-eye"></i>
                        <div className="see-nft">See NFT</div>
                    </button>
                </div>
                <Timer until={ny24} />
            </div>
        </div>
    );
};

export default NFT;
