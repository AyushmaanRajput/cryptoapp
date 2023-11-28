import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as appReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appReducer: appReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
