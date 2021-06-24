import { combineReducers, createStore } from "redux";
import { postReducer } from "./models/Post";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer);
