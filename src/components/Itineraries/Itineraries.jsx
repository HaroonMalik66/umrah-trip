import React from "react";
import "./Itineraries.css";
import namaz from "../../assets/namaz.webp";
import safalg from "../../assets/saflag.png";
import whatsapp from "../../assets/whatsapp.png";
import RightArrow from "../../assets/rightArrow.png";

import { iData } from "../../data/ItinerariesData";

const Itineraries = () => {
  return (
    <div className="Itineraries">
      <div className="heading-i">
        <span>
          Umrah Itineraries by <span className="bold">Pilgrims</span>
        </span>

        <button className="view-all">
          {"view all "}
          <img src={RightArrow} alt=" " className="right-arrow" />
        </button>
      </div>

      <div className="cards-box-i">
        {iData.map((i) => (
          <div className="card-i">
            <span className="title-i">{i.title}</span>
            <img className="image-i" src={namaz} alt=" " />
            <span className="price-i-container">
              <span className="price-i">
                {i.price} <span className="bold"> SAR</span>
                <small> / person</small>
              </span>
            </span>
            <span className="facilities-i">
              <ul>
                {i.facilities.map((f) => (
                  <li>{f}</li>
                ))}
              </ul>
            </span>
            <span className="date-i">Travel Date: {i.date}</span>
            <span className="cardfoot">
              <span className="left-cardfoot">
                <img src={safalg} alt=" " className="saflag-i" />
                <span className="creator-i">
                  <span>
                    <span className="bold">Created By: </span>
                    <span>{i.creator}</span>
                  </span>
                </span>
              </span>
              <span className="right-cardfoot">
                <img src={whatsapp} alt=" " className="whatsapp-i" />
                <button className="btn card-btn-i">Book Now</button>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itineraries;
