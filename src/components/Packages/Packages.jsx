import React from "react";

import { pData } from "../../data/PackageData";
import kaaba from "../../assets/kaaba.jpg";
import whiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";

import "./Packages.css";

const Packages = () => {
  return (
    <div className="packages">
      <span className="heading-i">
        <span>
          Best Umrah <span className="bold">Packages</span>
        </span>
        <button className="view-all">
          {"view all "}
          <img src={RightArrow} alt=" " className="right-arrow" />
        </button>
      </span>
      <div className="cards-box-i">
        {pData.map((p) => (
          <div className="card-i">
            <span className="title-i">{p.title}</span>
            <img className="image-i" src={kaaba} alt=" " />
            <span className="price-i-container">
              <span className="price-i">
                {p.price} <span className="bold"> SAR</span>
              </span>
              <ul className="features">
                <li>
                  <img className="white-tick" src={whiteTick} alt=" " /> Flight
                </li>
                <li>
                  <img className="white-tick" src={whiteTick} alt=" " /> Hotel
                </li>
                <li>
                  <img className="white-tick" src={whiteTick} alt=" " /> Travel
                </li>
                <li>
                  <img className="white-tick" src={whiteTick} alt=" " /> E-visa
                </li>
              </ul>
            </span>
            <span className="cardfoot">
              <span className="left-cardfoot">
                <span className="creator-i">
                  <span>
                    <span className="bold">Offered By: </span>
                    <span className="Akbar-travels">
                      Akbar Travels Of India
                    </span>
                  </span>
                </span>
              </span>
              <span className="right-cardfoot">
                <button className="btn card-btn-p">View</button>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
