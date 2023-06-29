//Imports
import React from "react";
import { Route, Link, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home.js";

//Main
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
