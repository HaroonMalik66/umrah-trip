import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container-f">
        <ul className="footbar">
          <li className="footbar-element">
            <button>
              <Link to="home" spy smooth>
                HOME
              </Link>
            </button>
          </li>
          <li className="footbar-element">
            <button>NEWS</button>
          </li>
          <li className="footbar-element">
            <button>UMRAH PACKGAES</button>
          </li>
          <li className="footbar-element">
            <button>TERMS & CONNDITIONS</button>
          </li>
          <li className="footbar-element">
            <button>PRIVACY POLIICY</button>
          </li>
          <li className="footbar-element">
            <button>B2B AGENT</button>
          </li>
        </ul>
        <hr />
        <p className="footerText">
          Copyright (c) 2023 www.umrahtrip.com. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
