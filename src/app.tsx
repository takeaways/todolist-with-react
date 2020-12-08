import React, { useEffect } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";
import { useDispatch } from "react-redux";
import { loadTodos } from "./store/reducers/todo";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
