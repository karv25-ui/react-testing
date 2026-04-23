import { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("Hello");

  function updateText() {
    setText("Welcome");
  }

  function toggleText() {
    setText((prev) => (prev === "Hello" ? "Welcome" : "Hello"));
  }

  function upperCase() {
    setText((prev) =>
      prev === prev.toUpperCase() ? prev.toLowerCase() : prev.toUpperCase()
    );
  }

  function Reset() {
    setText("Hello");
  }

  function nameInput() {
    const [name, setName] = useState("");
  }
  return (
    <>
      <h1>{text}</h1>
      <input placeholder="Enter Name:" />
      <h2>Booking for: </h2>
      <button onClick={toggleText}>Toggle</button>
      <button onClick={upperCase}>UpperCase Text</button>
      <button onClick={Reset}>Reset Text</button>
    </>
  );
}

export default App;
