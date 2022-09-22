import React, { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import Todo from "./Todo";

function TodoList() {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      {todoContext.todos.map((todo) => (
        <Todo key={todo.id} text={todo.text} id={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
