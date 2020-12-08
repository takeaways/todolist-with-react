import React from "react";
import { useDispatch } from "react-redux";
import { MdDone, MdDelete } from "react-icons/md";
import { deleteTodo, toggleTodo, toggleUpdate } from "../store/reducers/todo";
import { CheckCircle, Remove, TodoItemBlock, Text } from "./TodoItem.style";
import moment from "moment";
import useClearStage from "../hooks/useClearStage";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
  at: Date;
};

function TodoItem({ todo }: { todo: TodoItemProps }) {
  const { id, done, text, at } = todo;
  const dispatch = useDispatch();
  const clearStage = useClearStage();
  const onToggle = () => dispatch(toggleTodo(id));
  const onRemove = () => {
    dispatch(deleteTodo(id));
    clearStage();
  };
  const onToggleUpdate = () => dispatch(toggleUpdate(todo));

  console.log("1--->", todo);

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done} onClick={onToggleUpdate}>
        <span>{text}</span>
        <span>{moment(at).fromNow()}</span>
      </Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
