import React from 'react';
import '../hamburger_menu/style.css';
import {
  Link
 } from "react-router-dom";

function Hamburger() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
               </div>
             </div>
            </div>
         </div>
  );
}

export default Hamburger;
