import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atoms/TodoListAtom";
import TodoItem from "./TodoItem";
const Block = styled.div`
  margin-top: 20px;
  width: 600px;
  height: 600px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 40px 50px;
  box-sizing: border-box;
  overflow: auto;
`;
const TodoLists = () => {
  const todos = useRecoilValue(todoListState);
  return (
    <Block>
      {todos.map((v) => (
        <TodoItem key={v.id} id={v.id} value={v.value} state={v.state} />
      ))}
    </Block>
  );
};

export default React.memo(TodoLists);
