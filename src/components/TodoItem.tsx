import React from "react";
import { useDispatch } from "react-redux";
import { MdDone, MdDelete } from "react-icons/md";
import { deleteTodo, toggleTodo } from "../store/reducers/todo";
import { CheckCircle, Remove, TodoItemBlock, Text } from "./TodoItem.style";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

function TodoItem({ id, done, text }: TodoItemProps) {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTodo(id));
  const onRemove = () => dispatch(deleteTodo(id));

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
