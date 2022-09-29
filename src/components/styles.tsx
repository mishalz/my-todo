import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 100px auto;
  width: 50%;
  box-sizing: border-box;

  @media (min-width: 940) {
    width: 60%;
  }
`;

const AddTodoAnimation = keyframes`
from {
    transform: translateY(-100%);
    opacity: 0;
}
to {
    transform: translateY(0%);
    opacity: 1;	
}`;

export const TodoContainer = styled.div`
  animation-name: ${AddTodoAnimation};
  animation-duration: 1s;
`;

export const Empty = styled.div`
  text-align: center;
  color: #00b8e6;
  font-family: American Typewriter, serif;
`;
export const Todos = styled.div`
  font-family: American Typewriter, serif;
`;
