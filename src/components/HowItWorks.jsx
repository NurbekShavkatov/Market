import React from 'react'
import './HowItWorks.css'
import Icon from "../images/Icon.png";
import Icon2 from "../images/IconSecond.png";
import Icon3 from "../images/IconThird.png";

const HowItWorks = () => {
  return (
    <div className='hov'>
      <div className="title">How It Works</div>
      <div className="description">Find out how to get started</div>
      <div className="work-card">
        <div className="main-card">
            <img src={Icon} alt="#" />
            <div className="setup">Setup Your wallet</div>
            <div className="set-up">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</div>
        </div>
        <div className="main-card">
            <img src={Icon2} alt="#" />
            <div className="setup">Create Collection</div>
            <div className="set-up">Upload your work and setup your collection. Add a description, social links and floor price.</div>
        </div>
        <div className="main-card">
            <img src={Icon3} alt="#" />
            <div className="setup">Start Earning</div>
            <div className="set-up">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
