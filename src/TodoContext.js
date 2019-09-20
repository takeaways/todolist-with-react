import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
  {
    id:1,
    text:'프로젝트1',
    done:false
  },
  {
    id:2,
    text:'프로젝트2',
    done:false
  },
  {
    id:3,
    text:'프로젝트3',
    done:false
  },
  {
    id:4,
    text:'프로젝트4',
    done:false
  }
]


function todoReducer(state, action){
  switch (action.type) {
    case 'CREATE':{
      return state.concat(action.todo);
    }
    case 'TOGGLE':{
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done} : todo
      )
    }
    case 'DELETE':{
      return state.filter(
        todo => action.id !== todo.id
      )
    }
    default:
      return state
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context) throw new Error("Connot Find TodoProvider");
  return context
}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context) throw new Error("Connot Find TodoProvider");
  return context
}

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context) throw new Error("Connot Find TodoProvider");
  return context
}

export function TodoProvider({children}){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  )
}
