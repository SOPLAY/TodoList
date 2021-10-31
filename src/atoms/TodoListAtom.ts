import { atom } from "recoil";
export type TodoList = {
  id: number;
  value: string;
  state: boolean;
};
export const todoListState = atom<TodoList[]>({
  key: "todolistAtoms",
  default: [{ id: 1, value: "TodoList 작성!", state: true }],
});
export const todoId = atom<number>({ key: "todoId", default: 2 });
