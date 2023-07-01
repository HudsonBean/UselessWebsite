//Imports
import React, { useRef, useState } from "react";
import { json } from "react-router-dom";
import Navbar from "../modules/Navbar";
import "../styles/Home.css";

//Global Functions

//Main
function Home() {
  return (
    <div className="home-body">
      <Navbar />
    </div>
  );
}

export default Home;
