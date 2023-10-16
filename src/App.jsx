import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingCollection from "./components/TrendingCollection";
import TopArtists from "./components/TopArtists";
import BrowseCategories from "./components/BrowseCategories";
import DiscoverMore from "./components/DiscoverMore";
import HowItWorks from "./components/HowItWorks";
import Subscribe from "./components/Subscribe";
import NFT from "./components/NFT";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./App.css";

function App() {

    return (
        <div className="container">
            <div className="header">
                <Navbar />
            </div>
            <div className="wrapper">
                
                <HeroSection />
                <TrendingCollection />
                <TopArtists />
                <BrowseCategories />
                <DiscoverMore />
            </div>
            <NFT />
            <div className="wrapper">
                <HowItWorks />
                <Subscribe />
                
            </div>
            <Footer />
            {/* <Login /> */}
        </div>
    );
}

export default App;
