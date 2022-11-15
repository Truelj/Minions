import minionsReducer from "./minions.js";
import selectedMinionReducer from "./selectedMinion.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  minions: minionsReducer,
  selectedMinion: selectedMinionReducer
});

export default rootReducer;