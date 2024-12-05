import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./Reducer";
import { composeWithDevToolsLogOnlyInProduction } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store = createStore(
  Reducer,
  composeWithDevToolsLogOnlyInProduction(applyMiddleware(thunk))
);
