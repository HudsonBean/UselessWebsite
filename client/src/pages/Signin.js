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
        <div className="container">
          <h1>Sign-in</h1>
          <form>
            <label for={"email"}>Email</label>
            <input
              name={"email"}
              type={"email"}
              placeholder={"johndoe@gmail.com"}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
