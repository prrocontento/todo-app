import React, { useContext } from "react";
import { TodoContext } from "../context";

export function TodoCounter() {
  const { todos } = useContext(TodoContext);
  const counterStyle = {
    minHeight: "72px",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div style={counterStyle}>
      <h1>
        Has completado {completedTodos}/{todos.length} tareas
      </h1>
    </div>
  );
}
