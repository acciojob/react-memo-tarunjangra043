import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [number, setNumber] = useState(100000000);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i <= num; i++) {}
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p id="calc">{calculation}</p>
    </div>
  );
}

export default UseMemoComponent;
