import { combineReducers, createStore } from "redux";
import { todo } from "./reducers";

const rootReducer = combineReducers({
  todo,
});
export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer);
