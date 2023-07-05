//Imports
import React from "react";
//Styles
import "../styles/Signin.css";
//Components
import Navbar from "../modules/Navbar";

function Signin() {
  return (
    <>
      <Navbar content={2} />
      <div className="signin-body">
        <form>
          <h2>Sign-in</h2>
        </form>
      </div>
    </>
  );
}

export default Signin;
