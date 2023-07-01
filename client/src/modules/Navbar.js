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
            <img
              width={"50px"}
              height={"25px"}
              src={placeholder_logo}
              alt={"logo"}
            ></img>
          </a>
        </div>

        <div className="home">
          <a href="/">Home</a>
        </div>

        <div className="auctions">
          <a href="/">Auctions</a>
        </div>

        <div className="inventory">
          <a href="/">Inventory</a>
        </div>

        <div className="discuss">
          <a href="/">Discuss</a>
        </div>

        <div className="store">
          <a href="/">Store</a>
        </div>
      </div>
      <div className="nav-bar-right"></div>
    </div>
  );
}

export default Navbar;
