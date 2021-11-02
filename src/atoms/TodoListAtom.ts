import { atom } from "recoil";
import { localState } from "./SaveTodoList";

export type TodoList = {
  id: number;
  value: string;
  state: boolean;
};

const initialTodo: TodoList[] = [
  { id: 1, state: true, value: "TodoList 작성!" },
];

export const todoListState = atom<TodoList[]>({
  key: "todolistAtoms",
  default: localState.length > 0 ? localState : initialTodo,
});

export const todoId = atom<number>({
  key: "todoId",
  default: localState.length > 0 ? localState[localState.length - 1] : 2,
});
