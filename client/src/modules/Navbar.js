import React from "react";

//Styles
import "../styles/Navbar.css";

//Asset imports
import placeholder_logo from "../assets/placeholder_logo.png";
import placeholder_profile from "../assets/placeholder_profile.png";

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
          <a href="/">
            <span className="dollar-sign">$</span>
            {/*Later add my own money sign*/}
            <span>0</span> {/*Change to users ammount of currency*/}
          </a>
        </div>
        <div className="profile">
          <a href="/">
            <img
              width={"40px"}
              height={"40px"}
              src={placeholder_profile}
              alt="profile-picture"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
