import { combineReducers } from "redux";
import { classReducer } from "./classReducer";
import { userInformationReducer } from './userInformationReducer'

export default combineReducers({
  classes: classReducer,
  user: userInformationReducer
});
