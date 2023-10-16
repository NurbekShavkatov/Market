import React,{useState} from 'react'
import Rankings from "../components/Rankings";
import './TrendingCollection.css'
import dog from "../images/dog.png";
import cat from "../images/cat.png";
import fox from "../images/Avatar.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import bear from "../images/bear.png";
import anime1 from "../images/anime.png";
import anime2 from "../images/anime2.png";
import man from "../images/man.png";
import man2 from "../images/man2.png";
import asset from "../images/Asset.png";
import asset2 from "../images/Asset2.png";

const TrendingCollection = () => {


  return (
    <div className='trending-collection'>
      <div className="title">Trending Collection</div>
      <div className="description">Checkout our weekly updated trending collection.</div>
      <div className="cards">
        <div className="card">
            <img src={dog} alt="#" />
            <div className="animals">
                <img src={cat} alt="#" />
                <img src={bear} alt="#" />
                <button className='card-btn' onClick={()=>openIt(false)}>1025+</button>
            </div>
            <div className="design">DSGN Animals</div>
            <div className="fox"><img src={fox} alt="#" /><span>MrFox</span></div>
        </div>
        <div className="card2">
            <img src={card2} alt="#" />
            <div className="animals">
                <img src={anime1} alt="#" />
                <img src={anime2} alt="#" />
                <button className='card-btn'>1025+</button>
            </div>
            <div className="design">DSGN Animals</div>
            <div className="fox"><img src={asset} alt="#" /><span>Shroomie</span></div>
        </div>
        <div className="card3">
            <img src={card3} alt="#" />
            <div className="animals">
                <img src={man} alt="#" />
                <img src={man2} alt="#" />
                <button className='card-btn'>1025+</button>
            </div>
            <div className="design">DSGN Animals</div>
            <div className="fox"><img src={asset2} alt="#" /><span>BeKind2Robots</span></div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCollection
