//Imports
import React, { useState, useRef } from "react";
//Styles
import "../styles/Signin.css";
//Components
import Navbar from "../modules/Navbar";

function Signin() {
  //Variables
  let [form, setForm] = useState(1);
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  //Functions
  function handleForm(event) {
    event.preventDefault();
    let userData = [userName, userEmail, userPassword];
    if (form === 1) {
      //Sign in form
      //console.log(form); // 1
      fetch("/api/db/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
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
        {form === 1 ? (
          <div className="sign-in-container">
            <h1>Sign-in</h1>
            <form onSubmit={handleForm}>
              <label htmlFor={"email"}>Email:</label>
              <input
                ref={emailRef}
                name={"email"}
                type={"email"}
                placeholder={"johndoe@gmail.com"}
                minLength={"16"}
                required
              />
              <label htmlFor={"password"}>Password:</label>
              <input
                ref={passwordRef}
                name={"password"}
                type={"password"}
                placeholder={"coolPassword6"}
                pattern=".{8,}"
                required
              />
              <input
                type={"submit"}
                value={"Sign in!"}
                onClick={() => {
                  setUserEmail(emailRef.current.value);
                  setUserPassword(passwordRef.current.value);
                }}
              />
              <span onClick={() => setForm(2)}>Or create an account?</span>
            </form>
          </div>
        ) : (
          <div className="create-account-container">
            <h1>Create Account</h1>
            <form onSubmit={handleForm}>
              <label htmlFor={"username"}>Username:</label>
              <input
                name={"username"}
                type={"text"}
                placeholder={"JohnDoe"}
                minLength={3}
                maxLength={"20"}
                required
              />
              <label htmlFor={"email"}>Email:</label>
              <input
                name={"email"}
                type={"email"}
                placeholder={"johndoe@gmail.com"}
                required
              />
              <label htmlFor={"password"}>Password:</label>
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
