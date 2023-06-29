//Imports
import React, { useState } from "react";
import { json } from "react-router-dom";

//Main
function Home() {
  const [textBox, setTextBox] = useState("");

  const a = "Hello";

  function submitForm(e) {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a),
    }).then(() => {
      console.log("done!");
    });
  }

  function getData() {}

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <form onSubmit={submitForm}>
        <input type="text" onChange={(e) => setTextBox(e.target.value)}></input>
        <input type="submit"></input>
        <button onClick={getData}>Get</button>
      </form>
    </div>
  );
}

export default Home;
