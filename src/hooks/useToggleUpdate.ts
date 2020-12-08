import { RootState } from "./../store/index";
import { useSelector } from "react-redux";

export default function useToggleUpdate() {
  const stage = useSelector((state: RootState) => state.todo.stage);
  return stage;
}
