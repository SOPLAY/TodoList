import styled from "styled-components";
import { TodoList } from "../atoms/TodoListAtom";
import check from "../icon/check-solid.svg";
import trash from "../icon/trash-alt-solid.svg";
const Todo = styled.div`
  position: relative;
  display: flex;
  width: 500px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid red;
  align-items: center;
`;

const CheckImg = styled.img`
  margin-left: 15px;
  width: 20px;
  opacity: 0.25;
`;

const TrashImg = styled.img`
  position: absolute;
  right: 15px;
  height: 20px;
`;

const Value = styled.p`
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
`;
export const TodoItem = ({ id, value, state }: TodoList) => {
  return (
    <Todo>
      <CheckImg src={check} />
      <Value>{value}</Value>
      <TrashImg
        src={trash}
        onClick={() => console.log(`${id}의 삭제버튼이 눌림`)}
      />
    </Todo>
  );
};
