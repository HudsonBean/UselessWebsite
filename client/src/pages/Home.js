//Imports
import React, { useRef, useState } from "react";
import Navbar from "../modules/Navbar";

//Styles
import "../styles/Home.css";

//Global Functions

//Main
function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <div className="avatar-editing-section"></div>
    </div>
  );
}

export default Home;
