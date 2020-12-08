import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todo } from "./reducers";

const rootReducer = combineReducers({
  todo,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
