import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import useClearStage from "../hooks/useClearStage";
import useToggleUpdate from "../hooks/useToggleUpdate";
import { createTodo, updateTodo } from "../store/reducers/todo";

import {
  CircleButton,
  Input,
  InserForm,
  InsertFromPositioner,
} from "./TodoCreate.style";

function TodoCreate() {
  const dispatch = useDispatch();
  const stage = useToggleUpdate();
  const clearStage = useClearStage();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const onToggle = () => {
    clearStage();
    setOpen(!open);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
    if (stage) {
      dispatch(updateTodo({ text: value, id: stage.id }));
    } else {
      dispatch(createTodo(value));
    }
    setOpen(false);
  };

  useEffect(() => {
    if (stage && stage.id) {
      setOpen(true);
      setValue(stage.text);
    } else {
      setValue("");
    }
  }, [stage && stage.id]);

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
