import React from "react";
import Header from "../Header/Header";
import kaaba from "../../assets/kaaba.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <Header />
      <div className="hero-container">
        <div className="left-h">
          <span className="heading-h">
            <span className="stroke-text">Perform </span>
            <span className="orange-text">Umrah </span>
            <br />
            without hassle
          </span>
          <span className="subheading-h">Get Umrah visa online</span>
          <span className="btn-container">
            <button className="btn btn-h">PACKAGES</button>
          </span>
        </div>

        <div className="right-h">
          <img src={kaaba} alt="kaaba" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
