import React from "react";
import trustImage from "../../assets/40years-of-trust.png";
import specialDeals from "../../assets/special-deals.png";
import bestHotels from "../../assets/best-hotels.png";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-1">
        <div className="perks">
          <span className="image">
            <img src={specialDeals} alt=" " />
          </span>
          <span className="perk-title">Special Deals</span>
          <span className="perk-text">
            We Provide Best Prices Of All Inclusive Packages.
          </span>
        </div>
        <div className="perks">
          <span className="image">
            <img src={trustImage} alt=" " />
          </span>
          <span className="perk-title">40 Year Of Trust</span>
          <span className="perk-text">
            We Are The Largest Hajj & Umrah Company In India !
          </span>
        </div>
        <div className="perks">
          <span className="image">
            <img src={bestHotels} alt=" " />
          </span>
          <span className="perk-title">Best Hotels</span>
          <span className="perk-text">
            We Are Offering Best Hotels Near To Kaaba.
          </span>
        </div>
      </div>
      <div className="about-2">
        <h3>About Umrah Trip</h3>
        <span>
          UmrahTrip.com is part of Akbar Travels that was established in 1978 to
          provide travel-related solutions in India & Middle East. Akbar Travels
          headquartered in Mumbai the financial capital of India, is the parent
          company for the Akbar Group – Middle East venture. With a turnover of
          more than 1.2 Billion dollars, Akbar Travels is one of the largest
          Travel Management Company in Asia.
        </span>
        <br />
        <span>
          Since its inception in 2006 with the first office in the Emirate of
          Sharjah, Akbar Travels has grown tremendously with over 41+ locations
          across the Middle East, providing a One-stop-shop travel solution, who
          can cater to the travel requirements of all Corporate clients. With a
          comprehensive range of travel products, Akbar Travels aims at
          satisfying the most discerning corporate travellers having the most
          complicated and demanding travels schedules. Out retail outlets
          combine business excellence with an entrepreneurial spirit to deliver
          travel products and services that are innovative and customer centric
        </span>
      </div>
    </div>
  );
};

export default About;
