import React from "react";
import "../hamburger_menu/style.css";
import { Link } from "react-router-dom";

function Hamburger() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <a href="https://www.instagram.com/6ix_twlv/" target="_blank">
                  INSTA
                </a>
              </li>
              <li>
                <Link to="/contact">My Hobby</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
