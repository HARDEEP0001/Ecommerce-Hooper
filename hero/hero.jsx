import React from "react";
import "./hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from '../assets/hero_image.png'
const hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""></img>
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt=""></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt=""></img>
      </div>
    </div>
  );
};

export default hero
