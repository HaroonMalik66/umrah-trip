import React from "react";
import email from "../../assets/envelope-solid.svg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="left-c">
        <h3>Contact Umrah Trip</h3>
        <div className="btn-container-c">
          <a href="mailto:support@umrahtrip.com">
            <button className="btn email-btn">
              <span>
                <img src={email} alt=" " className="email-icon" />
              </span>
              <span className="text-container-c">
                <span>Email Us</span>
                <span>support@umrahtrip.com</span>
              </span>
            </button>
          </a>
          <a href="tel:+97377952212">
            <button className="btn call-btn ">
              <span>
                <img src={email} alt=" " className="call-icon" />
              </span>
              <span className="text-container-c">
                <span>Call Us</span>
                <span>+97377952212</span>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="right-c">
        <h3>Ministry of Hajj and Umrah customer care</h3>
        <div className="btn-container-c">
          <a href="mailto:care@hajj.gov.sa">
            <button className="btn email-btn ">
              <span>
                <img src={email} alt=" " className="email-icon" />
              </span>
              <span className="text-container-c">
                <span className="bold">Send Email</span>
                <span>care@haj.gov.sa</span>
              </span>
            </button>
          </a>
          <a href="tel:920002814">
            <button className="btn call-btn ">
              <span>
                <img src={email} alt=" " className="call-icon" />
              </span>
              <span className="text-container-c">
                <span className="bold">Call Now</span>
                <span> 920002814 </span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
