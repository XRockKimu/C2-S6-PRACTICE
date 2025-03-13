import React, { useState } from "react";
import "./index.css";

function App() {
  // States to track input values and result
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // Function to check if input is a valid number
  function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== "";
  }

  // Handle input changes
  function handleAChange(event) {
    setA(event.target.value);
  }

  function handleBChange(event) {
    setB(event.target.value);
  }

  // Compute sum or show error
  function computeSum() {
    if (isValidNumber(a) && isValidNumber(b)) {
      setResult(parseFloat(a) + parseFloat(b));
      setError(false);
    } else {
      setResult("A and B shall be numbers!");
      setError(true);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input type="text" value={a} onChange={handleAChange} />
      <label>B =</label>
      <input type="text" value={b} onChange={handleBChange} />
      <label>A + B =</label>
      <input type="text" value={result} readOnly style={{ color: error ? "red" : "black" }} />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
