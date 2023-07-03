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
    <Routes>
      <Route index element={<Home />} />
      {/*Explore Route*/}
      <Route path="/Explore">
        <Route index element={<Explore />} />
        <Route path="Trending" element={<Explore />} />
      </Route>
      {/*Store Route*/}
      <Route path="/Store">
        <Route index element={<Store />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
      </Route>
      {/*Users Route*/}
      <Route path="/Users">
        <Route path=":id/Profile" element={<Profile />} />
        <Route path=":id/Saved" element={<Saved />} />
      </Route>
    </Routes>
  );
}

export default App;
