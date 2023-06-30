//Imports
import React, { useRef, useState } from "react";
import { json } from "react-router-dom";

//Global Functions
function getUsers() {
  fetch("/api/db/users", { method: "GET" })
    .then((Response) => Response.json())
    .then((data) => console.log(data));
}

//Main
function Home() {
  return <div></div>;
}

export default Home;
