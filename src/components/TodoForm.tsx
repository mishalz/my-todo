import { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/todo-context";
import { Form, Row, Col, Button, Input } from "antd";
import type { InputRef } from "antd";

function TodoForm() {
  const todoContext = useContext(TodoContext);
  const todoTextRef = useRef<InputRef>(null);
  const [todoInputVal, setTodoInputVal] = useState("");
  const addTodoHandler = () => {
    if (todoTextRef.current && todoTextRef.current.input?.value) {
      todoContext.addTodos({
        id: `t${Math.random()}`,
        text: todoTextRef.current.input.value,
        checked: false,
      });
      setTodoInputVal("");
    }
  };
  return (
    <Form>
      <Row justify="space-between">
        <Col span={20}>
          <Form.Item
            rules={[{ required: true, message: "Todo Item can not be empty!" }]}
          >
            <Input
              id="todo-text"
              type="ghost"
              ref={todoTextRef}
              placeholder="You must have something to do."
              value={todoInputVal}
              onChange={(e) => {
                setTodoInputVal(e.target.value);
              }}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button onClick={addTodoHandler} type="ghost">
              Add Todo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default TodoForm;
