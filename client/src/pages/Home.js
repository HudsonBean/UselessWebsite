//Imports
import React, { useRef, useState } from "react";
import { json } from "react-router-dom";

//Main
function Home() {
  const [textBox, setTextBox] = useState("");
  const test = useRef();

  function submitForm(e) {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(textBox),
    });
  }

  function getData() {
    test.current.value = "dadaada";
  }

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          ref={test}
          onChange={(e) => setTextBox(e.target.value)}
        ></input>
        <input type="submit"></input>
        <button onClick={getData}>Get</button>
      </form>
    </div>
  );
}

export default Home;
