import { combineReducers } from "@reduxjs/toolkit";
import logUser from "./logUser";

const rootReducer = combineReducers({
  log: logUser,
});

export default rootReducer;
