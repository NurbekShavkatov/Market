import React from 'react'
import './BrowseCategories.css'
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";
import icon8 from "../images/icon8.png";

const BrowseCategories = () => {
  return (
    <div className='browse-categories'>
      <div className="title">Browse Categories</div>
      <div className="card-collection">
        <div className="browse-card">
            <img src={icon1} alt="#" />
            <div className="art">Art</div>
        </div>
        <div className="browse-card">
            <img src={icon2} alt="#" />
            <div className="art">Collectible</div>
        </div>
        <div className="browse-card">
            <img src={icon3} alt="#" />
            <div className="art">Music</div>
        </div>
        <div className="browse-card">
            <img src={icon4} alt="#" />
            <div className="art">Photography</div>
        </div>
        <div className="browse-card">
            <img src={icon5} alt="#" />
            <div className="art">Video</div>
        </div>
        <div className="browse-card">
            <img src={icon6} alt="#" />
            <div className="art">Utility</div>
        </div>
        <div className="browse-card">
            <img src={icon7} alt="#" />
            <div className="art">Sport</div>
        </div>
        <div className="browse-card">
            <img src={icon8} alt="#" />
            <div className="art">Virtual Worlds</div>
        </div>
      </div>
    </div>
  )
}

export default BrowseCategories
