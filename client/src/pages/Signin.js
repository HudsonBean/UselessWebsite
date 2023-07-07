//Imports
import React, { useState, useEffect } from "react";
//Styles
import "../styles/Signin.css";
//Components
import Navbar from "../modules/Navbar";

function Signin() {
  let [form, setForm] = useState(1);
  function handleForm(event) {
    event.preventDefault();
    if (form == 1) {
      //Sign in form
      //console.log(form); // 1
      fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "Test",
      });
    } else {
      //Create account form
      //console.log(form); // 2
    }
  }
  return (
    <>
      <Navbar content={2} />
      <div className="body">
        {form == 1 ? (
          <div className="sign-in-container">
            <h1>Sign-in</h1>
            <form onSubmit={handleForm}>
              <label for={"email"}>Email:</label>
              <input
                name={"email"}
                type={"email"}
                placeholder={"johndoe@gmail.com"}
                minLength={"16"}
                required
              />
              <label for={"password"}>Password:</label>
              <input
                name={"password"}
                type={"password"}
                placeholder={"coolPassword6"}
                pattern=".{8,}"
                required
              />
              <input type={"submit"} value={"Sign in!"} />
              <span onClick={() => setForm(2)}>Or create an account?</span>
            </form>
          </div>
        ) : (
          <div className="create-account-container">
            <h1>Create Account</h1>
            <form onSubmit={handleForm}>
              <label for={"username"}>Username:</label>
              <input
                name={"username"}
                type={"text"}
                placeholder={"JohnDoe"}
                minLength={3}
                maxLength={"20"}
                required
              />
              <label for={"email"}>Email:</label>
              <input
                name={"email"}
                type={"email"}
                placeholder={"johndoe@gmail.com"}
                required
              />
              <label for={"password"}>Password:</label>
              <input
                name={"password"}
                type={"password"}
                placeholder={"coolPassword6"}
                pattern=".{8,}"
                required
              />
              <input type={"submit"} value={"Create Account!"} />
              <span onClick={() => setForm(1)}>Or sign in?</span>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Signin;
