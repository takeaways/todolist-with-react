import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useTodos() {
  const totos = useSelector((state: RootState) => state.todo.todos);
  return totos;
}
