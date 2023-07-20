import { combineReducers } from "@reduxjs/toolkit";
import logUser from "./logUser";
import dataUser from "./dataUser";

const rootReducer = combineReducers({
  log: logUser,
  user: dataUser,
});

export default rootReducer;
