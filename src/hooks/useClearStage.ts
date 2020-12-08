import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleUpdate } from "../store/reducers/todo";
export default function useClearStage() {
  const dispatch = useDispatch();

  const clearStage = useCallback(() => {
    dispatch(toggleUpdate(null));
  }, []);

  return clearStage;
}
