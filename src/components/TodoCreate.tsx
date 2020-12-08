import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/reducers/todo";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";
import {
  CircleButton,
  Input,
  InserForm,
  InsertFromPositioner,
} from "./TodoCreate.style";

function TodoCreate() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const onToggle = () => setOpen(!open);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
    dispatch(createTodo(value));
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFromPositioner>
          <InserForm onSubmit={onSubmit}>
            <Input
              value={value}
              onChange={onChangeText}
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
            />
          </InserForm>
        </InsertFromPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
