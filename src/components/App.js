import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const submitCustomTask = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <div>
        <input
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
          placeholder="Enter custom task (more than 5 characters)"
        />
        <button onClick={submitCustomTask}>Submit</button>
      </div>
      <div>
        <h2>Todos:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Counter: {counter}</h2>
      </div>
      <UseMemo todos={todos} />
      <ReactMemo />
    </div>
  );
};

export default App;
