import { combineReducers } from "redux";
import classReducer from "./classReducer";

const rootReducer = combineReducers({
  classes: classReducer,
});

export default rootReducer;
