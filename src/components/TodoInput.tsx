import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoId, TodoList, todoListState } from "../atoms/TodoListAtom";
import Plus from "../icon/plus-solid.svg";

const Box = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  min-width: 600px;
  min-height: 80px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-left: 50px;
  font-size: 2.5rem;
`;

const PlusBtn = styled.button`
  display: flex;
  position: absolute;
  text-align: center;
  right: 0;
  width: 80px;
  height: 80px;
  background-color: #4dabf7;
  text-align: center;
  justify-content: center;
  border: none;
  &:hover {
    background-color: #339af0;
  }
  &:active {
    background-color: #1971c2;
  }
`;

export const TodoInput = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);
  const [idTodos, setIdTodos] = useRecoilState(todoId);
  const onClick = (): void => {
    const todo: TodoList = {
      id: idTodos,
      state: true,
      value: input,
    };
    setIdTodos(idTodos + 1);
    setTodos([...todos, todo]);
  };
  return (
    <Box>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력해주세요!"
      />
      <PlusBtn onClick={onClick}>
        <img src={Plus} alt="+" />
      </PlusBtn>
    </Box>
  );
};
