import {
  CREATE,
  DELTE,
  TOGGLE,
  UPDATE,
  TOGGLE_UPDATE,
} from "./../actions/todo";

export const createTodo = (text: string) => ({
  type: CREATE,
  payload: text,
});
export const deleteTodo = (id: number) => ({
  type: DELTE,
  payload: id,
});
export const updateTodo = (updatedTodo: { text: string; id: number }) => ({
  type: UPDATE,
  payload: updatedTodo,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE,
  payload: id,
});
export const toggleUpdate = (stage: Todo | null) => ({
  type: TOGGLE_UPDATE,
  payload: stage,
});

export type TodoAction =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof toggleUpdate>
  | ReturnType<typeof updateTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export interface InitialTodoState {
  nextId: number;
  stage: Todo | null;
  todos: Todo[];
}

const initialTodoState: InitialTodoState = {
  nextId: 1,
  stage: null,
  todos: [
    {
      id: 1,
      text: "hello",
      done: false,
    },
  ],
};

const reducer = (
  state: InitialTodoState = initialTodoState,
  action: TodoAction
): InitialTodoState => {
  switch (action.type) {
    case DELTE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    case CREATE:
      const nextId = state.nextId + 1;
      return {
        ...state,
        nextId,
        todos: [
          ...state.todos,
          { id: nextId, text: action.payload, done: false },
        ],
      };
    case TOGGLE_UPDATE:
      return {
        ...state,
        stage: action.payload,
      };
    case UPDATE:
      const findIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const newTodos = [...state.todos];
      const todo = newTodos[findIndex];
      todo.text = action.payload.text;
      newTodos.splice(findIndex, 1, todo);
      return { ...state, stage: null, todos: newTodos };
  }

  return state;
};

export default reducer;
