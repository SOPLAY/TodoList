import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atoms/TodoListAtom";
import check from "../icon/check-solid.svg";
import checkAct from "../icon/check-solid-act.svg";
import trash from "../icon/trash-alt-solid.svg";
const Todo = styled.div`
  position: relative;
  display: flex;
  width: 500px;
  height: 50px;
  margin-bottom: 10px;
  align-items: center;
`;

const CheckImg1 = styled.img`
  margin-left: 15px;
  width: 20px;
  opacity: 0.25;
`;
const CheckImg2 = styled.img`
  margin-left: 15px;
  width: 20px;
  opacity: 1;
`;

const TrashImg = styled.img`
  position: absolute;
  right: 15px;
  height: 20px;
  opacity: 0.25;
  transition: 0.25s;
  &:hover {
    opacity: 1;
  }
`;

const Value = styled.div`
  user-select: none;
  width: 400px;
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  cursor: default;
`;
const CheckDiv = styled.div`
  display: flex;
`;
type TodoList = { id: number; value: string; state: boolean };
const TodoItem = (v: TodoList) => {
  const { id, value, state } = v;
  const [todos, setTodos] = useRecoilState(todoListState);
  const deletTodoItems = (id: number): void => {
    setTodos(todos.filter((v) => v.id !== id));
  };
  const onCheck = () => {
    const todo = { id, value, state: !state };
    setTodos(todos.map((v) => (v.id === id ? todo : v)));
  };
  return (
    <Todo>
      <CheckDiv onClick={() => onCheck()}>
        {state ? <CheckImg1 src={check} /> : <CheckImg2 src={checkAct} />}
        <Value>{value}</Value>
      </CheckDiv>
      <TrashImg src={trash} onClick={() => deletTodoItems(id)} />
    </Todo>
  );
};
export default React.memo(TodoItem);
