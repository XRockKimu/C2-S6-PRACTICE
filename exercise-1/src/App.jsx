import React, { useState } from "react";
import "./index.css";

function App() {
  // Step 1: State hook to track if it's raining
  const [isRaining, setIsRaining] = useState(false);

  // Step 2: Handle button clicks
  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  // Step 3: Functions to get title and background class
  function getTitle() {
    return isRaining ? "Rain Time!" : "Sun Time!";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
