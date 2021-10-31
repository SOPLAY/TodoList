import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atoms/TodoListAtom";
export const TodoLists = () => {
  const todos = useRecoilValue(todoListState);
  return (
    <div>
      {todos.map((v) => (
        <div key={v.id}>{v.value}</div>
      ))}
    </div>
  );
};
