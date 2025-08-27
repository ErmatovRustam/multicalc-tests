// src/App.jsx
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  // Calculation helpers
  const cubed = value ** 3;
  const multiplyByThree = value * 3;
  const addOne = value + 1;
  const squareRoot = Math.sqrt(value);

  return (
    <div>
      <main>
        {/* */}
        <h1>Multi-Calc</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="value">Calculate with:</label>
          <input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <button type="submit">Submit</button>
        </form>

        <hr />
        <h2>Calculations</h2>
        <ul>
          <li>
            <h2>Add 1</h2>
            <p>{addOne}</p>
          </li>
          <li>
            <h2>Cubed</h2>
            <p>{cubed}</p>
          </li>
          <li>
            <h2>Multiply by 3</h2>
            <p>{multiplyByThree}</p>
          </li>
          <li>
            <h2>Square Root</h2>
            <p>{squareRoot}</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
