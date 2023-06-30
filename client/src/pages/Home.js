//Imports
import React, { useRef, useState } from "react";
import { json } from "react-router-dom";

//Main
function Home() {
  function test() {
    fetch("/api/db", { method: "GET" })
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <button onClick={test}>Test!</button>
    </div>
  );
}

export default Home;
