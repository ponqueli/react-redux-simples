import { numerosReducer } from "./reducers/numerosReducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: numerosReducer
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
