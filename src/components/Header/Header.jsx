import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="Header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--darkgray)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <button className="nav-item">
              <Link
                onClick={() => setMenuOpened(false)}
                to="home"
                spy
                smooth
                activeClass="active"
              >
                HOME
              </Link>
            </button>
          </li>
          <li>
            <button className="nav-item" onClick={() => setMenuOpened(false)}>
              B2B AGENT
            </button>
          </li>
          <li>
            <button className="nav-item" onClick={() => setMenuOpened(false)}>
              PACKAGES
            </button>
          </li>
          <li>
            <button className="nav-item" onClick={() => setMenuOpened(false)}>
              NEWS
            </button>
          </li>

          <li>
            <button className="btn btn-navbar">LOGIN / SIGN UP</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
