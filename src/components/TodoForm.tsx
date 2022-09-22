import React, { useContext, useRef } from "react";
import { TodoContext } from "../context/todo-context";

function TodoForm() {
  const todoContext = useContext(TodoContext);
  const todoTextRef = useRef<HTMLInputElement>(null);
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (todoTextRef.current && todoTextRef.current.value) {
      todoContext.addTodos({
        id: `t${Math.random()}`,
        text: todoTextRef.current.value,
      });
    }
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input id="todo-text" type="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
