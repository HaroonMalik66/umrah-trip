import React from "react";
import "./CreatePackage.css";

const CreatePackage = () => {
  return (
    <div className="create-package">
      <span className="umrah-evisa">Umrah + E-visa</span>
      <div className="flight-bg">
        <div className="flight">
          <div>
            <span className="top-text-p">From</span>
            <span className="middle-text-p">Mumbai</span>
            <span className="bottom-text-p">
              Chhatrapati Shivaji International Airport
            </span>
          </div>
          <span className="vertical-line"></span>
          <div>
            <span className="top-text-p">To</span>
            <span className="middle-text-p">Jeddah</span>
            <span className="bottom-text-p">
              King Abdulaziz International Airport
            </span>
          </div>
          <span className="vertical-line"></span>

          <div>
            <span className="top-text-p">Departs on</span>
            <span className="middle-text-p">13 Dec' 22</span>
            <span className="bottom-text-p">Tuesday</span>
          </div>
          <span className="vertical-line"></span>

          <div>
            <span className="top-text-p">Return</span>
            <span className="middle-text-p">18 Dec' 22</span>
            <span className="bottom-text-p">Sunday</span>
          </div>
        </div>

        <div className="package">
          <div>
            <span className="top-text-p">Start from</span>
            <span className="middle-text-p">Makkah</span>
          </div>
          <span className="vertical-line"></span>

          <div>
            <span className="top-text-p">No, of nights</span>
            <span className="bottom-text-p">Select no. of nights</span>
          </div>
          <span className="vertical-line"></span>

          <div>
            <span className="top-text-p">Rooms & Guests</span>
            <span className="middle-text-p">1 Rooms 2 Gests</span>
          </div>
        </div>
        <div className="btn-box-p">
          <button className="btn btn-p">Make Package</button>
          <button className="btn btn-p">Package + Flight</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;
