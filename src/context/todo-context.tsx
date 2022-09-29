import { createContext, useState } from "react";
import todoType from "../typeDefs/todo";

type Props = {
  children: JSX.Element;
};

const defaultValue: {
  todos: todoType[];
  completeTodos: todoType[];
  addTodos: (todo: todoType) => void;
  deleteTodos: (id: string) => void;
  checkTodo: (todo: todoType) => void;
  uncheckTodo: (todo: todoType) => void;
} = {
  todos: [],
  completeTodos: [],
  addTodos: (todo: todoType) => {},
  deleteTodos: (id: string) => {},
  checkTodo: (todo: todoType) => {},
  uncheckTodo: (todo: todoType) => {},
};

export const TodoContext = createContext(defaultValue);

export const TodoContextProvider = ({ children }: Props) => {
  const defaultTodoValue: todoType[] = [];
  const [todos, setTodos] = useState(defaultTodoValue);
  const [completeTodos, setCompletedTodos] = useState(defaultTodoValue);

  const addTodoHandler = (todo: todoType) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setCompletedTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const checkTodoHandler = (todo: todoType) => {
    const tempTodo = { ...todo, checked: !todo.checked };
    setTodos((prev) => [...prev.filter((todo) => todo.id !== tempTodo.id)]);
    setCompletedTodos((prev) => [tempTodo, ...prev]);
  };
  const uncheckTodoHandler = (todo: todoType) => {
    const tempTodo = { ...todo, checked: !todo.checked };
    setCompletedTodos((prev) => [
      ...prev.filter((todo) => todo.id !== tempTodo.id),
    ]);
    setTodos((prev) => [tempTodo, ...prev]);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        completeTodos,
        addTodos: addTodoHandler,
        deleteTodos: deleteTodoHandler,
        checkTodo: checkTodoHandler,
        uncheckTodo: uncheckTodoHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
