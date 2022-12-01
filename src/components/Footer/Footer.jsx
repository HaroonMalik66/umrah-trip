import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container-f">
        <ul className="footbar">
          <li className="footbar-element">
            <Link to="home" spy smooth>
              HOME
            </Link>
          </li>
          <li className="footbar-element">
            <a href="#">NEWS</a>{" "}
          </li>
          <li className="footbar-element">
            <a href="#">UMRAH PACKGAES</a>{" "}
          </li>
          <li className="footbar-element">
            <a href="#">TERMS & CONNDITIONS</a>{" "}
          </li>
          <li className="footbar-element">
            <a href="#">PRIVACY POLIICY</a>{" "}
          </li>
          <li className="footbar-element">
            <a href="#">B2B AGENT</a>{" "}
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
