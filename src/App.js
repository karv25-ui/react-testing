import { useState } from 'react'

function App() {
  const [text, setText] = useState("Hello");

  function updateText() {
    setText("Welcome"); 
  }

  function toggleText() {
    setText(prev => (prev === "Hello" ? "Welcome" : "Hello"));
  }

  function upperCase() {
    setText(prev => 
      prev === prev.toUpperCase()
      ? prev.toLowerCase() 
      : prev.toUpperCase()
    );
  }

  function Reset() {
    setText("Hello");
  }
  return (
    <>
    <h1>{text}</h1>
    <button onClick={toggleText}>Toggle</button>
    <button onClick={upperCase}>UpperCase Text</button>
    <button onClick={Reset}>Reset Text</button>
    </>
  );
}

export default App;