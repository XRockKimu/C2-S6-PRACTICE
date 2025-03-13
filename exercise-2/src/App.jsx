import React, { useState } from "react";
import "./index.css";

function App() {
  // State to track the input text
  const [text, setText] = useState("");

  // Handle key press event
  function handleTextChange(event) {
    const inputText = event.target.value;
    console.log("User typed:", inputText);
    setText(inputText);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>
      <label>Enter any text!</label>
      <input
        type="text"
        placeholder="Type here..."
        onChange={handleTextChange}
      />
      <p>
        <label>Here is the text in upper case</label>
        <input type="text" value={text.toUpperCase()} readOnly />
      </p>
    </main>
  );
}

export default App;
