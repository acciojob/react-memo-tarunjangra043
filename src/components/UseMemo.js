import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [number, setNumber] = useState(100000000);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i <= num; i++) {}
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  const increment = () => {
    setNumber(number + 100000000);
  };

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p id="calc">{calculation}</p>

      <button id="incr-cnt" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default UseMemoComponent;
