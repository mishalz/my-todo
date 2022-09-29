import React, { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import { Divider } from "antd";
import Todo from "./Todo";
import { Empty, Todos } from "./styles";

function TodoList() {
  const todoContext = useContext(TodoContext);

  return (
    <Todos>
      <Divider>Todos</Divider>

      {todoContext.todos.length > 0 &&
        todoContext.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      {todoContext.todos.length === 0 && <Empty>nothing to do</Empty>}
      {todoContext.completeTodos.length > 0 && (
        <>
          <Divider>Completed Todos</Divider>
          {todoContext.completeTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </Todos>
  );
}

export default TodoList;
