import { CREATE, DELTE, TOGGLE, UPDATE } from "./../actions/todo";

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

export type TodoAction =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof updateTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export interface InitialTodoState {
  todos: Todo[];
}

const initialTodoState: InitialTodoState = {
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
  }

  return state;
};

export default reducer;
