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
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: textBox }),
    });
  }

  function getData() {
    fetch("/api", { method: "GET" })
      .then((Response) => Response.json())
      .then((data) => {
        setTextBox(data.message);
        test.current.value = data.message;
      });
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
