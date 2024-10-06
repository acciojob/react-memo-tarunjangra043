import React, { useMemo } from "react";

const UseMemo = ({ todos }) => {
  const todoCount = useMemo(() => {
    console.log("Calculating todo count...");
    return todos.length;
  }, [todos]);

  return <div>Total Todos: {todoCount}</div>;
};

export default UseMemo;
