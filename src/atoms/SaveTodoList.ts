import { TodoList } from "./TodoListAtom";

export const saveTodos = (todosAtomData?: TodoList[]) => {
  localStorage.setItem("todos", JSON.stringify(todosAtomData));
};
export const localState = JSON.parse(localStorage.getItem("todos") || "0");
