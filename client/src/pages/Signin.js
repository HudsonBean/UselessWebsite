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
              minLength={"16"}
              required
            />
            <label for={"password"}>Password</label>
            <input
              name={"password"}
              type={"password"}
              placeholder={"coolPassword6"}
              pattern=".{8,}"
              required
            />
            <input type={"submit"} value={"Submit!"} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
