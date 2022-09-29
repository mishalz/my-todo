import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import { Container } from "./components/styles";

function App() {
  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
