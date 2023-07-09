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
import Signin from "./pages/Signin";

//Global Variables
let user = NaN;
export let isLoggedIn = false;

//Global functions
function setUser(a) {
  user = a;
}

//Exports
export { user, setUser };

//Main
function App() {
  return (
    <Routes>
      {/*Home Route*/}
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
      {/*Sign In Routes*/}
      <Route path="Sign-in" element={<Signin />} />
    </Routes>
  );
}

export default App;
