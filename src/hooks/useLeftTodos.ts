import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useLeftTodos() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  return todos.filter((todo) => !todo.done).length;
}
