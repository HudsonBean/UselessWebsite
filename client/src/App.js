//Imports
import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import Subscriptions from "./pages/Subscriptions";

//Main
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Explore" Component={Explore} />
        <Route path="/Saved" Component={Saved} />
        <Route path="/Store" Component={Store} />
        <Route path="/Profile" Component={Profile} />
        <Route path="/Store/Subscriptions" Component={Subscriptions}></Route>
      </Routes>
    </div>
  );
}

export default App;
