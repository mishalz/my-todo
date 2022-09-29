import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import {
  DeleteTwoTone,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import { TodoContainer } from "./styles";
import todoType from "../typeDefs/todo";

type TodoProps = { todo: todoType };
function Todo({ todo }: TodoProps) {
  const todoContext = useContext(TodoContext);
  const deleteTodoHandler = (id: string) => {
    todoContext.deleteTodos(id);
  };
  return (
    <TodoContainer>
      <Row justify="space-between">
        <Col>
          <span>{todo.text}</span>
        </Col>
        <Col>
          {!todo.checked && (
            <Button
              icon={<CheckCircleOutlined />}
              onClick={() => todoContext.checkTodo(todo)}
            />
          )}
          {todo.checked && (
            <Button
              icon={<CloseCircleOutlined />}
              onClick={() => todoContext.uncheckTodo(todo)}
            />
          )}
          <Button
            icon={<DeleteTwoTone />}
            onClick={deleteTodoHandler.bind(null, todo.id)}
          />
        </Col>
      </Row>
    </TodoContainer>
  );
}

export default Todo;
