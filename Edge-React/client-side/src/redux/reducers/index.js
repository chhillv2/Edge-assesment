import { combineReducers } from "redux";
import authors from "./authors";
import errors from "./errors";


export default combineReducers({
  authors,
  errors,
});
