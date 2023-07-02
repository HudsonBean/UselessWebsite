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

        <div className="explore">
          <a href="/">Explore</a>
        </div>

        <div className="trending">
          <a href="/">Trending</a>
        </div>

        <div className="saved">
          <a href="/">Saved</a>
        </div>

        <div className="store">
          <a href="/">
            Store
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </a>
        </div>
      </div>
      <div className="nav-bar-right">
        <div className="premium">
          <a href="/">
            Premium
            <span class="material-symbols-outlined">verified</span>
          </a>
        </div>
        <div className="currency">
          <a href="/">$0</a>
        </div>
        <div className="profile">
          <a href="/">
            <img alt="profile-picture"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
