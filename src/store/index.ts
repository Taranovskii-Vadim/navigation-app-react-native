import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { postReducer } from "./models/Post";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
