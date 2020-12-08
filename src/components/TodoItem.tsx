import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDone, MdDelete } from "react-icons/md";
import { deleteTodo, toggleTodo, toggleUpdate } from "../store/reducers/todo";
import { CheckCircle, Remove, TodoItemBlock, Text } from "./TodoItem.style";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

function TodoItem(props: TodoItemProps) {
  const { id, done, text } = props;
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTodo(id));
  const onRemove = () => dispatch(deleteTodo(id));
  const onToggleUpdate = () => dispatch(toggleUpdate(props));

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done} onClick={onToggleUpdate}>
        {text}
      </Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
