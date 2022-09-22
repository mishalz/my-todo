import { createContext, useState } from "react";
import todoType from "../typeDefs/todo";

type Props = {
  children: JSX.Element;
};

const defaultValue: {
  todos: todoType[];
  addTodos: (todo: todoType) => void;
  deleteTodos: (id: string) => void;
} = {
  todos: [],
  addTodos: (todo: todoType) => {},
  deleteTodos: (id: string) => {},
};

export const TodoContext = createContext(defaultValue);

export const TodoContextProvider = ({ children }: Props) => {
  const defaultTodoValue: todoType[] = [
    { id: "id2421", text: "complete the course" },
  ];
  const [todos, setTodos] = useState(defaultTodoValue);

  const addTodoHandler = (todo: todoType) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos: addTodoHandler,
        deleteTodos: deleteTodoHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
