import React from "react";

//Styles
import "../styles/Navbar.css";

//Asset imports
import placeholder_logo from "../assets/placeholder_logo.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <div className="logo">
          <a href="/">
            <img src={placeholder_logo} alt="logo"></img>
          </a>
        </div>

        <div className="Explore">
          <a href="/">Explore</a>
        </div>

        <div className="Auctions">
          <a href="/">Auctions</a>
        </div>

        <div className="Inventory">
          <a href="/">Inventory</a>
        </div>

        <div className="Discuss">
          <a href="/">Discuss</a>
        </div>

        <div className="Store">
          <a href="/">Store</a>
        </div>
      </div>
      <div className="nav-bar-right"></div>
    </div>
  );
}

export default Navbar;
