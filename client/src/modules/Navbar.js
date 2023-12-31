//Imports
import React from "react";

//Styles
import "../styles/Navbar.css";

//Pages

//Asset imports
import placeholder_logo from "../assets/placeholder_logo.png";
import placeholder_profile from "../assets/placeholder_profile.png";

function Navbar(special) {
  let user;
  if (special.content === 2) {
    user = special;
  } else {
    user = 1;
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <div className="logo">
          <a href={"/"}>
            <img
              width={"50px"}
              height={"25px"}
              src={placeholder_logo}
              alt={"logo"}
            ></img>
          </a>
        </div>

        <div className="explore">
          <a href={"/Explore"}>Explore</a>
        </div>
        <div className="trending">
          <a href={"/Explore/Trending"}>Trending</a>
        </div>
        <div className="saved">
          <a href={"Users/1/Saved"}>Saved</a>
        </div>
        <div className="store">
          <a href={"/Store"}>
            Store
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </a>
        </div>
      </div>
      <div className="nav-bar-right">
        <div className="premium">
          <a href="/Store/Subscriptions">
            Premium
            <span className="material-symbols-outlined">verified</span>
          </a>
        </div>
        <div className="currency">
          <a href="/Store">
            <span className="dollar-sign">$</span>
            {/*Later add my own money sign*/}
            <span>0</span> {/*Change to users ammount of currency*/}
          </a>
        </div>
        <div className="profile">
          {user === 0 ? (
            <a href="/users/1/Profile">
              <img
                width={"40px"}
                height={"40px"}
                src={placeholder_profile}
                alt="profile-pic"
              ></img>
            </a>
          ) : user === 1 ? (
            <div className="register-signin-container">
              <a href="/Sign-in" className="sign-in">
                Sign In
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
