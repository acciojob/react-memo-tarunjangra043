import React, { useState } from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState(["New Todo"]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <UseMemoComponent />

      <ReactMemoComponent />
    </div>
  );
}

export default App;
