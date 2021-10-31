import { atom } from "recoil";
export type TodoList = {
  id: number;
  value: string;
  state: boolean;
};
export const todoListState = atom<TodoList[]>({
  key: "todolistAtoms",
  default: [{ id: 1, state: true, value: "TodoList 작성!" }],
});
export const todoId = atom<number>({ key: "todoId", default: 2 });
