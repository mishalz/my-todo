import React, { useContext } from "react";
import { TodoContext } from "../context/todo-context";

type todoProps = {
  id: string;
  text: string;
};
function Todo({ id, text }: todoProps) {
  const todoContext = useContext(TodoContext);
  const deleteTodoHandler = (id: string) => {
    todoContext.deleteTodos(id);
  };
  return (
    <div>
      <div className="todo-text">{text}</div>

      <button onClick={deleteTodoHandler.bind(null, id)}>delete</button>
    </div>
  );
}

export default Todo;
